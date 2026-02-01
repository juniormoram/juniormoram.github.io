import { ArrowUpRight, Github, Linkedin, Mail, MessageCircleCode, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Tienes un proyecto en{" "}
            <span className="text-gradient">mente</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estoy disponible para proyectos freelance y oportunidades laborales. 
            ¡Hablemos sobre cómo puedo ayudarte!
          </p>

          {/* CTA Button */}
          <a
            href="mailto:juniormora558@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold text-lg shadow-glow hover:shadow-[0_0_60px_hsl(175_80%_50%_/_0.3)] transition-all duration-300 hover:scale-105 mb-16"
          >
            <Mail className="w-5 h-5" />
            Envíame un mensaje
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <a
              href="https://github.com/juniormoram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors link-underline"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/junior-mora-988317230"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors link-underline"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://wa.me/50662415846"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors link-underline"
            >
              <MessageCircleCode className="w-5 h-5" />
              WhatsApp
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Costa Rica
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
