
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Github, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify({
        email: formData.email,
        name: formData.email.split("@")[0]
      }));
      
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      
      navigate("/courses");
    }, 1000);
  };
  
  return (
    <Card className="w-full max-w-md card-glass">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
        <CardDescription>
          Sign in to your account to continue learning
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="name@example.com" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2">Or continue with</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full" onClick={() => toast({ title: "Email login", description: "Feature coming soon!" })}>
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button variant="outline" className="w-full" onClick={() => toast({ title: "GitHub login", description: "Feature coming soon!" })}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a 
            onClick={() => document.querySelector('[value="signup"]')?.dispatchEvent(new MouseEvent('click'))} 
            className="text-primary hover:underline cursor-pointer"
          >
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
