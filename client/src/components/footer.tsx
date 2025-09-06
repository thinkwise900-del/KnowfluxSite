import { Brain } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4" data-testid="footer-brand">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="text-primary-foreground text-sm" />
              </div>
              <span className="text-xl font-bold">Knowflux</span>
            </div>
            <p className="text-sm text-background/70">
              AI-driven innovation for the future. Transforming businesses with intelligent solutions.
            </p>
          </div>
          
          <div data-testid="footer-products">
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><button className="hover:text-background transition-colors text-left" data-testid="footer-link-loomiya">Loomiya</button></li>
              <li><button className="hover:text-background transition-colors text-left" data-testid="footer-link-gabi">Gabi</button></li>
              <li><button className="hover:text-background transition-colors text-left" data-testid="footer-link-bernos">Bernos</button></li>
              <li><button className="hover:text-background transition-colors text-left" data-testid="footer-link-peaktalent">PeakTalent</button></li>
            </ul>
          </div>
          
          <div data-testid="footer-company">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-background transition-colors text-left" data-testid="footer-link-about">About Us</button></li>
              <li><button className="hover:text-background transition-colors text-left" data-testid="footer-link-careers">Careers</button></li>
              <li><button className="hover:text-background transition-colors text-left" data-testid="footer-link-blog">Blog</button></li>
              <li><button className="hover:text-background transition-colors text-left" data-testid="footer-link-press">Press</button></li>
            </ul>
          </div>
          
          <div data-testid="footer-support">
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-background transition-colors text-left" data-testid="footer-link-contact">Contact</button></li>
              <li><button className="hover:text-background transition-colors text-left" data-testid="footer-link-docs">Documentation</button></li>
              <li><button className="hover:text-background transition-colors text-left" data-testid="footer-link-privacy">Privacy Policy</button></li>
              <li><button className="hover:text-background transition-colors text-left" data-testid="footer-link-terms">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center" data-testid="footer-copyright">
          <p className="text-sm text-background/70">
            © 2024 Knowflux. All rights reserved. Built with innovation and AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
