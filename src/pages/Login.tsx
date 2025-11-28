import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "haven2025") {
      toast({
        title: "Welcome to Haven",
        description: "You're now in a safe space.",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Incorrect password",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="glass-card w-full max-w-md p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary mb-4 text-4xl">
            🌸
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Haven</h1>
          <p className="text-muted-foreground">A safe space for everyone</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Admin Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 rounded-2xl glass-card border-white/40"
            />
            <p className="text-xs text-muted-foreground">Hint: haven2025</p>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 rounded-2xl gradient-primary text-white font-medium shadow-md hover:shadow-lg transition-all"
          >
            Enter Dashboard
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            Built with care for workplace safety 💜
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
