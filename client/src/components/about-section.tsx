import { Lightbulb, Rocket, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="about-title">
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Knowflux</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="about-description">
                Founded on the belief that artificial intelligence should be accessible and transformative, 
                Knowflux is a pioneering startup dedicated to developing innovative AI-driven solutions 
                that solve real-world business challenges.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-testid="value-innovation">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Innovation First</h3>
                  <p className="text-muted-foreground">We push the boundaries of what's possible with AI, creating solutions that didn't exist before.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="value-scalability">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Rocket className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Scalable Solutions</h3>
                  <p className="text-muted-foreground">Our products are designed to grow with your business, from startup to enterprise scale.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="value-human-centered">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Human-Centered</h3>
                  <p className="text-muted-foreground">Technology should enhance human capability, not replace it. We design with people at the center.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6" data-testid="company-stats">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-founded">2024</div>
                <div className="text-muted-foreground">Founded</div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-secondary mb-2" data-testid="stat-mvp-count">4</div>
                <div className="text-muted-foreground">MVP Products</div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-possibilities">∞</div>
                <div className="text-muted-foreground">Possibilities</div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-ai-powered">AI</div>
                <div className="text-muted-foreground">Powered</div>
              </div>
            </div>
            
            <div className="bg-muted/50 p-8 rounded-2xl border border-border" data-testid="vision-card">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading provider of AI-driven business solutions, 
                empowering organizations worldwide to achieve unprecedented levels 
                of efficiency, innovation, and growth through intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
