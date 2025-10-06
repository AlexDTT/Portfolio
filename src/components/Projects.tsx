import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NovaSupplier - Dev",
      description: "Full-stack marketplace platform connecting Brands and Suppliers with integrated payments, order management, and real-time communication built on Next.js/NestJS with Stripe Connect and Azure infrastructure.",
      tags: ["Next.js", "Nest.js", "Tailwind CSS", "Prisma", "PostgreSQL", "API Rest"],
      github: "#",
      demo: "https://novasupplier.com/",
    },
    {
      title: "Cheetah",
      description: "SaaS platform enabling enterprises to streamline client scheduling with intelligent calendar management and real-time synchronization.",
      tags: ["Symfony", "PHP", "MySQL", "JavaScript", "HTML/CSS", "Twig"],
      github: "#",
      demo: "https://cheetah.qa.fullscreen.pt/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-heading tracking-wide">
            FEATURED <span className="text-primary">PROJECTS</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My greatest hits—code that rocks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className="bg-gradient-secondary border-border hover:border-primary/50 transition-all hover:shadow-card group animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gap-2 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
