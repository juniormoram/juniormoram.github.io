import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="text-lg font-bold tracking-tight">
            junior<span className="text-gradient">mora</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Junior Mora. 
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
          >
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
