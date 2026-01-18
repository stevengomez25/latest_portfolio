import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack online store with cart functionality, user authentication and distance/quote calculator. Built to understand real-world e-commerce challenges.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/stevengomez25/wc-frontend",
    live: "https://faccstore.netlify.app",
  },
  {
    title: "Alex Portfolio",
    description: "Personal portfolio site showcasing projects and case studies with a modern, accessible design.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/stevengomez25/blackfolio",
    live:"https://alexcontreras.netlify.app"
  },
  {
    title: "Inventory Pharmacy WebApp",
    description: "A classic inventory application with different user's scope,Inventory, orders/users/products CRUD for each and logic data connected between these registries levels.",
    tech: ["React", "MongoDB", "Node.js", "ExpressJs","Postman","JMeter"],
    github: "https://github.com/stevengomez25/landing_pharmacy_project",
    live: "https://saifsena.netlify.app",
  },
  {
    title: "Vet Site (pelucandog.github.io)",
    description: "A small business site for a veterinary service — informational pages and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/stevengomez25/pelucandog.github.io",
    live:"https://pelucandog.netlify.app"
  },
  {
    title: "Training Scheduler",
    description: "Personal time administration app to promote more organization as customer appointments keep organized, sorted and updated based on the trainer's priorities.",
    tech: ["React", "Typescript", "Node.js", "MongoDB"],
    github: "https://github.com/stevengomez25/s-frontend",
    live: "https://alexcn.netlify.app",
  },
  {
    title: "New Portfolio",
    description: "Recent portfolio work and experimental layouts used to iterate on personal branding and UX.",
    tech: ["React", "TailwindCSS", "TypeScript"],
    github: "https://github.com/stevengomez25/new_portfolio",
    live:"https://stevengdeveloper.netlify.app/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-hero relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Things I've <span className="text-gradient">Built</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are projects I built while learning. Each one taught me something new about 
            development, problem-solving, and shipping products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group">
            <Github className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
