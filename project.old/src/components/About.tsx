import { Card } from "@/components/ui/card";
import { GraduationCap, Code2, Music } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-heading tracking-wide">
            ABOUT <span className="text-primary">ME</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Description */}
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a collaborative and driven individual with around 3 years of experience in web development, working primarily with PHP (including frameworks such as Symfony), JavaScript, HTML, CSS, and relational databases. I've had the opportunity to develop and deliver web-based solutions for companies, helping them enhance their digital presence through tailored platforms.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about sports, especially football. I bring the same energy and team spirit to my professional life. I thrive in team environments, enjoy building meaningful connections, and believe that strong relationships are key to long-term success in any field.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hardworking and ambitious, I constantly set goals for myself and take pride in pursuing them with dedication and resilience, always giving my best to achieve results.
            </p>
          </div>
          
          {/* Right: Highlights */}
          <div className="space-y-4 animate-fade-in-up">
            <Card className="p-6 bg-gradient-secondary border-border hover:border-primary/50 transition-all hover:shadow-warm group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-4">Education</h3>
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-2 top-4 bottom-4 w-0.5 bg-primary/30"></div>
                    
                    {/* Current Education */}
                    <div className="relative flex items-start gap-4 mb-4">
                      <div className="w-4 h-4 rounded-full bg-primary border-2 border-background z-10"></div>
                      <div className="flex-1 -mt-1">
                        <p className="text-muted-foreground font-medium">
                          BCh in Computer Engineering at FEUP
                        </p>
                        <p className="text-muted-foreground/70 text-sm">
                          2024 - Present
                        </p>
                      </div>
                    </div>
                    
                    {/* Previous Education */}
                    <div className="relative flex items-start gap-4">
                      <div className="w-4 h-4 rounded-full bg-muted border-2 border-background z-10"></div>
                      <div className="flex-1 -mt-1">
                        <p className="text-muted-foreground">
                          Colégio Internato dos Carvalhos - Informatics
                        </p>
                        <p className="text-muted-foreground/70 text-sm">
                          Secondary Education
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-secondary border-border hover:border-primary/50 transition-all hover:shadow-warm group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Development Focus</h3>
                  <p className="text-muted-foreground">
                    Full-stack development, algorithms, and software architecture
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-secondary border-border hover:border-primary/50 transition-all hover:shadow-warm group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Music className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Music & Creativity</h3>
                  <p className="text-muted-foreground">
                    Guitar player, rock enthusiast, creative problem solver
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
