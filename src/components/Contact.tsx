import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-secondary">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-heading tracking-wide">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>

          <div className="pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-primary transition-all hover:scale-105"
              asChild
            >
              <a href="mailto:alex.dinis.06%40gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Say Hello
              </a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://github.com/AlexDTT"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/alexandre-teixeira-186093278/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:alex.dinis.06%40gmail.com"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
