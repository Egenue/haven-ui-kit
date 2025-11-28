import { Card } from "@/components/ui/card";

const CategoryChart = () => {
  const categories = [
    { name: "Harassment", count: 18, color: "bg-primary", percentage: 38 },
    { name: "Discrimination", count: 12, color: "bg-accent", percentage: 26 },
    { name: "Verbal Abuse", count: 9, color: "bg-orange-400", percentage: 19 },
    { name: "Bullying", count: 8, color: "bg-pink-400", percentage: 17 },
  ];

  return (
    <Card className="glass-card rounded-3xl p-6 h-full">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground">Report Categories</h3>
        <p className="text-sm text-muted-foreground">Breakdown by type</p>
      </div>

      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{category.name}</span>
              <span className="text-sm font-bold text-foreground">{category.count}</span>
            </div>
            <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden">
              <div
                className={`h-full ${category.color} rounded-full transition-all duration-500`}
                style={{ width: `${category.percentage}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">{category.percentage}% of total</p>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border/30">
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground mb-1">47</p>
          <p className="text-xs text-muted-foreground">Total Reports This Month</p>
        </div>
      </div>
    </Card>
  );
};

export default CategoryChart;
