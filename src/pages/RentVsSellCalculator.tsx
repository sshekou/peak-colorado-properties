import { useState, useMemo } from "react";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface CalculatorInputs {
  homeValue: number;
  pricePaid: number;
  originalMortgage: number;
  mortgageBalance: number;
  interestRate: number;
  monthlyMortgagePayment: number;
  monthlyTaxesInsurance: number;
  monthlyRent: number;
  appreciationRate: number;
  yearsToHold: number;
  isPrimaryResidence: boolean;
  makeReadyCosts: number;
  annualMaintenanceCosts: number;
  vacancyRate: number;
  sellingCosts: number;
}

const defaultInputs: CalculatorInputs = {
  homeValue: 800000,
  pricePaid: 700000,
  originalMortgage: 560000,
  mortgageBalance: 98000,
  interestRate: 5.0,
  monthlyMortgagePayment: 3006,
  monthlyTaxesInsurance: 1200,
  monthlyRent: 2650,
  appreciationRate: 5.0,
  yearsToHold: 5,
  isPrimaryResidence: false,
  makeReadyCosts: 5000,
  annualMaintenanceCosts: 8000,
  vacancyRate: 5.0,
  sellingCosts: 6.0,
};

interface YearlyProjection {
  year: number;
  rentalIncome: number;
  mortgageExpense: number;
  otherCosts: number;
  netCashFlow: number;
  houseValue: number;
  houseEquity: number;
  wealthRentOut: number;
  wealthSellNow: number;
  wealthDifference: number;
}

const RentVsSellCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultInputs);
  const [selectedYear, setSelectedYear] = useState([3]);

  const updateInput = (field: keyof CalculatorInputs, value: number | boolean) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const projections = useMemo(() => {
    const results: YearlyProjection[] = [];
    let currentEquity = inputs.homeValue - inputs.mortgageBalance;
    let sellNowValue = inputs.homeValue * (1 - inputs.sellingCosts / 100);
    
    // Initial sell now wealth (home value minus selling costs)
    const initialSellNowWealth = sellNowValue;

    for (let year = 1; year <= inputs.yearsToHold; year++) {
      const currentHomeValue = inputs.homeValue * Math.pow(1 + inputs.appreciationRate / 100, year);
      const annualRent = inputs.monthlyRent * 12 * Math.pow(1.04, year - 1); // 4% annual rent increases
      const effectiveRentalIncome = annualRent * (1 - inputs.vacancyRate / 100);
      const annualMortgageExpense = inputs.monthlyMortgagePayment * 12;
      const otherCosts = inputs.annualMaintenanceCosts * Math.pow(1.03, year - 1); // 3% inflation on maintenance
      
      // Add make-ready costs in year 1 and every 3 years
      const makeReadyThisYear = year === 1 || year % 3 === 0 ? inputs.makeReadyCosts : 0;
      const totalOtherCosts = otherCosts + makeReadyThisYear + (inputs.monthlyTaxesInsurance * 12);
      
      const netCashFlow = effectiveRentalIncome - annualMortgageExpense - totalOtherCosts;
      
      // Calculate remaining mortgage balance (simplified)
      const remainingBalance = Math.max(0, inputs.mortgageBalance * Math.pow(0.95, year));
      const houseEquity = currentHomeValue - remainingBalance;
      
      // Wealth if renting out (previous wealth + net cash flow)
      const wealthRentOut = year === 1 
        ? currentEquity + netCashFlow 
        : results[year - 2].wealthRentOut + netCashFlow;
      
      // Wealth if sold now (invested at 7% annually)
      const wealthSellNow = initialSellNowWealth * Math.pow(1.07, year);
      
      results.push({
        year,
        rentalIncome: effectiveRentalIncome,
        mortgageExpense: -annualMortgageExpense,
        otherCosts: -totalOtherCosts,
        netCashFlow,
        houseValue: currentHomeValue,
        houseEquity,
        wealthRentOut,
        wealthSellNow,
        wealthDifference: wealthRentOut - wealthSellNow,
      });
    }
    
    return results;
  }, [inputs]);

  const chartData = projections.map(p => ({
    year: p.year,
    "Rent Out": Math.round(p.wealthRentOut),
    "Sell Now": Math.round(p.wealthSellNow),
  }));

  const currentProjection = projections[selectedYear[0] - 1];
  const finalProjection = projections[projections.length - 1];

  const formatCurrency = (amount: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount);

  return (
    <>
      <SEO 
        title="Rent vs. Sell Calculator | Peak Properties Boulder" 
        description="Calculate whether renting out your Boulder property or selling now will generate more wealth over time. Free calculator with Boulder market data." 
        canonicalPath="/rent-vs-sell-calculator"
        type="WebPage"
      />
      
      <div className="container py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-head text-4xl text-center mb-12">Rent vs. Sell Calculator</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Results Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Result */}
              <Card>
                <CardContent className="p-6">
                  {finalProjection && (
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-semibold mb-2">
                        If you <span className="text-primary font-bold">
                          {finalProjection.wealthDifference > 0 ? 'RENT OUT' : 'SELL NOW'}
                        </span> your property, you'll have{' '}
                        <span className="text-primary font-bold">
                          {formatCurrency(Math.abs(finalProjection.wealthDifference))}
                        </span>{' '}
                        more wealth in {inputs.yearsToHold} years
                      </h2>
                    </div>
                  )}

                  {/* Chart */}
                  <div className="h-80 mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                        <Tooltip formatter={(value) => [formatCurrency(value as number), '']} />
                        <Legend />
                        <Line type="monotone" dataKey="Rent Out" stroke="#3b82f6" strokeWidth={3} />
                        <Line type="monotone" dataKey="Sell Now" stroke="#ef4444" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Year Slider */}
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground text-center">Move the slider to see the change per year</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label>Year</Label>
                        <span className="font-semibold">{selectedYear[0]}</span>
                      </div>
                      <Slider
                        value={selectedYear}
                        onValueChange={setSelectedYear}
                        min={1}
                        max={inputs.yearsToHold}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {currentProjection && (
                      <div className="grid grid-cols-3 gap-4 text-center mt-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Rent Out</p>
                          <p className="text-2xl font-bold text-primary">{formatCurrency(currentProjection.wealthRentOut)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Sell Now</p>
                          <p className="text-2xl font-bold text-red-600">{formatCurrency(currentProjection.wealthSellNow)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Difference in Wealth</p>
                          <p className="text-2xl font-bold">{formatCurrency(currentProjection.wealthDifference)}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Year-by-Year Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Year</th>
                          <th className="text-right p-2">Rental Income</th>
                          <th className="text-right p-2">Mortgage</th>
                          <th className="text-right p-2">Other Costs</th>
                          <th className="text-right p-2">Net Cash Flow</th>
                          <th className="text-right p-2">House Value</th>
                          <th className="text-right p-2">Wealth (Rent)</th>
                          <th className="text-right p-2">Wealth (Sell)</th>
                          <th className="text-right p-2">Difference</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projections.map((proj, index) => (
                          <tr key={proj.year} className={`border-b ${selectedYear[0] === proj.year ? 'bg-primary/10' : ''}`}>
                            <td className="p-2 font-medium">{proj.year}</td>
                            <td className="p-2 text-right">{formatCurrency(proj.rentalIncome)}</td>
                            <td className="p-2 text-right text-red-600">{formatCurrency(proj.mortgageExpense)}</td>
                            <td className="p-2 text-right text-red-600">{formatCurrency(proj.otherCosts)}</td>
                            <td className="p-2 text-right">{formatCurrency(proj.netCashFlow)}</td>
                            <td className="p-2 text-right">{formatCurrency(proj.houseValue)}</td>
                            <td className="p-2 text-right font-medium">{formatCurrency(proj.wealthRentOut)}</td>
                            <td className="p-2 text-right font-medium">{formatCurrency(proj.wealthSellNow)}</td>
                            <td className="p-2 text-right font-bold">{formatCurrency(proj.wealthDifference)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Input Form */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Property Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="homeValue">Home Value</Label>
                    <Input
                      id="homeValue"
                      type="number"
                      value={inputs.homeValue}
                      onChange={(e) => updateInput('homeValue', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="pricePaid">Price Paid</Label>
                    <Input
                      id="pricePaid"
                      type="number"
                      value={inputs.pricePaid}
                      onChange={(e) => updateInput('pricePaid', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="mortgageBalance">Mortgage Balance</Label>
                    <Input
                      id="mortgageBalance"
                      type="number"
                      value={inputs.mortgageBalance}
                      onChange={(e) => updateInput('mortgageBalance', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="interestRate">Interest Rate (%)</Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.1"
                      value={inputs.interestRate}
                      onChange={(e) => updateInput('interestRate', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="mortgagePayment">Monthly Mortgage Payment</Label>
                    <Input
                      id="mortgagePayment"
                      type="number"
                      value={inputs.monthlyMortgagePayment}
                      onChange={(e) => updateInput('monthlyMortgagePayment', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="taxesInsurance">Monthly Taxes & Insurance</Label>
                    <Input
                      id="taxesInsurance"
                      type="number"
                      value={inputs.monthlyTaxesInsurance}
                      onChange={(e) => updateInput('monthlyTaxesInsurance', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthlyRent">Monthly Rent</Label>
                    <Input
                      id="monthlyRent"
                      type="number"
                      value={inputs.monthlyRent}
                      onChange={(e) => updateInput('monthlyRent', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="appreciationRate">Appreciation Rate (% per year)</Label>
                    <Input
                      id="appreciationRate"
                      type="number"
                      step="0.1"
                      value={inputs.appreciationRate}
                      onChange={(e) => updateInput('appreciationRate', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="yearsToHold">Years to Hold</Label>
                    <Input
                      id="yearsToHold"
                      type="number"
                      value={inputs.yearsToHold}
                      onChange={(e) => {
                        const years = Number(e.target.value);
                        updateInput('yearsToHold', years);
                        if (selectedYear[0] > years) {
                          setSelectedYear([years]);
                        }
                      }}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="primaryResidence"
                      checked={inputs.isPrimaryResidence}
                      onCheckedChange={(checked) => updateInput('isPrimaryResidence', !!checked)}
                    />
                    <Label htmlFor="primaryResidence">Primary Residence? (lived here 2+ of last 5 years)</Label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Advanced Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="makeReadyCosts">Make-Ready Costs</Label>
                    <Input
                      id="makeReadyCosts"
                      type="number"
                      value={inputs.makeReadyCosts}
                      onChange={(e) => updateInput('makeReadyCosts', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="maintenanceCosts">Annual Maintenance Costs</Label>
                    <Input
                      id="maintenanceCosts"
                      type="number"
                      value={inputs.annualMaintenanceCosts}
                      onChange={(e) => updateInput('annualMaintenanceCosts', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="vacancyRate">Vacancy Rate (%)</Label>
                    <Input
                      id="vacancyRate"
                      type="number"
                      step="0.1"
                      value={inputs.vacancyRate}
                      onChange={(e) => updateInput('vacancyRate', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="sellingCosts">Selling Costs (%)</Label>
                    <Input
                      id="sellingCosts"
                      type="number"
                      step="0.1"
                      value={inputs.sellingCosts}
                      onChange={(e) => updateInput('sellingCosts', Number(e.target.value))}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="text-xs text-muted-foreground">
                <p><strong>Disclaimer:</strong> This data is provided for informational purposes only. 
                It is not to be relied upon as a guarantee of any future result. 
                Consult a qualified professional before making any decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentVsSellCalculator;