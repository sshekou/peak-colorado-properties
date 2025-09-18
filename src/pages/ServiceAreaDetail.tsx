import { useParams } from "react-router-dom";
import { locations } from "@/data/locations";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingDown, Building2, Home, Calendar } from "lucide-react";

// Sample data for Boulder - adjust for each location
const getBoulderMarketData = () => ({
  metrics: [
    {
      title: "Average Rent",
      value: "$2,508",
      change: "-8.3%",
      changeType: "decrease" as const,
      icon: TrendingDown
    },
    {
      title: "Available Units", 
      value: "828",
      change: "+12%",
      changeType: "increase" as const,
      icon: Building2
    },
    {
      title: "Vacancy Rate",
      value: "9.3%", 
      change: "+1.4%",
      changeType: "increase" as const,
      icon: Home
    },
    {
      title: "Days on Market",
      value: "76",
      change: "+11",
      changeType: "increase" as const,
      icon: Calendar
    }
  ],
  rentTrends: [
    { month: "Jan 2024", rent: 2650 },
    { month: "Feb 2024", rent: 2680 },
    { month: "Mar 2024", rent: 2720 },
    { month: "Apr 2024", rent: 2750 },
    { month: "May 2024", rent: 2780 },
    { month: "Jun 2024", rent: 2800 },
    { month: "Jul 2024", rent: 2790 },
    { month: "Aug 2024", rent: 2760 },
    { month: "Sep 2024", rent: 2710 },
    { month: "Oct 2024", rent: 2680 },
    { month: "Nov 2024", rent: 2620 },
    { month: "Dec 2024", rent: 2580 },
    { month: "Jan 2025", rent: 2550 },
    { month: "Feb 2025", rent: 2520 },
    { month: "Mar 2025", rent: 2508 }
  ],
  rentDistribution: [
    { range: "$700-$1,000", percentage: 5, color: "#8B5CF6" },
    { range: "$1,001-$1,500", percentage: 21, color: "#06B6D4" },
    { range: "$1,501-$2,000", percentage: 33, color: "#F59E0B" },
    { range: "$2,001+", percentage: 41, color: "#EF4444" }
  ]
});

const ServiceAreaDetail = () => {
  const { slug } = useParams();
  const info = locations.find((l) => l.slug === slug);
  
  if (!info) return <div className="container py-12">Area not found.</div>;
  
  const marketData = getBoulderMarketData(); // For now, using Boulder data for all areas
  
  return (
    <>
      <SEO title={`${info.name} Rental Market Analysis | Peak Properties`} description={`Comprehensive market insights for property owners and renters in ${info.name}, Colorado.`} canonicalPath={`/service-areas/${info.slug}`} type="Service" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container py-12">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="font-head text-4xl mb-2">{info.name} Rental Market Analysis</h1>
              <p className="text-muted-foreground">Comprehensive market insights for property owners and renters</p>
            </div>
            <div className="text-right">
              <div className="font-semibold">Peak Properties</div>
              <div className="text-sm text-muted-foreground">September 2025</div>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {marketData.metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{metric.title}</span>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className={`text-sm flex items-center ${
                    metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.changeType === 'increase' ? '↗' : '↘'} {metric.change}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Tabs Navigation */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-white/50 backdrop-blur-sm">
              <TabsTrigger value="overview">Market Overview</TabsTrigger>
              <TabsTrigger value="owners">For Owners</TabsTrigger>
              <TabsTrigger value="renters">For Renters</TabsTrigger>
              <TabsTrigger value="neighborhoods">Neighborhoods</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Charts Row */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Rent Trends Chart */}
                <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">Rent Trends Over Time</h3>
                  <p className="text-sm text-muted-foreground mb-4">Average rental prices in {info.name} over the past 18 months</p>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={marketData.rentTrends}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                        <XAxis 
                          dataKey="month" 
                          tick={{ fontSize: 12 }}
                          interval="preserveStartEnd"
                        />
                        <YAxis 
                          tick={{ fontSize: 12 }}
                          domain={['dataMin - 100', 'dataMax + 100']}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="rent" 
                          stroke="#3b82f6" 
                          strokeWidth={3}
                          fill="#3b82f6"
                          fillOpacity={0.1}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                {/* Rent Distribution Chart */}
                <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                  <h3 className="text-lg font-semibold mb-2">Rent Distribution</h3>
                  <p className="text-sm text-muted-foreground mb-4">Percentage of rentals by price range</p>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={marketData.rentDistribution}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="percentage"
                        >
                          {marketData.rentDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {marketData.rentDistribution.map((item, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span>{item.range}: {item.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Market Summary */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Market Summary</h3>
                <p className="text-sm text-muted-foreground mb-6">Key insights about the {info.name} rental market</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Market Conditions</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {info.name}'s rental market is currently experiencing a cooling period after years of rapid growth. 
                      The market is described as "warm" with healthy inventory levels and stabilizing rents.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 15-21% above national average</li>
                      <li>• Strong economic fundamentals</li>
                      <li>• Recent rent stabilization</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Economic Drivers</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {info.name}'s economy is driven by high-tech industries, the University of Colorado, and a highly educated workforce. 
                      These factors continue to support rental demand despite recent market cooling.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 34,500 university students</li>
                      <li>• High-tech job growth</li>
                      <li>• Quality of life premium</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="owners" className="space-y-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                <h3 className="text-lg font-semibold mb-4">For Property Owners</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-lg border bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="text-2xl font-bold text-primary mb-2">96%</div>
                    <div className="text-sm text-muted-foreground">Average Occupancy Rate</div>
                  </div>
                  <div className="text-center p-4 rounded-lg border bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="text-2xl font-bold text-green-600 mb-2">4.2%</div>
                    <div className="text-sm text-muted-foreground">Annual ROI</div>
                  </div>
                  <div className="text-center p-4 rounded-lg border bg-gradient-to-br from-purple-50 to-violet-50">
                    <div className="text-2xl font-bold text-purple-600 mb-2">$150</div>
                    <div className="text-sm text-muted-foreground">Avg Monthly Appreciation</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full">Schedule Owner Consultation</Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="renters" className="space-y-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                <h3 className="text-lg font-semibold mb-4">For Renters</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Rental Tips</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Best time to search: October - December</li>
                      <li>• Average application processing: 2-3 days</li>
                      <li>• Security deposits typically 1-1.5x rent</li>
                      <li>• Pet fees range from $25-$75/month</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Popular Amenities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• In-unit laundry (85% of properties)</li>
                      <li>• Parking included (78% of properties)</li>
                      <li>• Mountain views (45% of properties)</li>
                      <li>• Walk to trails (62% of properties)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full">View Available Rentals</Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="neighborhoods" className="space-y-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Popular Neighborhoods</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-lg border bg-gradient-to-br from-amber-50 to-orange-50">
                    <h4 className="font-semibold mb-2">Pearl Street Area</h4>
                    <div className="text-2xl font-bold text-amber-600 mb-1">$2,850</div>
                    <div className="text-sm text-muted-foreground">Avg 2BR Rent</div>
                  </div>
                  <div className="p-4 rounded-lg border bg-gradient-to-br from-cyan-50 to-blue-50">
                    <h4 className="font-semibold mb-2">Table Mesa</h4>
                    <div className="text-2xl font-bold text-cyan-600 mb-1">$2,400</div>
                    <div className="text-sm text-muted-foreground">Avg 2BR Rent</div>
                  </div>
                  <div className="p-4 rounded-lg border bg-gradient-to-br from-rose-50 to-pink-50">
                    <h4 className="font-semibold mb-2">Gunbarrel</h4>
                    <div className="text-2xl font-bold text-rose-600 mb-1">$2,200</div>
                    <div className="text-sm text-muted-foreground">Avg 2BR Rent</div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};
export default ServiceAreaDetail;
