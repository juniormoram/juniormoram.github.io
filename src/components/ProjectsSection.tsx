import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Sistema de Talento Humano",
    description:
      "Sitio web para la administración del Talento Humano en Quercus Rest. Planillas, vacaciones, permisos laborales, incapacidades, marcas laborales, aguinaldos, liquidaciones.",
    technologies: ["C#", "JavaScript", "HTML", "CSS", "Bootstrap"],
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  },
  {
    title: "Sistema de Gestión de Pedidos",
    description:
      "Sitio web para la administración de pedidos u ordenes en Quercus Rest. Menú, precios, impresión de tiquetes.",
    technologies: ["C#", "JavaScript", "HTML", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Juego de Mesa Clue",
    description:
      "Aplicación de escritorio del juego de mesa Clue, desarrollada con interfaces gráficas y lógica de juego completa.",
    technologies: ["Java"],
    imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&q=80",
    githubUrl: "https://github.com/juniormoram",
  },
];

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary mb-4">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos{" "}
            <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-muted-foreground">
            Una selección de proyectos que demuestran mi experiencia en desarrollo web y aplicaciones.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
