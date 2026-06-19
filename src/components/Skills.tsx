import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Arrays reordenados para dejar las 3 más estratégicas al inicio de cada categoría
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", percentage: 88 },
      { name: "TypeScript", percentage: 85 },
      { name: "Next.js", percentage: 82 },
      { name: "Angular", percentage: 80 },
      { name: "JavaScript", percentage: 90 },
      { name: "TailwindCSS", percentage: 88 },
      { name: "Bootstrap", percentage: 82 },
      { name: "Vite", percentage: 78 },
      { name: "HTML5", percentage: 90 },
      { name: "CSS3", percentage: 88 }
    ],
  },
  {
    title: "Backend & DBs",
    skills: [
      { name: "Node.js", percentage: 85 },
      { name: "Spring Boot", percentage: 80 },
      { name: "PostgreSQL", percentage: 80 },
      { name: "Express.js", percentage: 84 },
      { name: "Python", percentage: 76 },
      { name: "PHP", percentage: 78 },
      { name: "REST APIs", percentage: 88 },
      { name: "JWT", percentage: 85 },
      { name: "Electron", percentage: 79 },
      { name: "MongoDB", percentage: 82 },
      { name: "MySQL", percentage: 84 },
      { name: "Prisma", percentage: 81 },
      { name: "Supabase", percentage: 78 },
      { name: "NoSQL", percentage: 82 }
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "CI/CD", percentage: 80 },
      { name: "GCP", percentage: 78 },
      { name: "GitHub", percentage: 86 },
      { name: "Git", percentage: 88 },
      { name: "Linux", percentage: 80 },
      { name: "PowerShell", percentage: 75 },
      { name: "Terminal", percentage: 82 },
      { name: "Postman", percentage: 85 },
      { name: "ngrok", percentage: 78 },
      { name: "JMeter", percentage: 76 },
      { name: "GoDaddy DNS", percentage: 84 }
    ],
  },
  {
    title: "Data & Arch",
    skills: [
      { name: "GoHighLevel", percentage: 88 },
      { name: "ElevenLabs", percentage: 85 },
      { name: "Hexagonal Arch.", percentage: 80 },
      { name: "Power Automate", percentage: 80 },
      { name: "Pandas", percentage: 76 },
      { name: "Excel / Macros", percentage: 88 },
      { name: "SharePoint", percentage: 78 },
      { name: "Salesforce", percentage: 82 },
      { name: "TimelyBill", percentage: 80 },
      { name: "Agile (SCRUM)", percentage: 85 },
      { name: "TDD", percentage: 82 },
      { name: "@nut-tree-fork/nut-js", percentage: 78 }
    ],
  },
];

const SkillRing = ({ skillName, percentage, index }) => {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="relative w-32 h-32 flex items-center justify-center bg-gradient-card rounded-full border border-border/50 group-hover:border-primary/30 group-hover:glow-soft transition-all cursor-default">
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            className="text-border/30"
          />
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.5, 
              delay: 0.2 + index * 0.05, 
              ease: "easeOut" 
            }}
            className="text-primary"
            strokeLinecap="round"
          />
        </svg>
        <span className="relative z-10 text-[11px] font-semibold text-center px-3 leading-tight break-words max-w-full">
          {skillName}
        </span>
      </div>
      <span className="text-sm font-medium text-muted-foreground">
        {percentage}%
      </span>
    </motion.div>
  );
};

// Nuevo subcomponente para manejar la expansión por categoría
const SkillCategory = ({ category, categoryIndex }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleSkills = isExpanded ? category.skills : category.skills.slice(0, 3);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
      className="text-center flex flex-col items-center"
    >
      <h3 className="text-2xl font-semibold mb-8 text-primary">{category.title}</h3>
      
      <motion.div layout className="flex flex-wrap justify-center gap-6">
        <AnimatePresence mode="popLayout">
          {visibleSkills.map((skillObj, skillIndex) => (
            <SkillRing 
              key={skillObj.name} 
              skillName={skillObj.name}
              percentage={skillObj.percentage}
              index={skillIndex} 
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {category.skills.length > 3 && (
        <motion.button
          layout
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 rounded-full border border-transparent hover:border-border/50 bg-secondary/10 hover:bg-secondary/30"
        >
          {isExpanded ? "Show Less" : `Show ${category.skills.length - 3} More`}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      )}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I've worked with and continue to learn. Always expanding this list.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12 w-full items-start">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} categoryIndex={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground bg-secondary/30 inline-block px-6 py-3 rounded-full border border-border/50">
            <span className="text-primary font-semibold mr-2">Currently learning:</span> 
            Software Architecture (SQL/NoSQL), Project Management, Planning & Execution
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;