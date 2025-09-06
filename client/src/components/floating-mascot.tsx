import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import mascotImage from "@assets/generated_images/Friendly_AI_mascot_character_e33b3fa7.png";

const tips = [
  "💡 Did you know? Our AI solutions can reduce operational costs by up to 60%!",
  "🚀 Tip: Check out our Products section to see how AI can transform your business!",
  "⭐ Fun fact: All our products are powered by advanced machine learning algorithms!",
  "🎯 Pro tip: Schedule a demo to see our AI solutions in action!",
  "🔥 Innovation alert: Our AI can process data 1000x faster than traditional methods!",
  "💪 Success story: Our clients have seen 3x productivity improvements!",
  "🌟 Quick tip: Scroll down to learn about our mission and vision!",
  "🤖 AI insight: Machine learning is reshaping every industry - including yours!"
];

export default function FloatingMascot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show floating mascot after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Rotate tips every 5 seconds
    const tipTimer = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % tips.length);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(tipTimer);
    };
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    setHasInteracted(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="floating-mascot">
      {/* Expanded Chat-like Interface */}
      {isExpanded && (
        <div className="mb-4 bg-card border border-border rounded-2xl shadow-2xl p-4 max-w-xs animate-in slide-in-from-bottom-2 fade-in duration-300">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <img 
                  src={mascotImage} 
                  alt="Flux"
                  className="w-full h-full object-contain animate-float"
                />
              </div>
              <span className="font-semibold text-card-foreground text-sm">Flux says:</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6 p-0 hover:bg-muted"
              data-testid="button-collapse-mascot"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3" data-testid="floating-mascot-tip">
            {tips[currentTip]}
          </p>
          
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => {
                const element = document.getElementById('products');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                setIsExpanded(false);
              }}
              className="text-xs bg-primary hover:bg-primary/90 text-primary-foreground"
              data-testid="button-view-products"
            >
              View Products
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                setIsExpanded(false);
              }}
              className="text-xs border-border hover:bg-muted"
              data-testid="button-contact-us"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}

      {/* Floating Mascot Button */}
      <div className="relative">
        <Button
          onClick={handleToggle}
          className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 p-0"
          data-testid="button-floating-mascot"
        >
          {isExpanded ? (
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
          ) : (
            <img 
              src={mascotImage} 
              alt="Flux - Click to chat!"
              className="w-12 h-12 object-contain animate-bounce"
            />
          )}
        </Button>
        
        {/* Notification dot for new tips */}
        {!hasInteracted && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        )}
        
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 animate-ping"></div>
      </div>
    </div>
  );
}