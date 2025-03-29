
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  image: string;
  category: string;
  price?: number;
}

const CourseCard = ({
  id,
  title,
  instructor,
  level,
  duration,
  students,
  rating,
  image,
  price = 49.99,
}: CourseCardProps) => {
  const navigate = useNavigate();
  
  const handleViewCourse = () => {
    navigate(`/courses/${id}`);
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
          ${price}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2 mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{instructor}</p>
        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
                fill="currentColor"
              />
            ))}
          </div>
          <span className="text-sm ml-2">{rating}</span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <div className="flex items-center">
            <BookOpen className="h-3 w-3 mr-1" />
            <span>{level}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            <span>{students.toLocaleString()} students</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="secondary" 
          className="w-full"
          onClick={handleViewCourse}
        >
          View Course
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
