import { Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/dashboard/StatCard";
import ReportsTable from "@/components/dashboard/ReportsTable";
import CategoryChart from "@/components/dashboard/CategoryChart";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Reports",
      value: "47",
      icon: Shield,
      gradient: "from-primary to-accent",
      trend: "+12 this week",
    },
    {
      title: "Active Cases",
      value: "8",
      icon: AlertTriangle,
      gradient: "from-orange-400 to-red-400",
      trend: "Requires attention",
    },
    {
      title: "Resolved",
      value: "35",
      icon: CheckCircle,
      gradient: "from-green-400 to-teal-400",
      trend: "74% resolution rate",
    },
    {
      title: "Avg Response",
      value: "4.2h",
      icon: Clock,
      gradient: "from-purple-400 to-pink-400",
      trend: "Within SLA",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 glass-card border-b border-white/40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-xl">
              🌸
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Haven</h1>
              <p className="text-xs text-muted-foreground">Admin Dashboard</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            className="rounded-xl glass-card border-white/40 hover:bg-white/60"
          >
            Logout
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="glass-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Welcome back, Admin 👋
          </h2>
          <p className="text-muted-foreground">
            Here's what's happening with workplace safety today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Reports & Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Reports Table - 2/3 width */}
          <div className="lg:col-span-2">
            <ReportsTable />
          </div>

          {/* Category Chart - 1/3 width */}
          <div className="lg:col-span-1">
            <CategoryChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
