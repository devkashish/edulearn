
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";
import { BookOpen } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/courses");
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">EduLearn</span>
        </Link>
        <ThemeToggle />
      </header>
      
      <div className="flex-1 grid md:grid-cols-2">
        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80"></div>
          <img
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8"
            alt="Students learning"
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Transform Your Learning Experience
            </h1>
            <p className="text-lg md:text-xl text-center max-w-md">
              Join thousands of students and educators on our interactive learning platform.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 w-full mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginForm />
              </TabsContent>
              <TabsContent value="signup">
                <SignUpForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
