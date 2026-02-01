import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  siteUrl?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  siteUrl,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-gradient-card border border-border/50 shadow-card hover-glow transition-all duration-500 hover:border-primary/30 opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image container */}
      <div className="relative h-52 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="text-muted-foreground font-mono text-sm">Preview</span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono bg-secondary/80 text-secondary-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Glow effect on card edge */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </div>
    </div>
  );
};

export default ProjectCard;
