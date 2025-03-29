
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  coursePrice: number;
  onSuccess: () => void;
}

const PaymentModal = ({ isOpen, onClose, courseTitle, coursePrice, onSuccess }: PaymentModalProps) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    name: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      
      // After showing success state for a moment, close and notify
      setTimeout(() => {
        onSuccess();
        onClose();
        
        toast({
          title: "Payment Successful",
          description: `You've successfully enrolled in "${courseTitle}"`,
        });
      }, 1500);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isCompleted ? "Payment Successful" : "Complete Purchase"}</DialogTitle>
          <DialogDescription>
            {isCompleted 
              ? "Thank you for your purchase!" 
              : `Enter your payment details to enroll in "${courseTitle}"`}
          </DialogDescription>
        </DialogHeader>

        {isCompleted ? (
          <div className="py-6 flex flex-col items-center justify-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-center text-sm">
              Your payment of ${coursePrice.toFixed(2)} has been processed successfully. You now have full access to this course.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Cardholder Name</Label>
              <Input 
                id="name" 
                value={cardDetails.name} 
                onChange={handleChange} 
                placeholder="John Smith" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <div className="relative">
                <Input 
                  id="cardNumber" 
                  value={cardDetails.cardNumber} 
                  onChange={handleChange} 
                  placeholder="4242 4242 4242 4242" 
                  maxLength={19}
                  required 
                />
                <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input 
                  id="expiry" 
                  value={cardDetails.expiry} 
                  onChange={handleChange} 
                  placeholder="MM/YY" 
                  maxLength={5}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input 
                  id="cvc" 
                  value={cardDetails.cvc} 
                  onChange={handleChange} 
                  placeholder="123" 
                  maxLength={3}
                  required 
                />
              </div>
            </div>
            <DialogFooter className="pt-4">
              <Button variant="outline" type="button" onClick={onClose} disabled={isProcessing}>
                Cancel
              </Button>
              <Button type="submit" disabled={isProcessing}>
                {isProcessing ? "Processing..." : `Pay $${coursePrice.toFixed(2)}`}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
