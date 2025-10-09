import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50 animate-glow-pulse" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="inline-block">
            <span className="text-accent font-accent text-xs md:text-sm">Hi, my name is</span>
          </div>
          
          {/* Name with gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading tracking-wider">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ALEXANDRE TEIXEIRA
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
            Code & Chords
          </h2>
          <p className="text-lg text-muted-foreground">
            Computer Engineering Student • Guitar Enthusiast
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            19-year-old BCh student at FEUP, passionate about building innovative solutions 
            and exploring the intersection of technology and creativity.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary transition-all hover:scale-105"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button> 
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-foreground hover:text-foreground hover:bg-primary/10 hover:scale-105 transition-all"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-4">
            <a 
              href="https://github.com/AlexDTT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/alexandre-teixeira-186093278/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:alex.dinis.06@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
