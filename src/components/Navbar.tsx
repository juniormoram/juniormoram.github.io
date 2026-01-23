import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 glass border-b border-border/50"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
          >
            junior<span className="text-gradient">mora</span>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium text-sm hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Hablemos
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-b border-border/50 py-6 animate-fade-in">
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium"
                >
                  Hablemos
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
