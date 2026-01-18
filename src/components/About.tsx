import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Heart } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Self-Taught & Hungry",
    description: "I've spent countless hours learning, building, and breaking things. Every bug I've fixed taught me something new.",
  },
  {
    icon: Lightbulb,
    title: "Quick Learner",
    description: "Give me a new technology, and I'll dive deep. I thrive on understanding how things work from the ground up.",
  },
  {
    icon: Rocket,
    title: "Bias for Action",
    description: "I don't wait for perfect conditions. I ship, iterate, and improve. My projects are proof of that mindset.",
  },
  {
    icon: Heart,
    title: "Genuine Passion",
    description: "This isn't just a career path — it's what I love doing. I code on weekends because I genuinely enjoy it.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Give Me a <span className="text-gradient">Chance?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I know my resume might not have big company names. What it does have is a trail of projects, 
            late-night debugging sessions, and an unwavering commitment to becoming better every single day. 
            Here's what I bring to the table:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl glass max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground italic">
            "Everyone starts somewhere. I'm just looking for that first opportunity to prove myself. 
            Once I'm in, I'll work harder than anyone to deliver results."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
