import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="contact-title">
                Let's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="contact-description">
                Ready to transform your business with AI? We'd love to hear from you. 
                Reach out to discuss partnerships, investments, or learn more about our solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">hello@knowflux.ai</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-phone">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Phone className="text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-location">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-muted-foreground">San Francisco, CA</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4" data-testid="social-links">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="link-linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="link-twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="link-github"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="link-youtube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border" data-testid="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  placeholder="Your full name"
                  required
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project or how we can help..."
                  required
                  data-testid="input-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg"
                disabled={contactMutation.isPending}
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
