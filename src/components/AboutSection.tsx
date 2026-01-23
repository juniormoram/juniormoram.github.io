import { Briefcase, GraduationCap, Heart, Zap } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "Experiencia",
    value: "Desarrollo Web",
  },
  {
    icon: GraduationCap,
    label: "Formación",
    value: "Ing. Software",
  },
  {
    icon: Heart,
    label: "Pasión",
    value: "Código Limpio",
  },
  {
    icon: Zap,
    label: "Enfoque",
    value: "Ágil & Funcional",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="opacity-0 animate-slide-in-left">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary mb-4">
              Sobre Mí
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Desarrollando el{" "}
              <span className="text-gradient">futuro digital</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Soy <span className="text-foreground font-medium">Ingeniero de Software</span> con 
                experiencia en desarrollo web y creación de aplicaciones a medida. Apasionado por 
                lo ágil y funcional.
              </p>
              <p>
                Me considero un profesional <span className="text-foreground font-medium">curioso y en constante aprendizaje</span>, 
                siempre buscando nuevas formas de mejorar mis habilidades y contribuir al éxito 
                de los proyectos en los que participo.
              </p>
              <p>
                Mi objetivo es crear soluciones que no solo funcionen, sino que 
                <span className="text-foreground font-medium"> generen valor real</span> para 
                los usuarios y las empresas.
              </p>
            </div>
          </div>

          {/* Right content - Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="group p-6 rounded-2xl bg-gradient-card border border-border/50 shadow-card hover-glow transition-all duration-300 hover:border-primary/30 opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="font-semibold text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
