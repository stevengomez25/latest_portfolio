import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background glow effects (responsive sizes) */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm <span className="text-gradient">Steven</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            A passionate{" "}
            <span className="text-foreground font-medium">
              Fullstack Developer
            </span>{" "}
            ready to turn ideas into reality. No corporate experience yet — just
            pure dedication, curiosity, and a portfolio of projects I built from
            scratch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="glow-primary text-lg px-8">
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <a
                href="https://drive.google.com/drive/folders/13OXT4bmdhdgCwuOQx0HAMJLkrf5VMbvu?usp=sharing"
                target="blank"
              >
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/stevengomez25"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/20 transition-colors group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="www.linkedin.com/in/steven-gómez-49aa87236"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/20 transition-colors group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:stevengdeveloper@gmail.com"
              target="_blank"
              className="p-3 rounded-full glass hover:bg-primary/20 transition-colors group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="animate-float block">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
