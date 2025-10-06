import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C/C++", "Java", "SQL"],
    },
    {
      category: "Frontend",
      skills: ["React", "HTML/CSS", "Tailwind CSS", "Next.js", "Vue.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "PHP"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Linux", "VS Code", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-secondary">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-heading tracking-wide">
            SKILLS & <span className="text-primary">TECH</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My technical arsenal - tuned to perfection
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          {skillCategories.map((category, idx) => (
            <div
              key={category.category}
              className="space-y-4"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold text-accent">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-card border-border hover:border-primary hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
