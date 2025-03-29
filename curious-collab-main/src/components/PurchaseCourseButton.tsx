
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import PaymentModal from "@/components/PaymentModal";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface PurchaseCourseButtonProps {
  courseId: string;
  courseTitle: string;
  price?: number;
}

const PurchaseCourseButton = ({ courseId, courseTitle, price = 49.99 }: PurchaseCourseButtonProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
  const handlePurchaseClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please log in to purchase this course",
      });
      navigate("/auth");
      return;
    }
    
    // Check if already purchased
    const purchasedCourses = JSON.parse(localStorage.getItem("purchasedCourses") || "[]");
    if (purchasedCourses.includes(courseId)) {
      toast({
        title: "Already Purchased",
        description: "You already own this course. Redirecting to course content.",
      });
      // Here you would navigate to the course content page
      return;
    }
    
    setIsPaymentModalOpen(true);
  };
  
  const handlePaymentSuccess = () => {
    // Store purchased course in local storage
    const purchasedCourses = JSON.parse(localStorage.getItem("purchasedCourses") || "[]");
    purchasedCourses.push(courseId);
    localStorage.setItem("purchasedCourses", JSON.stringify(purchasedCourses));
  };
  
  return (
    <>
      <Button 
        onClick={handlePurchaseClick} 
        className="w-full gap-2 group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        <span className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative flex items-center gap-2">
          <ShoppingCart className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
          Purchase for ${price.toFixed(2)}
        </span>
      </Button>
      
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        courseTitle={courseTitle}
        coursePrice={price}
        onSuccess={handlePaymentSuccess}
      />
    </>
  );
};

export default PurchaseCourseButton;
