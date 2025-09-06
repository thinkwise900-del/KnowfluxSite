import { useState } from "react";
import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2" data-testid="logo">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="text-primary-foreground text-xl" />
            </div>
            <span className="text-2xl font-bold text-primary">Knowflux</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-products"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('products')}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>
          
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-products"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('products')}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors w-fit"
                data-testid="mobile-button-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
