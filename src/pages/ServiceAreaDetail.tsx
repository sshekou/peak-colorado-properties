import { useParams, Link } from "react-router-dom";
import { locations } from "@/data/locations";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingDown, Building2, Home, Calendar, ArrowLeft } from "lucide-react";

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
          {/* Navigation */}
          <div className="flex justify-between items-center mb-6">
            <Link 
              to="/service-areas" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Service Areas Map
            </Link>
            <Select defaultValue={slug} onValueChange={(value) => window.location.href = `/service-areas/${value}`}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Choose service area" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.slug} value={location.slug}>
                    {location.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

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
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Market Overview
              </TabsTrigger>
              <TabsTrigger 
                value="owners"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                For Owners
              </TabsTrigger>
              <TabsTrigger 
                value="renters"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                For Renters
              </TabsTrigger>
              <TabsTrigger 
                value="neighborhoods"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Neighborhoods
              </TabsTrigger>
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
              {/* Key Metrics for Owners */}
              <div className="grid lg:grid-cols-3 gap-6 mb-6">
                <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">6.8%</div>
                    <div className="text-sm text-muted-foreground">Average Annual Return</div>
                    <div className="text-xs text-green-600 mt-1">+0.3% vs last year</div>
                  </div>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">91%</div>
                    <div className="text-sm text-muted-foreground">Occupancy Rate</div>
                    <div className="text-xs text-red-600 mt-1">-1.4% vs last year</div>
                  </div>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">$185</div>
                    <div className="text-sm text-muted-foreground">Price per Sq Ft</div>
                    <div className="text-xs text-green-600 mt-1">+2.1% vs last year</div>
                  </div>
                </Card>
              </div>

              {/* Investment Analysis */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Investment Analysis</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Opportunities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Strong rental demand from CU students and tech workers</li>
                      <li>• Limited new construction maintaining property values</li>
                      <li>• Growing tech sector increasing high-income renters</li>
                      <li>• Outdoor lifestyle attracting long-term residents</li>
                      <li>• Boulder's population growth outpacing housing supply</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">Challenges</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• High property acquisition costs</li>
                      <li>• Strict zoning and development restrictions</li>
                      <li>• Seasonal rental fluctuations due to university calendar</li>
                      <li>• Rising property taxes and insurance costs</li>
                      <li>• Competitive market for quality properties</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Property Performance by Type */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Property Performance by Type</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg border bg-gradient-to-br from-blue-50 to-indigo-50">
                    <h4 className="font-semibold mb-2">Single Family Homes</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-1">$3,200</div>
                    <div className="text-sm text-muted-foreground mb-2">Avg Monthly Rent</div>
                    <div className="text-xs text-green-600">ROI: 5.8%</div>
                  </div>
                  <div className="p-4 rounded-lg border bg-gradient-to-br from-green-50 to-emerald-50">
                    <h4 className="font-semibold mb-2">Condos/Townhomes</h4>
                    <div className="text-2xl font-bold text-green-600 mb-1">$2,650</div>
                    <div className="text-sm text-muted-foreground mb-2">Avg Monthly Rent</div>
                    <div className="text-xs text-green-600">ROI: 6.2%</div>
                  </div>
                  <div className="p-4 rounded-lg border bg-gradient-to-br from-purple-50 to-violet-50">
                    <h4 className="font-semibold mb-2">Apartments</h4>
                    <div className="text-2xl font-bold text-purple-600 mb-1">$2,100</div>
                    <div className="text-sm text-muted-foreground mb-2">Avg Monthly Rent</div>
                    <div className="text-xs text-green-600">ROI: 7.4%</div>
                  </div>
                </div>
              </Card>

              {/* Management Services */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Peak Properties Management Services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Full-Service Management</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Tenant screening and placement (98% approval rate)</li>
                      <li>• Rent collection and financial reporting</li>
                      <li>• 24/7 maintenance coordination</li>
                      <li>• Legal compliance and eviction services</li>
                      <li>• Regular property inspections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Performance Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Average Days to Lease</span>
                        <span className="font-semibold">14 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Tenant retention rate</span>
                        <span className="font-semibold">87%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Owner satisfaction</span>
                        <span className="font-semibold">96%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Management fee</span>
                        <span className="font-semibold">8-10%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button className="flex-1">Schedule Owner Consultation</Button>
                  <Button variant="outline" className="flex-1">Download Investment Guide</Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="renters" className="space-y-6">
              {/* Rental Market Snapshot for Renters */}
              <div className="grid lg:grid-cols-4 gap-4 mb-6">
                <Card className="p-4 bg-white/80 backdrop-blur-sm shadow-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">$2,508</div>
                  <div className="text-xs text-muted-foreground">Median Rent</div>
                </Card>
                <Card className="p-4 bg-white/80 backdrop-blur-sm shadow-lg text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">828</div>
                  <div className="text-xs text-muted-foreground">Available Units</div>
                </Card>
                <Card className="p-4 bg-white/80 backdrop-blur-sm shadow-lg text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">76</div>
                  <div className="text-xs text-muted-foreground">Days on Market</div>
                </Card>
                <Card className="p-4 bg-white/80 backdrop-blur-sm shadow-lg text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">9.3%</div>
                  <div className="text-xs text-muted-foreground">Vacancy Rate</div>
                </Card>
              </div>

              {/* Rental Guide */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Boulder Rental Guide</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700">Best Times to Search</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Peak Season:</strong> June-August (most inventory)</li>
                      <li>• <strong>Best Deals:</strong> October-January (lower competition)</li>
                      <li>• <strong>Student Housing:</strong> February-April for fall semester</li>
                      <li>• <strong>Professional Rentals:</strong> Year-round availability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Application Requirements</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Income: 3x monthly rent minimum</li>
                      <li>• Credit Score: 650+ preferred</li>
                      <li>• Application Fee: $50-$100</li>
                      <li>• Security Deposit: 1-1.5x monthly rent</li>
                      <li>• References: 2 previous landlords recommended</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Rent by Property Type */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Average Rent by Property Type</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg border bg-gradient-to-br from-blue-50 to-cyan-50">
                    <h4 className="font-semibold mb-2">Studio/1BR</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-1">$1,850</div>
                    <div className="text-sm text-muted-foreground mb-2">Monthly Rent</div>
                    <div className="text-xs text-red-600">-6.2% vs last year</div>
                  </div>
                  <div className="p-4 rounded-lg border bg-gradient-to-br from-green-50 to-teal-50">
                    <h4 className="font-semibold mb-2">2 Bedroom</h4>
                    <div className="text-2xl font-bold text-green-600 mb-1">$2,650</div>
                    <div className="text-sm text-muted-foreground mb-2">Monthly Rent</div>
                    <div className="text-xs text-red-600">-7.8% vs last year</div>
                  </div>
                  <div className="p-4 rounded-lg border bg-gradient-to-br from-purple-50 to-indigo-50">
                    <h4 className="font-semibold mb-2">3+ Bedroom</h4>
                    <div className="text-2xl font-bold text-purple-600 mb-1">$3,400</div>
                    <div className="text-sm text-muted-foreground mb-2">Monthly Rent</div>
                    <div className="text-xs text-red-600">-9.1% vs last year</div>
                  </div>
                </div>
              </Card>

              {/* Renter Resources */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Renter Resources</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Popular Amenities</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>In-unit laundry</span>
                        <span className="text-green-600 font-semibold">78%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Parking included</span>
                        <span className="text-green-600 font-semibold">85%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pet-friendly</span>
                        <span className="text-blue-600 font-semibold">65%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mountain views</span>
                        <span className="text-purple-600 font-semibold">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Walk to trails</span>
                        <span className="text-green-600 font-semibold">72%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Transportation & Utilities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>RTD Bus Pass:</strong> $115/month (some employers provide)</li>
                      <li>• <strong>Utilities (avg):</strong> $120-180/month</li>
                      <li>• <strong>Internet:</strong> $50-80/month</li>
                      <li>• <strong>Bike Lanes:</strong> Extensive network throughout city</li>
                      <li>• <strong>Walkability Score:</strong> 65/100 (somewhat walkable)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button className="flex-1">View Available Rentals</Button>
                  <Button variant="outline" className="flex-1">Schedule Tour</Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="neighborhoods" className="space-y-6">
              {/* Neighborhood Overview */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Boulder Neighborhood Guide</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Boulder offers diverse neighborhoods, each with unique character and rental opportunities. 
                  From downtown's urban energy to the quiet residential areas near the foothills.
                </p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Central Boulder */}
                  <div>
                    <h4 className="font-semibold mb-4 text-blue-700">Central & Downtown</h4>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border bg-gradient-to-br from-blue-50 to-indigo-50">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold">Pearl Street District</h5>
                          <span className="text-sm font-bold text-blue-600">$3,200</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">Heart of downtown, walkable to restaurants & shopping</p>
                        <div className="flex gap-2 text-xs">
                          <span className="bg-blue-100 px-2 py-1 rounded">Urban</span>
                          <span className="bg-green-100 px-2 py-1 rounded">Walkable</span>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg border bg-gradient-to-br from-cyan-50 to-blue-50">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold">The Hill</h5>
                          <span className="text-sm font-bold text-cyan-600">$2,100</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">Student area near CU campus, vibrant nightlife</p>
                        <div className="flex gap-2 text-xs">
                          <span className="bg-cyan-100 px-2 py-1 rounded">Student</span>
                          <span className="bg-orange-100 px-2 py-1 rounded">Nightlife</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* East Boulder */}
                  <div>
                    <h4 className="font-semibold mb-4 text-green-700">East Boulder</h4>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border bg-gradient-to-br from-green-50 to-emerald-50">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold">Table Mesa</h5>
                          <span className="text-sm font-bold text-green-600">$2,650</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">Family-friendly, good schools, shopping centers</p>
                        <div className="flex gap-2 text-xs">
                          <span className="bg-green-100 px-2 py-1 rounded">Family</span>
                          <span className="bg-blue-100 px-2 py-1 rounded">Schools</span>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg border bg-gradient-to-br from-teal-50 to-green-50">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold">Gunbarrel</h5>
                          <span className="text-sm font-bold text-teal-600">$2,400</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">Tech corridor, newer developments, easy highway access</p>
                        <div className="flex gap-2 text-xs">
                          <span className="bg-teal-100 px-2 py-1 rounded">Tech</span>
                          <span className="bg-purple-100 px-2 py-1 rounded">Modern</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* South & West Boulder */}
              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                  <h4 className="font-semibold mb-4 text-purple-700">South Boulder</h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border bg-gradient-to-br from-purple-50 to-violet-50">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold">South Boulder</h5>
                        <span className="text-sm font-bold text-purple-600">$2,850</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">Upscale area, mountain access, quiet residential</p>
                      <div className="flex gap-2 text-xs">
                        <span className="bg-purple-100 px-2 py-1 rounded">Upscale</span>
                        <span className="bg-green-100 px-2 py-1 rounded">Quiet</span>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg border bg-gradient-to-br from-rose-50 to-pink-50">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold">Martin Acres</h5>
                        <span className="text-sm font-bold text-rose-600">$2,750</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">Established neighborhood, mid-century homes</p>
                      <div className="flex gap-2 text-xs">
                        <span className="bg-rose-100 px-2 py-1 rounded">Established</span>
                        <span className="bg-amber-100 px-2 py-1 rounded">Character</span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                  <h4 className="font-semibold mb-4 text-orange-700">North & West</h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border bg-gradient-to-br from-orange-50 to-amber-50">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold">Newlands</h5>
                        <span className="text-sm font-bold text-orange-600">$3,100</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">Historic charm, foothills access, premium location</p>
                      <div className="flex gap-2 text-xs">
                        <span className="bg-orange-100 px-2 py-1 rounded">Historic</span>
                        <span className="bg-green-100 px-2 py-1 rounded">Premium</span>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg border bg-gradient-to-br from-amber-50 to-yellow-50">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold">North Boulder</h5>
                        <span className="text-sm font-bold text-amber-600">$2,500</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">Diverse community, affordable options, growing area</p>
                      <div className="flex gap-2 text-xs">
                        <span className="bg-amber-100 px-2 py-1 rounded">Diverse</span>
                        <span className="bg-green-100 px-2 py-1 rounded">Affordable</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Neighborhood Comparison */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Neighborhood Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Neighborhood</th>
                        <th className="text-center py-2">Avg Rent</th>
                        <th className="text-center py-2">Walk Score</th>
                        <th className="text-center py-2">Transit</th>
                        <th className="text-center py-2">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr className="border-b">
                        <td className="py-2 font-semibold">Pearl Street</td>
                        <td className="text-center">$3,200</td>
                        <td className="text-center">95</td>
                        <td className="text-center">★★★★★</td>
                        <td className="text-center">Urban lifestyle</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">Table Mesa</td>
                        <td className="text-center">$2,650</td>
                        <td className="text-center">70</td>
                        <td className="text-center">★★★☆☆</td>
                        <td className="text-center">Families</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">Gunbarrel</td>
                        <td className="text-center">$2,400</td>
                        <td className="text-center">45</td>
                        <td className="text-center">★★☆☆☆</td>
                        <td className="text-center">Tech workers</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">The Hill</td>
                        <td className="text-center">$2,100</td>
                        <td className="text-center">85</td>
                        <td className="text-center">★★★★☆</td>
                        <td className="text-center">Students</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">South Boulder</td>
                        <td className="text-center">$2,850</td>
                        <td className="text-center">55</td>
                        <td className="text-center">★★☆☆☆</td>
                        <td className="text-center">Luxury living</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button className="flex-1">Explore Listings by Neighborhood</Button>
                  <Button variant="outline" className="flex-1">Download Neighborhood Guide</Button>
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
