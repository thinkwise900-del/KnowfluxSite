import { useState } from "react";
import mascotImage from "@assets/generated_images/Friendly_AI_mascot_character_e33b3fa7.png";

interface MascotProps {
  variant?: "default" | "waving" | "thinking" | "celebrating";
  size?: "sm" | "md" | "lg" | "xl";
  message?: string;
  position?: "left" | "right" | "center";
  className?: string;
}

const messages = {
  default: [
    "Hi! I'm Flux, your AI companion! 🤖",
    "Ready to explore our amazing products?",
    "Let's innovate together!",
    "AI-powered solutions await you!"
  ],
  waving: [
    "Hello there! Welcome to Knowflux! 👋",
    "Great to see you here!",
    "I'm excited to show you around!"
  ],
  thinking: [
    "Hmm, let me think about that... 🤔",
    "Processing your request...",
    "AI brain at work!"
  ],
  celebrating: [
    "Awesome choice! 🎉",
    "You're going to love this!",
    "Success! Let's keep going!"
  ]
};

export default function Mascot({ 
  variant = "default", 
  size = "md", 
  message, 
  position = "right",
  className = "" 
}: MascotProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(
    message || messages[variant][Math.floor(Math.random() * messages[variant].length)]
  );

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16", 
    lg: "w-24 h-24",
    xl: "w-32 h-32"
  };

  const handleClick = () => {
    const newMessage = messages[variant][Math.floor(Math.random() * messages[variant].length)];
    setCurrentMessage(newMessage);
  };

  const positionClasses = {
    left: "flex-row",
    right: "flex-row-reverse",
    center: "flex-col items-center"
  };

  return (
    <div 
      className={`flex items-center gap-3 ${positionClasses[position]} ${className}`}
      data-testid="mascot-container"
    >
      <div
        className={`${sizeClasses[size]} relative cursor-pointer transition-all duration-300 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        data-testid="mascot-image"
      >
        <img 
          src={mascotImage} 
          alt="Flux - Knowflux AI Mascot"
          className={`w-full h-full object-contain transition-transform duration-300 ${
            isHovered ? "animate-bounce" : ""
          }`}
        />
        
        {/* Floating animation */}
        <div className="absolute inset-0 animate-float"></div>
        
        {/* Hover glow effect */}
        {isHovered && (
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg animate-pulse"></div>
        )}
      </div>

      {/* Speech bubble */}
      <div className={`relative max-w-xs ${isHovered ? "opacity-100" : "opacity-75"} transition-opacity duration-300`}>
        <div className="bg-card border border-border rounded-xl p-3 shadow-lg relative">
          <p className="text-sm text-card-foreground" data-testid="mascot-message">
            {currentMessage}
          </p>
          
          {/* Speech bubble pointer */}
          <div 
            className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-transparent ${
              position === "left" 
                ? "right-full border-r-8 border-r-border" 
                : position === "right"
                ? "left-full border-l-8 border-l-border"
                : "top-full left-1/2 -translate-x-1/2 border-t-8 border-t-border border-l-8 border-r-8"
            }`}
          />
        </div>
      </div>
    </div>
  );
}