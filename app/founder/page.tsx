"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import {
  BarChart3,
  Shield,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Globe,
  Sparkles,
  FileText,
  DollarSign,
  MessageSquare,
  Settings,
} from "lucide-react"

export default function FounderDashboardPage() {
  const { t } = useLanguage()
  const [petitionName, setPetitionName] = useState("")
  const [petitionPurpose, setPetitionPurpose] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [loading, setLoading] = useState(false)

  // Mock platform metrics
  const metrics = {
    totalTransactions: 1247,
    totalVolume: 45823,
    activeCountries: 12,
    averageDisputeTime: 18,
    escrowReleaseRate: 96.5,
    activeSellers: 342,
    verifiedSellers: 289,
    pendingVerifications: 23,
    activeDisputes: 8,
  }

  const handlePetitionAI = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/petition-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: petitionName, purpose: petitionPurpose }),
      })
      const data = await response.json()
      setAiResponse(data.petition)
    } catch (error) {
      console.error("Petition AI error:", error)
    }
    setLoading(false)
  }

  const handleComplianceCheck = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/compliance-bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          repoName: "Elmahrosa-Map-of-PI",
          files: ["README.md", "SECURITY.md", "CONTRIBUTING.md", ".github/workflows/ci.yml"],
        }),
      })
      const data = await response.json()
      setAiResponse(JSON.stringify(data, null, 2))
    } catch (error) {
      console.error("Compliance check error:", error)
    }
    setLoading(false)
  }

  const handleTreasuryAudit = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/treasury-auditor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feesCollected: 1234.56,
          escrows: 342,
          disputesResolved: 28,
        }),
      })
      const data = await response.json()
      setAiResponse(JSON.stringify(data, null, 2))
    } catch (error) {
      console.error("Treasury audit error:", error)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Founder Dashboard</h1>
              <p className="text-muted-foreground">Platform governance, metrics, and AI tools</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{metrics.totalVolume.toLocaleString()} π</div>
              <p className="text-xs text-muted-foreground mt-1">{metrics.totalTransactions} transactions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Sellers</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{metrics.activeSellers}</div>
              <p className="text-xs text-muted-foreground mt-1">{metrics.verifiedSellers} verified</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Escrow Release Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{metrics.escrowReleaseRate}%</div>
              <p className="text-xs text-muted-foreground mt-1">Avg {metrics.averageDisputeTime}h dispute time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Countries</CardTitle>
              <Globe className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{metrics.activeCountries}</div>
              <p className="text-xs text-muted-foreground mt-1">Egypt, MENA, Africa</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden md:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="ai-tools" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="hidden md:inline">AI Tools</span>
            </TabsTrigger>
            <TabsTrigger value="governance" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden md:inline">Governance</span>
            </TabsTrigger>
            <TabsTrigger value="management" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden md:inline">Management</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest platform events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { type: "seller", name: "Ahmed M.", action: "verified", time: "2 hours ago" },
                      { type: "escrow", name: "Escrow #1247", action: "released", time: "4 hours ago" },
                      { type: "dispute", name: "Dispute #89", action: "resolved", time: "6 hours ago" },
                      { type: "seller", name: "Fatima K.", action: "registered", time: "8 hours ago" },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            {activity.type === "seller" && <Users className="h-4 w-4 text-primary" />}
                            {activity.type === "escrow" && <DollarSign className="h-4 w-4 text-green-600" />}
                            {activity.type === "dispute" && <AlertTriangle className="h-4 w-4 text-orange-600" />}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{activity.name}</p>
                            <p className="text-xs text-muted-foreground">{activity.action}</p>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pending Actions</CardTitle>
                  <CardDescription>Requires founder attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-orange-500/20 bg-orange-500/5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="border-orange-500 text-orange-600">
                          Verification
                        </Badge>
                        <span className="text-sm font-medium">{metrics.pendingVerifications}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Seller verifications pending</p>
                      <Button size="sm" variant="outline" className="w-full bg-transparent">
                        Review Sellers
                      </Button>
                    </div>

                    <div className="p-4 border border-red-500/20 bg-red-500/5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="border-red-500 text-red-600">
                          Dispute
                        </Badge>
                        <span className="text-sm font-medium">{metrics.activeDisputes}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Active disputes to resolve</p>
                      <Button size="sm" variant="outline" className="w-full bg-transparent">
                        Review Disputes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai-tools" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Petition AI
                  </CardTitle>
                  <CardDescription>Generate civic-first onboarding petitions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Seller Name</label>
                    <Input
                      placeholder="Enter seller name"
                      value={petitionName}
                      onChange={(e) => setPetitionName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Purpose</label>
                    <Textarea
                      placeholder="Describe the purpose of this petition"
                      value={petitionPurpose}
                      onChange={(e) => setPetitionPurpose(e.target.value)}
                      rows={3}
                    />
                  </div>
                  <Button onClick={handlePetitionAI} disabled={loading} className="w-full">
                    {loading ? "Generating..." : "Generate Petition"}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Compliance Bot
                  </CardTitle>
                  <CardDescription>Check repository compliance status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Automatically checks for required files: README, SECURITY, CONTRIBUTING, CI/CD workflows
                  </p>
                  <Button
                    onClick={handleComplianceCheck}
                    disabled={loading}
                    className="w-full bg-transparent"
                    variant="outline"
                  >
                    {loading ? "Checking..." : "Run Compliance Check"}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Treasury Auditor
                  </CardTitle>
                  <CardDescription>Generate transparent treasury reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Fees Collected</p>
                      <p className="font-medium">1,234.56 π</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Active Escrows</p>
                      <p className="font-medium">342</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Disputes Resolved</p>
                      <p className="font-medium">28</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Release Rate</p>
                      <p className="font-medium">96.5%</p>
                    </div>
                  </div>
                  <Button
                    onClick={handleTreasuryAudit}
                    disabled={loading}
                    className="w-full bg-transparent"
                    variant="outline"
                  >
                    {loading ? "Auditing..." : "Generate Audit Report"}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                    Mythic Storyteller
                  </CardTitle>
                  <CardDescription>Document platform evolution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Creates narrative logs for major changes, deployments, and milestones in the resurrection chapter.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Chapter Log
                  </Button>
                </CardContent>
              </Card>
            </div>

            {aiResponse && (
              <Card>
                <CardHeader>
                  <CardTitle>AI Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="p-4 bg-muted rounded-lg text-sm overflow-x-auto whitespace-pre-wrap">
                    {aiResponse}
                  </pre>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="governance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trust Score Distribution</CardTitle>
                  <CardDescription>Seller trust score breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { range: "90-100", count: 89, color: "bg-green-600" },
                      { range: "70-89", count: 142, color: "bg-blue-600" },
                      { range: "50-69", count: 78, color: "bg-yellow-600" },
                      { range: "0-49", count: 33, color: "bg-red-600" },
                    ].map((tier) => (
                      <div key={tier.range}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Score {tier.range}</span>
                          <span className="text-sm text-muted-foreground">{tier.count} sellers</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={`${tier.color} h-2 rounded-full`}
                            style={{ width: `${(tier.count / metrics.activeSellers) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Escrow Performance</CardTitle>
                  <CardDescription>Transaction safety metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <span className="text-sm">Successful Releases</span>
                      <span className="text-sm font-bold text-green-600">96.5%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <span className="text-sm">Dispute Rate</span>
                      <span className="text-sm font-bold text-orange-600">2.8%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <span className="text-sm">Refund Rate</span>
                      <span className="text-sm font-bold text-blue-600">0.7%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <span className="text-sm">Avg Resolution Time</span>
                      <span className="text-sm font-bold text-primary">{metrics.averageDisputeTime}h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Regional Coverage</CardTitle>
                  <CardDescription>Active sellers by region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { region: "Egypt", sellers: 234, percent: 68 },
                      { region: "MENA", sellers: 78, percent: 23 },
                      { region: "Africa", sellers: 30, percent: 9 },
                    ].map((region) => (
                      <div key={region.region} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="h-4 w-4 text-primary" />
                          <span className="font-medium">{region.region}</span>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">{region.sellers}</div>
                        <div className="text-sm text-muted-foreground">{region.percent}% of total</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="management" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>Platform status and uptime</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { service: "API Server", status: "operational", uptime: "99.9%" },
                      { service: "Database", status: "operational", uptime: "99.8%" },
                      { service: "Escrow Service", status: "operational", uptime: "99.7%" },
                      { service: "Pi SDK Auth", status: "operational", uptime: "99.9%" },
                    ].map((service) => (
                      <div
                        key={service.service}
                        className="flex items-center justify-between p-3 border border-border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-600" />
                          <span className="text-sm font-medium">{service.service}</span>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="border-green-600 text-green-600">
                            {service.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{service.uptime}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Users className="h-4 w-4 mr-2" />
                    Verify Pending Sellers ({metrics.pendingVerifications})
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Review Active Disputes ({metrics.activeDisputes})
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Weekly Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Shield className="h-4 w-4 mr-2" />
                    Update Security Policies
                  </Button>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Deployment Information</CardTitle>
                  <CardDescription>Current deployment status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Production URL</p>
                      <p className="text-sm font-mono break-all">emapofpi.teosegypt.com</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Pi Network URL</p>
                      <p className="text-sm font-mono break-all">emapofpi6390.pinet.com</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Vercel URL</p>
                      <p className="text-sm font-mono break-all">elmahrosa-map-of-pi.vercel.app</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
