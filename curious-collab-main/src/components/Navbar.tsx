
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Search, LogOut, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    
    if (loggedIn) {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        setUserName(user.name || user.email?.split("@")[0] || "User");
      } catch (e) {
        setUserName("User");
      }
    }
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    
    navigate("/");
  };
  
  return (
    <nav className="w-full py-4 border-b border-border backdrop-blur-md bg-background/80 fixed top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EduLearn</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/courses" className="font-medium hover:text-primary transition-colors">Courses</Link>
            <Link to="/forum" className="font-medium hover:text-primary transition-colors">Forum</Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">About</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>{userName}</span>
                </div>
                <Button variant="ghost" onClick={handleLogout}>
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button variant="ghost" onClick={() => navigate("/auth")}>Login</Button>
                <Button onClick={() => {
                  navigate("/auth");
                  setTimeout(() => document.querySelector('[value="signup"]')?.dispatchEvent(new MouseEvent('click')), 100);
                }}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-background border-b border-border animate-fade-in z-40">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="py-2 font-medium hover:text-primary" onClick={toggleMenu}>Home</Link>
            <Link to="/courses" className="py-2 font-medium hover:text-primary" onClick={toggleMenu}>Courses</Link>
            <Link to="/forum" className="py-2 font-medium hover:text-primary" onClick={toggleMenu}>Forum</Link>
            <Link to="/about" className="py-2 font-medium hover:text-primary" onClick={toggleMenu}>About</Link>
            <div className="pt-2 space-y-2">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center py-2">
                    <User className="h-5 w-5 text-primary mr-2" />
                    <span>{userName}</span>
                  </div>
                  <Button className="w-full" onClick={handleLogout}>
                    <LogOut className="h-5 w-5 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full" onClick={() => {
                    navigate("/auth");
                    toggleMenu();
                  }}>
                    Login
                  </Button>
                  <Button className="w-full" onClick={() => {
                    navigate("/auth");
                    toggleMenu();
                    setTimeout(() => document.querySelector('[value="signup"]')?.dispatchEvent(new MouseEvent('click')), 100);
                  }}>
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
