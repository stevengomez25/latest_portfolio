import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "TailwindCSS", "Vue.js", "HTML/CSS","Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "mySQL", "MongoDB", "REST APIs","CRUD","JWT","Bcrypt"],
  },
  {
    title: "Tools & Others",
    skills: ["Git","Github","Postman","JMeter","VSCode","Terminal","n8n", "Linux", "Figma"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background relative">
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
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I've worked with and continue to learn. Always expanding this list.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-4 py-2 rounded-lg bg-gradient-card border border-border/50 text-sm font-medium hover:border-primary/30 hover:glow-soft transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
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
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            <span className="text-primary">Currently learning:</span> Java, SQL reinforcement, tRPC.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
