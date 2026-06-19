// @ts-nocheck

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle, Briefcase, Users, Code2 } from "lucide-react";
import TextType from "./TextType";
import { useEffect, useState } from "react";

// --- SUBCOMPONENTE DE FONDO MATRIX/CODE RAIN ---
const CodeRainBackground = () => {
  const [mounted, setMounted] = useState(false);
  const [lines, setLines] = useState([]);

  // Fragmentos de código inspirados en la imagen de referencia
  const codeSnippets = [
    'import React from "react";',
    'const App = () => {',
    'fetchData();',
    'npm run dev',
    'async function deploy() {',
    'return <div>Hello World</div>;',
    'useEffect(() => {}, []);',
    'console.log("Success");',
    'function buildAwesome() {',
    'export default App;',
    'await prisma.user.findMany()',
    'const [state, setState] = useState()',
    '// Building digital experiences',
    'SCROLL',
    '{ opacity: 0.5 }',
    'if (user.isAuthenticated) {',
  ];

  useEffect(() => {
    setMounted(true);
    // Generar 30 fragmentos cayendo en posiciones y velocidades aleatorias
    const generatedLines = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      left: `${Math.random() * 100}%`, // Posición horizontal aleatoria
      animationDuration: Math.random() * 15 + 15, // Entre 15 y 30 segundos en caer
      animationDelay: Math.random() * 10, // Retraso inicial para que no caigan todos al mismo tiempo
      fontSize: `${Math.random() * 0.4 + 0.8}rem`, // Tamaños entre 0.8rem y 1.2rem
      opacity: Math.random() * 0.25 + 0.05, // Opacidad sutil (0.05 a 0.3)
      color: Math.random() > 0.5 ? '#6fd0e1' : '#22c55e', // Mezcla de cyan primario y verde matrix
    }));
    setLines(generatedLines);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute whitespace-nowrap font-mono tracking-wider"
          style={{
            left: line.left,
            fontSize: line.fontSize,
            opacity: line.opacity,
            color: line.color,
            top: '-10%', // Empiezan un poco más arriba de la pantalla
          }}
          animate={{
            y: ['0vh', '120vh'], // Caen hasta desaparecer abajo
          }}
          transition={{
            duration: line.animationDuration,
            repeat: Infinity,
            delay: line.animationDelay,
            ease: "linear",
          }}
        >
          {line.text}
        </motion.div>
      ))}
    </div>
  );
};
// -----------------------------------------------

const techBadges = [
  { name: "React.js", color: "text-blue-400" },
  { name: "TypeScript", color: "text-blue-500" },
  { name: "Java Spring Boot", color: "text-green-500" },
  { name: "Tailwind CSS", color: "text-cyan-400" },
  { name: "PostgreSQL", color: "text-blue-300" },
  { name: "Node.js", color: "text-green-400" }
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden bg-[#020817]">
      {/* Nuevo fondo Matrix/Code Rain */}
      <CodeRainBackground />

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse pointer-events-none z-0" />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl animate-glow-pulse pointer-events-none z-0"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="w-full h-dvh mx-auto px-6 py-20 relative z-10 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center relative z-10 w-full mt-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-primary font-medium tracking-wider text-sm md:text-base uppercase">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight text-white"
          >
            Steven <span className="text-gradient">Gómez</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl text-primary mb-6 font-semibold"
          >
            Full-Stack Web Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto h-8"
          >
            <TextType
              text={[
                "Building scalable SaaS platforms.",
                "Orchestrating cloud deployments.",
                "Automating business workflows.",
                "Designing robust software architectures."
              ]}
              typingSpeed={50}
              pauseDuration={2000}
              showCursor
              cursorCharacter="|"
              deletingSpeed={30}
            />
          </motion.p>

          {/* Tech Badges Row */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl"
          >
            {techBadges.map((tech) => (
              <span 
                key={tech.name} 
                className="px-4 py-1.5 rounded-full glass border border-border/30 text-sm font-medium flex items-center gap-2"
              >
                <Code2 className={`w-4 h-4 ${tech.color}`} />
                {tech.name}
              </span>
            ))}
          </motion.div>

          {/* Stats Cards Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 w-full max-w-3xl"
          >
            <div className="glass p-4 rounded-2xl border border-border/20 flex items-center gap-4 hover:border-primary/50 transition-colors backdrop-blur-md">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">3+</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
            
            <div className="glass p-4 rounded-2xl border border-border/20 flex items-center gap-4 hover:border-primary/50 transition-colors backdrop-blur-md">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">SaaS</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Architectures Built</p>
              </div>
            </div>

            <div className="glass p-4 rounded-2xl border border-border/20 flex items-center gap-4 hover:border-primary/50 transition-colors backdrop-blur-md">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">B2B</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Enterprise Solutions</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Actions & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="flex gap-4">
              <Button size="lg" className="glow-primary text-base px-8 z-10 bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-6 z-10 glass border-border/50 hover:bg-white/5 backdrop-blur-md">
                <a href="#contact">Let's Connect</a>
              </Button>
            </div>

            <div className="w-px h-8 bg-border hidden sm:block"></div>

            <div className="flex gap-3">
              <a
                href="https://github.com/stevengomez25"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass border border-border/30 hover:bg-primary/20 hover:border-primary/50 transition-all group backdrop-blur-md"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/steven-gómez-49aa87236"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass border border-border/30 hover:bg-primary/20 hover:border-primary/50 transition-all group backdrop-blur-md"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:stevengdeveloper@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass border border-border/30 hover:bg-primary/20 hover:border-primary/50 transition-all group backdrop-blur-md"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://wa.me/573164187146"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass border border-border/30 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all group backdrop-blur-md"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-[#25D366] transition-colors" />
              </a>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <a href="#about" className="animate-float block p-2 rounded-full glass hover:bg-primary/10 transition-colors backdrop-blur-md">
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;