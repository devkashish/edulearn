
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Video, Award, ArrowRight, ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";

const featuredCourses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    instructor: "Jane Smith",
    level: "Beginner",
    duration: "8 weeks",
    students: 12540,
    rating: 4.8,
    image: "https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770",
    category: "Web Development"
  },
  {
    id: "2",
    title: "Advanced JavaScript Patterns",
    instructor: "John Doe",
    level: "Advanced",
    duration: "6 weeks",
    students: 8720,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    category: "JavaScript"
  },
  {
    id: "3",
    title: "Data Science Fundamentals",
    instructor: "Emily Johnson",
    level: "Intermediate",
    duration: "10 weeks",
    students: 15320,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Data Science"
  }
];

const features = [
  {
    icon: <Video className="w-10 h-10 text-primary" />,
    title: "Interactive Video Lessons",
    description: "Learn with high-quality videos and interactive elements"
  },
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: "Comprehensive Courses",
    description: "Access a wide range of courses across various disciplines"
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Community Learning",
    description: "Join discussion forums and collaborative learning spaces"
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Certifications",
    description: "Earn recognized certificates upon course completion"
  }
];

const Index = () => {
  const navigate = useNavigate();
  
  const handleStartLearning = () => {
    navigate("/courses");
  };
  
  const handleBrowseCourses = () => {
    navigate("/courses");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 animate-fade-in">
                Start Your Learning Journey Today
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight animate-fade-in">
                Unlock Your Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Interactive Learning</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: "100ms" }}>
                Discover a new way to learn with our interactive platform. 
                Access expert-led courses, engaging assessments, and a vibrant community.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Button size="lg" className="gap-2 group relative overflow-hidden transition-all duration-300" onClick={handleStartLearning}>
                  <span className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center gap-2">
                    Start Learning
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="group" onClick={handleBrowseCourses}>
                  Browse Courses
                  <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative w-full aspect-video overflow-hidden rounded-xl animate-scale-in shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Students learning"
                  className="object-cover w-full h-full transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
                  <p className="text-sm font-medium">Join over 35,000+ students already learning on our platform</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 md:mt-32 flex justify-center">
            <a href="#featured-courses" className="text-muted-foreground hover:text-foreground transition-colors flex flex-col items-center gap-2">
              <span>Scroll to explore</span>
              <ArrowDown className="animate-bounce" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Enhanced Featured Courses */}
      <section id="featured-courses" className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                Featured Courses
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Learn from the Best
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Hand-picked courses selected for their quality content and outstanding student reviews
              </p>
            </div>
            <Button variant="outline" className="gap-2 group relative overflow-hidden transition-all duration-300" onClick={handleBrowseCourses}>
              <span className="absolute inset-0 bg-gradient-to-tr from-background to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                View All Courses
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="transform transition-all duration-300 hover:-translate-y-2">
                <CourseCard {...course} />
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Ready to enhance your skillset?</h3>
                <p className="text-muted-foreground mb-4">Join thousands of students who are already learning with us</p>
              </div>
              <Button size="lg" className="gap-2" onClick={handleStartLearning}>
                Start Learning Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Why Choose EduLearn
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Features that set us apart
            </h2>
            <p className="text-muted-foreground">
              Our platform offers a comprehensive learning experience with features 
              designed to help you succeed
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 card-glass rounded-xl transition-all duration-300 hover:shadow-md hover:border-primary/30"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="mt-2 mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-primary-foreground/90 md:text-lg">
                Sign up today and get access to hundreds of courses, interactive lessons, 
                and a supportive community of learners.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-primary" 
                onClick={() => {
                  navigate("/auth");
                  setTimeout(() => document.querySelector('[value="signup"]')?.dispatchEvent(new MouseEvent('click')), 100);
                }}
              >
                Sign Up for Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
                onClick={handleBrowseCourses}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">EduLearn</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Community</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Sales</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Report Abuse</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t text-center text-muted-foreground">
            <p>© 2025 EduLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
