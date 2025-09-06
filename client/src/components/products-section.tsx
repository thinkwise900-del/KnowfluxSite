import { Brain, Smartphone, ServerCog, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "loomiya",
    name: "Loomiya",
    type: "Web Application",
    icon: Brain,
    color: "primary",
    description: "An AI-powered business process and scenarios simulator that helps organizations model, test, and optimize their operations before implementation. Reduce risks and maximize efficiency with predictive analytics.",
    tags: ["AI Simulation", "Process Optimization", "Risk Analysis"]
  },
  {
    id: "gabi",
    name: "Gabi",
    type: "Mobile Application",
    icon: Smartphone,
    color: "secondary",
    description: "An innovative delivery solution that seamlessly connects freelancers and clients through intelligent matching algorithms. Streamline project delivery with real-time tracking and automated workflows.",
    tags: ["Smart Matching", "Real-time Tracking", "Freelancer Network"]
  },
  {
    id: "bernos",
    name: "Bernos",
    type: "Web Application",
    icon: ServerCog,
    color: "accent",
    description: "A comprehensive workflow automation tool designed for multiple sectors. Eliminate repetitive tasks, integrate systems seamlessly, and boost productivity across your entire organization.",
    tags: ["Workflow Automation", "Multi-sector", "Integration Hub"]
  },
  {
    id: "peaktalent",
    name: "PeakTalent",
    type: "Web Application",
    icon: Users,
    color: "primary",
    description: "A fully automated, AI-powered recruitment solution that revolutionizes talent acquisition. From candidate sourcing to final selection, streamline your hiring process with intelligent automation.",
    tags: ["AI Recruitment", "Automated Screening", "Talent Matching"]
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-muted/30" data-testid="products-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="products-title">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our MVP Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="products-description">
            Four innovative solutions designed to revolutionize how businesses operate, 
            connect, and scale in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div 
                key={product.id}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover"
                data-testid={`card-product-${product.id}`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-${product.color}/10 rounded-xl flex items-center justify-center mr-4`}>
                    <IconComponent className={`text-${product.color} text-xl`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground" data-testid={`product-name-${product.id}`}>
                      {product.name}
                    </h3>
                    <span className="text-sm text-secondary font-medium" data-testid={`product-type-${product.id}`}>
                      {product.type}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`product-description-${product.id}`}>
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6" data-testid={`product-tags-${product.id}`}>
                  {product.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 bg-${product.color}/10 text-${product.color} text-sm rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  className={`w-full bg-${product.color} text-${product.color === 'accent' ? 'accent-foreground' : 'primary-foreground'} py-3 rounded-xl font-semibold hover:bg-${product.color}/90 transition-colors`}
                  data-testid={`button-learn-more-${product.id}`}
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
