import { Code, Database, GitBranch, Globe, Layout, Server, Terminal, Users } from "lucide-react";

const skills = [
  {
    category: "Lenguajes",
    icon: Code,
    items: ["C#", "JavaScript", "Python", "Java", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Bootstrap", "Responsive Design"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["ASP.NET", "Node.js", "APIs REST"],
  },
  {
    category: "Bases de Datos",
    icon: Database,
    items: ["SQL Server", "MySQL", "PostgreSQL"],
  },
  {
    category: "Control de Versiones",
    icon: GitBranch,
    items: ["Git", "GitHub"],
  },
  {
    category: "Metodologías",
    icon: Users,
    items: ["Scrum", "Agile"],
  },
  {
    category: "Sistemas",
    icon: Terminal,
    items: ["Windows Server", "Office 365"],
  },
  {
    category: "Otros",
    icon: Globe,
    items: ["SEO", "Accesibilidad", "UX/UI"],
  },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary mb-4">
            Stack Tecnológico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Habilidades{" "}
            <span className="text-gradient">Técnicas</span>
          </h2>
          <p className="text-muted-foreground">
            Tecnologías y herramientas con las que trabajo para crear soluciones efectivas.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group p-6 rounded-2xl glass hover-glow transition-all duration-300 hover:border-primary/30 opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <skill.icon className="w-6 h-6" />
              </div>

              {/* Category name */}
              <h3 className="font-semibold mb-3 group-hover:text-gradient transition-all">
                {skill.category}
              </h3>

              {/* Skills list */}
              <ul className="space-y-1.5">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
