import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ReportsTable = () => {
  const reports = [
    { id: "#R047", type: "Harassment", status: "Active", date: "2025-11-28", priority: "High" },
    { id: "#R046", type: "Discrimination", status: "Active", date: "2025-11-27", priority: "Medium" },
    { id: "#R045", type: "Verbal Abuse", status: "Resolved", date: "2025-11-26", priority: "Low" },
    { id: "#R044", type: "Harassment", status: "Resolved", date: "2025-11-25", priority: "High" },
    { id: "#R043", type: "Bullying", status: "Active", date: "2025-11-24", priority: "Medium" },
  ];

  const getStatusColor = (status: string) => {
    return status === "Active" 
      ? "bg-orange-100 text-orange-700 hover:bg-orange-100" 
      : "bg-green-100 text-green-700 hover:bg-green-100";
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-700 hover:bg-red-100";
      case "Medium": return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
      default: return "bg-blue-100 text-blue-700 hover:bg-blue-100";
    }
  };

  return (
    <Card className="glass-card rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-foreground">Recent Reports</h3>
          <p className="text-sm text-muted-foreground">Latest anonymous submissions</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-xl glass-card border-white/40 hover:bg-white/60"
        >
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30">
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase">
                ID
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase">
                Type
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase">
                Status
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase">
                Date
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground uppercase">
                Priority
              </th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b border-border/20 hover:bg-white/30 transition-colors">
                <td className="py-4 px-2 text-sm font-medium text-foreground">{report.id}</td>
                <td className="py-4 px-2 text-sm text-foreground">{report.type}</td>
                <td className="py-4 px-2">
                  <Badge className={`rounded-xl ${getStatusColor(report.status)}`}>
                    {report.status}
                  </Badge>
                </td>
                <td className="py-4 px-2 text-sm text-muted-foreground">{report.date}</td>
                <td className="py-4 px-2">
                  <Badge className={`rounded-xl ${getPriorityColor(report.priority)}`}>
                    {report.priority}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ReportsTable;
