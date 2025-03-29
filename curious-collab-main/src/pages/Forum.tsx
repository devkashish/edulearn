import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, ThumbsUp, MessageCircle, Filter, Search, Plus, X, MoreVertical, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

// Types
interface ForumTopic {
  id: string;
  title: string;
  author: string;
  avatarSrc: string;
  date: string;
  replies: number;
  likes: number;
  views: number;
  category: string;
  solved: boolean;
  content?: string;
}

// Initial forum data
const initialForumTopics: ForumTopic[] = [
  {
    id: "1",
    title: "How to optimize React component rendering?",
    author: "Jane Smith",
    avatarSrc: "https://randomuser.me/api/portraits/women/50.jpg",
    date: "5 hours ago",
    replies: 12,
    likes: 24,
    views: 340,
    category: "React",
    solved: true,
    content: "I'm working on a React app and noticing performance issues. What are the best practices for optimizing component rendering in React?"
  },
  {
    id: "2",
    title: "Understanding JavaScript Promises",
    author: "John Doe",
    avatarSrc: "https://randomuser.me/api/portraits/men/23.jpg",
    date: "1 day ago",
    replies: 8,
    likes: 16,
    views: 215,
    category: "JavaScript",
    solved: false,
    content: "Can someone explain the concept of JavaScript Promises? I'm struggling with async/await and promise chaining."
  },
  {
    id: "3",
    title: "Best practices for data visualization in Python",
    author: "Emily Johnson",
    avatarSrc: "https://randomuser.me/api/portraits/women/32.jpg",
    date: "3 days ago",
    replies: 15,
    likes: 32,
    views: 420,
    category: "Python",
    solved: true,
    content: "I'm creating data visualizations in Python using matplotlib and seaborn. What are some best practices to make my visualizations more effective?"
  },
  {
    id: "4",
    title: "Handling state in large React applications",
    author: "Michael Brown",
    avatarSrc: "https://randomuser.me/api/portraits/men/41.jpg",
    date: "1 week ago",
    replies: 23,
    likes: 45,
    views: 567,
    category: "React",
    solved: false,
    content: "As my React application grows, state management is becoming complex. What strategies do you recommend for managing state in large React applications?"
  },
  {
    id: "5",
    title: "Tips for learning machine learning algorithms",
    author: "Sarah Wilson",
    avatarSrc: "https://randomuser.me/api/portraits/women/18.jpg",
    date: "2 weeks ago",
    replies: 19,
    likes: 38,
    views: 490,
    category: "Machine Learning",
    solved: true,
    content: "I'm a beginner in machine learning. What tips do you have for understanding and implementing ML algorithms effectively?"
  }
];

const categories = [
  "All Categories",
  "React",
  "JavaScript",
  "Python",
  "Machine Learning",
  "Web Development",
  "Data Science",
  "Mobile Development"
];

const ForumTopic = ({ 
  topic, 
  onLike, 
  onDelete 
}: { 
  topic: ForumTopic; 
  onLike: (id: string) => void;
  onDelete: (id: string) => void;
}) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <>
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-start gap-2">
            <img
              src={topic.avatarSrc}
              alt={topic.author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold">{topic.title}</h3>
                  {topic.solved && (
                    <Badge variant="outline" className="bg-green-100 border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-800 dark:text-green-400">
                      Solved
                    </Badge>
                  )}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem 
                      className="text-destructive focus:text-destructive"
                      onClick={() => setShowDeleteAlert(true)}
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                Posted by {topic.author} · {topic.date}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <Badge className="mr-2">{topic.category}</Badge>
        </CardContent>
        <CardFooter className="pt-2 border-t flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => onLike(topic.id)}>
              <ThumbsUp className="h-4 w-4" />
              <span>{topic.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span>{topic.replies}</span>
            </div>
          </div>
          <div>{topic.views} views</div>
        </CardFooter>
      </Card>

      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this topic and all its replies. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                onDelete(topic.id);
                setShowDeleteAlert(false);
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const Forum = () => {
  // State
  const [forumTopics, setForumTopics] = useState<ForumTopic[]>(initialForumTopics);
  const [filteredTopics, setFilteredTopics] = useState<ForumTopic[]>(initialForumTopics);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activeTab, setActiveTab] = useState("latest");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: ""
  });
  const [filterOptions, setFilterOptions] = useState({
    onlySolved: false,
    onlyUnanswered: false,
    minReplies: 0,
    minLikes: 0
  });

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    applyFilters(query, selectedCategory, activeTab, filterOptions);
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    applyFilters(searchQuery, category, activeTab, filterOptions);
  };

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    applyFilters(searchQuery, selectedCategory, tab, filterOptions);
  };

  // Handle filter options change
  const handleFilterOptionsChange = (newOptions: typeof filterOptions) => {
    setFilterOptions(newOptions);
    applyFilters(searchQuery, selectedCategory, activeTab, newOptions);
    setIsFilterDialogOpen(false);
  };

  // Apply all filters
  const applyFilters = (
    query: string,
    category: string,
    tab: string,
    options: typeof filterOptions
  ) => {
    let filtered = [...forumTopics];

    // Search filter
    if (query) {
      filtered = filtered.filter(
        topic => 
          topic.title.toLowerCase().includes(query.toLowerCase()) ||
          topic.content?.toLowerCase().includes(query.toLowerCase()) ||
          topic.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Category filter
    if (category !== "All Categories") {
      filtered = filtered.filter(topic => topic.category === category);
    }

    // Tab filter
    switch (tab) {
      case "latest":
        // Already sorted by date in the UI representation
        break;
      case "popular":
        filtered = [...filtered].sort((a, b) => b.likes - a.likes);
        break;
      case "solved":
        filtered = filtered.filter(topic => topic.solved);
        break;
      case "unanswered":
        filtered = filtered.filter(topic => topic.replies === 0);
        break;
    }

    // Additional filter options
    if (options.onlySolved) {
      filtered = filtered.filter(topic => topic.solved);
    }
    if (options.onlyUnanswered) {
      filtered = filtered.filter(topic => topic.replies === 0);
    }
    if (options.minReplies > 0) {
      filtered = filtered.filter(topic => topic.replies >= options.minReplies);
    }
    if (options.minLikes > 0) {
      filtered = filtered.filter(topic => topic.likes >= options.minLikes);
    }

    setFilteredTopics(filtered);
  };

  // Handle creating new post
  const handleCreatePost = () => {
    if (!newPost.title || !newPost.content || !newPost.category) return;

    const currentDate = new Date();
    const newTopic: ForumTopic = {
      id: (forumTopics.length + 1).toString(),
      title: newPost.title,
      author: "Current User", // In a real app, this would be the logged-in user
      avatarSrc: "https://randomuser.me/api/portraits/men/1.jpg", // Default avatar or user avatar
      date: "Just now",
      replies: 0,
      likes: 0,
      views: 0,
      category: newPost.category,
      solved: false,
      content: newPost.content
    };

    const updatedTopics = [newTopic, ...forumTopics];
    setForumTopics(updatedTopics);
    setFilteredTopics(updatedTopics);
    setIsCreateDialogOpen(false);
    setNewPost({
      title: "",
      content: "",
      category: ""
    });
  };

  // Handle liking a post
  const handleLike = (id: string) => {
    const updatedTopics = forumTopics.map(topic => 
      topic.id === id ? { ...topic, likes: topic.likes + 1 } : topic
    );
    setForumTopics(updatedTopics);
    
    // Reapply filters to update the filtered list
    applyFilters(searchQuery, selectedCategory, activeTab, filterOptions);
  };

  // Handle deleting a post
  const handleDelete = (id: string) => {
    const updatedTopics = forumTopics.filter(topic => topic.id !== id);
    setForumTopics(updatedTopics);
    
    // Reapply filters to update the filtered list
    applyFilters(searchQuery, selectedCategory, activeTab, filterOptions);
  };

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setActiveTab("latest");
    setFilterOptions({
      onlySolved: false,
      onlyUnanswered: false,
      minReplies: 0,
      minLikes: 0
    });
    setFilteredTopics(forumTopics);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 container px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Discussion Forum</h1>
            <p className="text-muted-foreground">
              Join the community discussions and get help
            </p>
          </div>
          <Button className="gap-2" onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Input 
                  placeholder="Search discussions..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                {searchQuery && (
                  <X 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer" 
                    onClick={() => handleSearch("")}
                  />
                )}
              </div>
              <div className="flex gap-2">
                <Select
                  value={selectedCategory}
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger className="w-[150px]">
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
                <Button variant="outline" className="gap-2" onClick={() => setIsFilterDialogOpen(true)}>
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
            
            <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-6">
              <TabsList>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="solved">Solved</TabsTrigger>
                <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
              </TabsList>
            </Tabs>
            
            {filteredTopics.length > 0 ? (
              <div className="space-y-4">
                {filteredTopics.map((topic) => (
                  <ForumTopic 
                    key={topic.id} 
                    topic={topic} 
                    onLike={handleLike}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">No topics match your filters</p>
                <Button variant="link" onClick={resetFilters}>Reset Filters</Button>
              </div>
            )}
            
            {filteredTopics.length > 0 && filteredTopics.length < forumTopics.length && (
              <div className="mt-4 flex justify-center">
                <Button variant="outline" onClick={resetFilters}>Reset Filters</Button>
              </div>
            )}
            
            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More Topics</Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Popular Categories</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {categories.filter(cat => cat !== "All Categories").map(category => (
                    <Badge 
                      key={category}
                      className="cursor-pointer"
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Active Discussions</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {filteredTopics.slice(0, 3).map((topic) => (
                  <div key={topic.id} className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <div className="text-sm">{topic.title}</div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="link" className="w-full text-center p-0">View All</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Forum Guidelines</h3>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Be respectful and supportive</p>
                <p>• Ask clear, specific questions</p>
                <p>• Include relevant details</p>
                <p>• Use code blocks for code snippets</p>
                <p>• Mark solutions when your question is answered</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Create New Post Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create New Post</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                placeholder="Enter post title"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                placeholder="Enter post content"
                rows={5}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={newPost.category}
                onValueChange={(value) => setNewPost({ ...newPost, category: value })}
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
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleCreatePost} 
              disabled={!newPost.title || !newPost.content || !newPost.category}
            >
              Create Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Filters Dialog */}
      <Dialog open={isFilterDialogOpen} onOpenChange={setIsFilterDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Filter Topics</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="solved" 
                checked={filterOptions.onlySolved}
                onCheckedChange={(checked) => 
                  setFilterOptions({
                    ...filterOptions,
                    onlySolved: checked === true,
                    onlyUnanswered: checked === true ? false : filterOptions.onlyUnanswered
                  })
                }
              />
              <Label htmlFor="solved">Only show solved topics</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="unanswered" 
                checked={filterOptions.onlyUnanswered}
                onCheckedChange={(checked) => 
                  setFilterOptions({
                    ...filterOptions,
                    onlyUnanswered: checked === true,
                    onlySolved: checked === true ? false : filterOptions.onlySolved
                  })
                }
              />
              <Label htmlFor="unanswered">Only show unanswered topics</Label>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="minReplies">Minimum replies</Label>
              <Input
                id="minReplies"
                type="number"
                value={filterOptions.minReplies}
                onChange={(e) => setFilterOptions({
                  ...filterOptions,
                  minReplies: parseInt(e.target.value) || 0
                })}
                min="0"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="minLikes">Minimum likes</Label>
              <Input
                id="minLikes"
                type="number"
                value={filterOptions.minLikes}
                onChange={(e) => setFilterOptions({
                  ...filterOptions,
                  minLikes: parseInt(e.target.value) || 0
                })}
                min="0"
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                resetFilters();
                setIsFilterDialogOpen(false);
              }}
            >
              Reset
            </Button>
            <Button 
              onClick={() => {
                handleFilterOptionsChange(filterOptions);
              }}
            >
              Apply Filters
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Forum;
