import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  gradient: string;
  trend: string;
}

const StatCard = ({ title, value, icon: Icon, gradient, trend }: StatCardProps) => {
  return (
    <Card className="glass-card rounded-3xl p-6 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
      <p className="text-3xl font-bold text-foreground mb-2">{value}</p>
      <p className="text-xs text-muted-foreground">{trend}</p>
    </Card>
  );
};

export default StatCard;
