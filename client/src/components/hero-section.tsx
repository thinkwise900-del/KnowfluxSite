import { Brain, ServerCog, TrendingUp, Users, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Mascot from "@/components/mascot";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight" data-testid="hero-title">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AI-Driven Innovation
                </span>
                <br />
                for the Future
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="hero-description">
                Transforming industries with cutting-edge artificial intelligence solutions. 
                Empowering businesses to scale, automate, and innovate with confidence.
              </p>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-xl border border-border" data-testid="mission-card">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize AI technology by creating accessible, scalable solutions that drive 
                meaningful business transformation across diverse industries.
              </p>
            </div>
            
            {/* Mascot Welcome */}
            <div className="flex justify-center lg:justify-start">
              <Mascot 
                variant="waving" 
                size="lg" 
                position="left"
                message="Welcome to the future of AI! I'm Flux, and I'm excited to show you what we can do together! 🚀"
                className="max-w-md"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('products')}
                className="btn-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg"
                data-testid="button-explore-products"
              >
                Explore Our Products
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border border-border text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-muted transition-colors"
                data-testid="button-schedule-demo"
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4" data-testid="stats">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" data-testid="stat-products">4</div>
                <div className="text-sm text-muted-foreground">MVP Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" data-testid="stat-ai">100%</div>
                <div className="text-sm text-muted-foreground">AI-Powered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" data-testid="stat-scalability">∞</div>
                <div className="text-sm text-muted-foreground">Scalability</div>
              </div>
            </div>
          </div>
          
          <div className="relative" data-testid="hero-visual">
            <div className="relative w-full h-96 lg:h-[500px]">
              <div className="absolute inset-0 gradient-hero rounded-3xl animate-float"></div>
              <div className="absolute inset-8 bg-background rounded-2xl flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Brain className="text-primary text-2xl" />
                  </div>
                  <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <ServerCog className="text-secondary text-2xl" />
                  </div>
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-accent text-2xl" />
                  </div>
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Users className="text-accent text-2xl" />
                  </div>
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Lightbulb className="text-primary text-2xl" />
                  </div>
                  <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <Rocket className="text-secondary text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
