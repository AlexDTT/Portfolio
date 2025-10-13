import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "NovaSupplier",
      description: "NovaSupplier is a B2B sourcing platform that connects global brands with verified European suppliers. It replaces outdated methods like trade fairs, cold outreach, and manual coordination by offering a streamlined digital solution for discovering suppliers, managing quotes, orders, invoices, shipping and communication — all in one place. The platform is built to modernize European sourcing and position Europe as the trusted, centralized hub for high-quality manufacturing.",
      tags: ["Next.js", "Nest.js", "Tailwind CSS", "Prisma", "PostgreSQL", "API Rest"],
      github: "#",
      date: "2025-present",
      demo: "https://novasupplier.com/",
      video: "",
    },
    {
      title: "Boavista Kickboxing",
      description: "Platform for managing a kickboxing gym, including member registration, class scheduling, attendance tracking, weight management, performance analysis, store for merchandise and more.",
      tags: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
      github: "#",
      date: "2021",
      demo: "",
      video: "boavistakickboxing.mp4",
    },
    {
      title: "Cheetah",
      description: "SaaS platform enabling enterprises to streamline client scheduling with intelligent calendar management and real-time synchronization.",
      tags: ["Symfony", "PHP", "MySQL", "JavaScript", "HTML/CSS", "Twig"],
      github: "#",
      date: "2022-2023",
      demo: "https://cheetah.qa.fullscreen.pt/",
      video: "",
    }, 
    {
      title: "Arte em Ponto",
      description: "E-commerce platform showcasing handcrafted crochet items with custom order functionality, pattern galleries, and artisan marketplace features.",
      tags: ["Next.js", "Vue.js", "Vite", "Tailwind CSS", "HTML/CSS"],
      github: "#",
      date: "2025",
      demo: "https://arteemponto.pages.dev/",
      video: "",
    },
  ];
  const [open, setOpen] = React.useState(false);


  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-heading tracking-wide">
            FEATURED <span className="text-primary">PROJECTS</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My greatest hits - code that rocks
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

                <p className="text-sm text-gray-400">{project.date}</p>

                <CardDescription className="text-muted-foreground mt-2">
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
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button> */}
                  {project.demo && (
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
                  )}
                  {project.video && (
                    <>
                      <Card
                        onClick={() => setOpen(true)}
                        className="cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
                      >
                        <CardContent className="p-0">
                          <video
                            src={`public/assets/${project.video}`}
                            muted
                            playsInline
                            preload="metadata"
                            className="w-full h-48 object-cover"
                          />
                        </CardContent>
                      </Card>
                    
                      <Dialog open={open} onOpenChange={setOpen}>
                        <DialogContent className="p-0 bg-transparent border-none max-w-4xl">
                          <AnimatePresence>
                            {open && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="flex justify-center items-center"
                              >
                                <video
                                  src={`public/assets/${project.video}`}
                                  controls
                                  autoPlay
                                  className="w-full h-auto rounded-2xl shadow-lg"
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </DialogContent>
                      </Dialog>
                    </>
                  )}
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
