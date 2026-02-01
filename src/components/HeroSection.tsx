import { ArrowDown, Github, Linkedin, Mail, MessageCircleCode } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 opacity-0 animate-slide-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Disponible para proyectos</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-slide-up delay-100">
            Junior{" "}
            <span className="text-gradient text-destructive">Mora</span>
          </h1>

          {/* Role tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 opacity-0 animate-slide-up delay-200">
            <span className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-mono text-sm">
              Desarrollador Web
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-mono text-sm">
              Ingeniero de Software
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-slide-up delay-300">
            Apasionado por crear soluciones web{" "}
            <span className="text-foreground">ágiles y funcionales</span>. 
            Transformando ideas en experiencias digitales excepcionales.
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-16 opacity-0 animate-slide-up delay-400">
            <a href="mailto:juniormora558@gmail.com" className="group flex items-center justify-center w-12 h-12 rounded-xl glass hover-glow transition-all duration-300 hover:border-primary/50">
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://github.com/juniormoram" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-xl glass hover-glow transition-all duration-300 hover:border-primary/50">
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/in/junior-mora-988317230" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-xl glass hover-glow transition-all duration-300 hover:border-primary/50">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://wa.me/50662415846" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-xl glass hover-glow transition-all duration-300 hover:border-primary/50">
              <MessageCircleCode className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Scroll indicator */}
          <a href="#proyectos" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors opacity-0 animate-slide-up delay-500">
            <span className="text-sm font-medium">Explorar</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;