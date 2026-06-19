import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", percentage: 88 },
      { name: "Angular", percentage: 80 },
      { name: "TypeScript", percentage: 85 },
      { name: "JavaScript", percentage: 90 },
      { name: "TailwindCSS", percentage: 88 },
      { name: "Bootstrap", percentage: 82 },
      { name: "Vite", percentage: 78 },
      { name: "Next.js", percentage: 82 },
      { name: "HTML5", percentage: 90 },
      { name: "CSS3", percentage: 88 }
    ],
  },
  {
    title: "Backend & DBs",
    skills: [
      { name: "Node.js", percentage: 85 },
      { name: "Express.js", percentage: 84 },
      { name: "Spring Boot", percentage: 80 },
      { name: "Python", percentage: 76 },
      { name: "PHP", percentage: 78 },
      { name: "REST APIs", percentage: 88 },
      { name: "JWT", percentage: 85 },
      { name: "Electron", percentage: 79 },
      { name: "MongoDB", percentage: 82 },
      { name: "PostgreSQL", percentage: 80 },
      { name: "MySQL", percentage: 84 },
      { name: "Prisma", percentage: 81 },
      { name: "Supabase", percentage: 78 },
      { name: "NoSQL", percentage: 82 }
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Git", percentage: 88 },
      { name: "GitHub", percentage: 86 },
      { name: "Linux", percentage: 80 },
      { name: "PowerShell", percentage: 75 },
      { name: "Terminal", percentage: 82 },
      { name: "Postman", percentage: 85 },
      { name: "ngrok", percentage: 78 },
      { name: "JMeter", percentage: 76 },
      { name: "GCP", percentage: 78 },
      { name: "CI/CD", percentage: 80 },
      { name: "GoDaddy DNS", percentage: 84 }
    ],
  },
  {
    title: "Data & Automation",
    skills: [
      { name: "Pandas", percentage: 76 },
      { name: "Power Automate", percentage: 80 },
      { name: "Excel / Macros", percentage: 88 },
      { name: "SharePoint", percentage: 78 },
      { name: "Salesforce", percentage: 82 },
      { name: "TimelyBill", percentage: 80 },
      { name: "ElevenLabs", percentage: 85 },
      { name: "GoHighLevel", percentage: 88 },
      { name: "Agile (SCRUM)", percentage: 85 },
      { name: "TDD", percentage: 82 },
      { name: "Hexagonal Arch.", percentage: 80 },
      { name: "@nut-tree-fork/nut-js", percentage: 78 }
    ],
  },
];

// Subcomponente sin números aleatorios, recibe datos fijos por props
const SkillRing = ({ skillName, percentage, index, categoryIndex }) => {
  // Matemáticas para el SVG circular (ajustado para w-32 h-32)
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="relative w-32 h-32 flex items-center justify-center bg-gradient-card rounded-full border border-border/50 group-hover:border-primary/30 group-hover:glow-soft transition-all cursor-default">
        {/* Anillo SVG */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          {/* Círculo de fondo */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            className="text-border/30"
          />
          {/* Círculo de progreso animado */}
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
              delay: categoryIndex * 0.1 + index * 0.05 + 0.3, 
              ease: "easeOut" 
            }}
            className="text-primary"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Nombre de la Skill centrado en el anillo */}
        <span className="relative z-10 text-[11px] font-semibold text-center px-3 leading-tight break-words max-w-full">
          {skillName}
        </span>
      </div>

      {/* Etiqueta de porcentaje fijo debajo */}
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: categoryIndex * 0.1 + index * 0.05 + 0.8 }}
        className="text-sm font-medium text-muted-foreground"
      >
        {percentage}%
      </motion.span>
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

        {/* Grid expandido a 4 columnas */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12 w-full">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="text-center flex flex-col items-center"
            >
              <h3 className="text-2xl font-semibold mb-8 text-primary">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skillObj, skillIndex) => (
                  <SkillRing 
                    key={skillObj.name} 
                    skillName={skillObj.name}
                    percentage={skillObj.percentage}
                    index={skillIndex} 
                    categoryIndex={categoryIndex} 
                  />
                ))}
              </div>
            </motion.div>
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