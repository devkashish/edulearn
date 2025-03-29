import { useState } from "react";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, SlidersHorizontal, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
  },
  {
    id: "4",
    title: "Mobile App Development with React Native",
    instructor: "Michael Brown",
    level: "Intermediate",
    duration: "8 weeks",
    students: 7890,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
    category: "Mobile Development"
  },
  {
    id: "5",
    title: "Python for Machine Learning",
    instructor: "Sarah Wilson",
    level: "Advanced",
    duration: "12 weeks",
    students: 18950,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    category: "Machine Learning"
  },
  {
    id: "6",
    title: "UI/UX Design Principles",
    instructor: "David Lee",
    level: "Beginner",
    duration: "5 weeks",
    students: 6780,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    category: "Design"
  }
];

const categories = [
  "All Categories",
  "Web Development",
  "JavaScript",
  "Data Science",
  "Mobile Development",
  "Machine Learning",
  "Design"
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    instructor: "",
    level: "Beginner",
    duration: "",
    category: "",
    image: ""
  });
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.instructor.toLowerCase().includes(query.toLowerCase()) ||
        course.description?.toLowerCase().includes(query.toLowerCase());
      
      const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    setFilteredCourses(filtered);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = category === "All Categories" || course.category === category;
      
      return matchesSearch && matchesCategory;
    });
    setFilteredCourses(filtered);
  };

  const handleCreateCourse = () => {
    const newId = (courses.length + 1).toString();
    const courseToAdd = {
      id: newId,
      ...newCourse,
      students: 0,
      rating: 0,
      image: newCourse.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    };
    
    courses.push(courseToAdd);
    setFilteredCourses([...courses]);
    setIsCreateDialogOpen(false);
    setNewCourse({
      title: "",
      description: "",
      instructor: "",
      level: "Beginner",
      duration: "",
      category: "",
      image: ""
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 container px-4 md:px-6">
        <div className="mb-10 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-4">Explore Courses</h1>
            <p className="text-muted-foreground">
              Discover our wide range of courses designed to help you learn new skills
            </p>
          </div>
          <Button onClick={() => setIsCreateDialogOpen(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            Create Course
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1 relative">
            <Input
              placeholder="Search courses..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Select
              value={selectedCategory}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button variant="outline">Load More Courses</Button>
        </div>
      </div>

      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create New Course</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Course Title</Label>
              <Input
                id="title"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                placeholder="Enter course title"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newCourse.description}
                onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                placeholder="Enter course description"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="instructor">Instructor</Label>
              <Input
                id="instructor"
                value={newCourse.instructor}
                onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
                placeholder="Enter instructor name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="level">Level</Label>
                <Select
                  value={newCourse.level}
                  onValueChange={(value) => setNewCourse({ ...newCourse, level: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={newCourse.duration}
                  onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                  placeholder="e.g., 8 weeks"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={newCourse.category}
                onValueChange={(value) => setNewCourse({ ...newCourse, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.filter(cat => cat !== "All Categories").map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Image URL (optional)</Label>
              <Input
                id="image"
                value={newCourse.image}
                onChange={(e) => setNewCourse({ ...newCourse, image: e.target.value })}
                placeholder="Enter image URL"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateCourse}>Create Course</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Courses;
