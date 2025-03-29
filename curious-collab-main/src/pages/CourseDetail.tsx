
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Clock, BarChart2, ArrowLeft, Star } from "lucide-react";
import PurchaseCourseButton from "@/components/PurchaseCourseButton";

// Sample course data - in a real app this would come from an API
const courses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    instructor: "Jane Smith",
    level: "Beginner",
    duration: "8 weeks",
    students: 12540,
    rating: 4.8,
    image: "https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770",
    category: "Web Development",
    price: 59.99,
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. This course is perfect for absolute beginners who want to start their journey in web development.",
    objectives: [
      "Understand the structure of the web and how websites work",
      "Write clean, semantic HTML5 code",
      "Style web pages using CSS3 and responsive design principles",
      "Add interactivity to websites with JavaScript",
      "Build and deploy your first website project"
    ],
    curriculum: [
      {
        title: "Week 1: Introduction to HTML",
        lessons: ["HTML Document Structure", "Elements and Attributes", "Lists and Tables", "Forms and Input Elements"]
      },
      {
        title: "Week 2: CSS Basics",
        lessons: ["Selectors and Properties", "Box Model", "Typography", "Colors and Backgrounds"]
      },
      {
        title: "Week 3: CSS Layout",
        lessons: ["Flexbox", "Grid Layout", "Responsive Design", "Media Queries"]
      },
      {
        title: "Week 4: JavaScript Fundamentals",
        lessons: ["Variables and Data Types", "Functions", "Control Flow", "Arrays and Objects"]
      }
    ]
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
    category: "JavaScript",
    price: 79.99,
    description: "Take your JavaScript skills to the next level with advanced patterns, performance optimizations, and modern features. Ideal for developers who already have a solid foundation in JavaScript.",
    objectives: [
      "Master advanced JavaScript design patterns",
      "Write cleaner, more maintainable code",
      "Optimize JavaScript applications for performance",
      "Leverage modern ES6+ features effectively",
      "Build complex applications with robust architecture"
    ],
    curriculum: [
      {
        title: "Week 1: Modern JavaScript",
        lessons: ["ES6+ Features", "Destructuring", "Arrow Functions", "Template Literals"]
      },
      {
        title: "Week 2: Design Patterns",
        lessons: ["Module Pattern", "Factory Pattern", "Observer Pattern", "Singleton Pattern"]
      },
      {
        title: "Week 3: Asynchronous JavaScript",
        lessons: ["Promises", "Async/Await", "Generators", "Error Handling"]
      },
      {
        title: "Week 4: Performance Optimization",
        lessons: ["Memory Management", "Memoization", "Debouncing and Throttling", "Web Workers"]
      }
    ]
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
    category: "Data Science",
    price: 89.99,
    description: "Dive into the world of data science using Python and essential libraries. This comprehensive course covers statistics, data analysis, visualization, and an introduction to machine learning.",
    objectives: [
      "Understand core statistical concepts for data analysis",
      "Clean and manipulate data using Pandas",
      "Create insightful visualizations with Matplotlib and Seaborn",
      "Apply basic machine learning algorithms to real-world datasets",
      "Complete a data science portfolio project"
    ],
    curriculum: [
      {
        title: "Week 1: Python for Data Science",
        lessons: ["NumPy Basics", "Pandas Fundamentals", "Data Structures", "Data Cleaning"]
      },
      {
        title: "Week 2: Exploratory Data Analysis",
        lessons: ["Statistical Summary", "Data Visualization", "Correlation Analysis", "Feature Engineering"]
      },
      {
        title: "Week 3: Machine Learning Basics",
        lessons: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Cross-Validation"]
      },
      {
        title: "Week 4: Applied Machine Learning",
        lessons: ["Classification Algorithms", "Regression Algorithms", "Clustering", "Model Deployment"]
      }
    ]
  }
];

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isOwned, setIsOwned] = useState(false);
  
  useEffect(() => {
    // Simulate API call to fetch course details
    const fetchCourse = () => {
      setLoading(true);
      setTimeout(() => {
        const foundCourse = courses.find(c => c.id === courseId);
        setCourse(foundCourse);
        
        // Check if user owns this course
        const purchasedCourses = JSON.parse(localStorage.getItem("purchasedCourses") || "[]");
        if (purchasedCourses.includes(courseId)) {
          setIsOwned(true);
        }
        
        setLoading(false);
      }, 500);
    };
    
    fetchCourse();
  }, [courseId]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-24">
          <div className="animate-pulse text-2xl">Loading course details...</div>
        </div>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <p className="mb-6 text-muted-foreground">The course you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/courses")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 container px-4 md:px-6">
        <Button 
          variant="outline" 
          className="mb-6" 
          onClick={() => navigate("/courses")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Button>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
              <p className="text-muted-foreground mb-4">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-primary" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-2 text-yellow-500" />
                  <span>{course.rating} rating</span>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">What you'll learn</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {course.objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Tabs defaultValue="curriculum">
              <TabsList>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="curriculum" className="space-y-4 pt-4">
                <h3 className="text-xl font-semibold mb-4">Course Content</h3>
                {course.curriculum.map((section: any, index: number) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.lessons.map((lesson: string, lessonIndex: number) => (
                          <li key={lessonIndex} className="flex items-center">
                            <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="instructor" className="pt-4">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-lg font-semibold">{course.instructor.split(" ").map((n: string) => n[0]).join("")}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{course.instructor}</h3>
                    <p className="text-muted-foreground mt-1">Expert {course.category} Instructor</p>
                    <p className="mt-4">
                      With over 10 years of professional experience, {course.instructor.split(" ")[0]} has 
                      helped thousands of students master {course.category} through clear and engaging teaching methods.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="pt-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">Student Reviews</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < Math.floor(course.rating) ? "text-yellow-500" : "text-gray-300"}`} />
                        ))}
                      </div>
                      <span className="ml-2 font-medium">{course.rating} out of 5</span>
                    </div>
                  </div>
                  <BarChart2 className="h-12 w-12 text-primary/60" />
                </div>
                <p className="text-muted-foreground text-center py-8">
                  Reviews will appear here as students complete the course.
                </p>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <div className="sticky top-28 space-y-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full aspect-video object-cover"
                />
              </div>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-bold">${course.price}</span>
                    {isOwned && (
                      <span className="text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-1 rounded-full">
                        Purchased
                      </span>
                    )}
                  </div>
                  
                  {isOwned ? (
                    <Button className="w-full">
                      Continue Learning
                    </Button>
                  ) : (
                    <PurchaseCourseButton 
                      courseId={course.id} 
                      courseTitle={course.title} 
                      price={course.price} 
                    />
                  )}
                  
                  <div className="text-sm text-muted-foreground">
                    <p>This course includes:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Full lifetime access</li>
                      <li>• Access on mobile and desktop</li>
                      <li>• Certificate of completion</li>
                      <li>• 30-day money-back guarantee</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
