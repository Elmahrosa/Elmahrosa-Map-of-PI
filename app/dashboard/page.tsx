import { Shield, TrendingUp, Package, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function DashboardPage() {
  // Mock data - replace with real data from backend
  const stats = {
    totalSales: 1247,
    completedTrades: 892,
    trustScore: 87,
    activeEscrows: 5,
  }

  const activeEscrows = [
    { id: "escrow-001", buyer: "Ahmed M.", amount: 125, status: "funded" },
    { id: "escrow-002", buyer: "Fatima K.", amount: 89, status: "delivered" },
    { id: "escrow-003", buyer: "Ibrahim S.", amount: 234, status: "funded" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Seller Dashboard</h1>
          <p className="text-muted-foreground">Manage your listings and track your performance</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalSales} π</div>
              <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Completed Trades</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completedTrades}</div>
              <p className="text-xs text-muted-foreground mt-1">Lifetime trades</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Trust Score</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.trustScore}/100</div>
              <p className="text-xs text-muted-foreground mt-1">Trusted seller status</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Escrows</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeEscrows}</div>
              <p className="text-xs text-muted-foreground mt-1">Pending completion</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Escrows */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Active Escrows</CardTitle>
            <CardDescription>Track your ongoing transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeEscrows.map((escrow) => (
                <div key={escrow.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{escrow.id}</p>
                    <p className="text-sm text-muted-foreground">Buyer: {escrow.buyer}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{escrow.amount} π</p>
                      <Badge variant={escrow.status === "delivered" ? "default" : "secondary"}>{escrow.status}</Badge>
                    </div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
