
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, Globe, Users, CheckCircle, Mail } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="container px-4 md:px-6 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About EduLearn</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Our mission is to make quality education accessible to everyone, 
              everywhere, through technology and innovation.
            </p>
            <Button size="lg">Join Our Community</Button>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="container px-4 md:px-6 py-16 bg-secondary/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Core Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
                  <p className="text-muted-foreground">
                    We believe in providing the highest quality educational content 
                    created by industry experts.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                  <p className="text-muted-foreground">
                    Making education accessible to everyone, regardless of their
                    location or background.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-muted-foreground">
                    Building a supportive community where learners can collaborate, 
                    share knowledge, and grow together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Story Section */}
        <div className="container px-4 md:px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  EduLearn was founded in 2025 with a simple yet ambitious goal: to transform 
                  how people learn in the digital age. Our founders, experienced educators and 
                  technologists, recognized the limitations of traditional education systems 
                  and set out to create something better.
                </p>
                <p className="text-muted-foreground mb-4">
                  Starting with just a handful of courses and a small team, we've grown to 
                  serve hundreds of thousands of learners across the globe. Our platform 
                  now offers a diverse range of courses taught by leading experts in their fields.
                </p>
                <p className="text-muted-foreground">
                  As we continue to grow, our commitment to quality education, accessibility, 
                  and community remains at the heart of everything we do.
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-primary-foreground/80">Courses</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold mb-2">200+</div>
                <div className="text-primary-foreground/80">Instructors</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold mb-2">50K+</div>
                <div className="text-primary-foreground/80">Students</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold mb-2">100+</div>
                <div className="text-primary-foreground/80">Countries</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="container px-4 md:px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Meet Our Leadership Team</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Umer Shaikh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Umer Shaikh</h3>
                <p className="text-primary mb-2">Co-Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  Former educator with 15+ years of experience in EdTech
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Kashish Dhawan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Kashish Dhawan</h3>
                <p className="text-primary mb-2">Founder & CTO</p>
                <p className="text-muted-foreground text-sm">
                  Tech innovator with a passion for accessible education
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://randomuser.me/api/portraits/men/67.jpg"
                    alt="Virat Kohli"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Virat Kohli</h3>
                <p className="text-primary mb-2">Chief Content Officer</p>
                <p className="text-muted-foreground text-sm">
                  Curriculum expert with background in online learning
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="bg-secondary/50 py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                What Sets Us Apart
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                    <p className="text-muted-foreground">
                      Our platform offers interactive lessons, quizzes, and coding exercises 
                      that engage students and reinforce learning.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                    <p className="text-muted-foreground">
                      Learn from industry experts and academic professionals with 
                      real-world experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
                    <p className="text-muted-foreground">
                      Study at your own pace, on your own schedule, with lifetime 
                      access to course materials.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                    <p className="text-muted-foreground">
                      Join a vibrant community of learners to collaborate, ask questions, 
                      and share insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact */}
        <div className="container px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our platform or interested in partnerships? 
              We'd love to hear from you.
            </p>
            <Button className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
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
            <p>© 2023 EduLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
