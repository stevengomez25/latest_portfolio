import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow (responsive) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-28 sm:w-80 sm:h-56 md:w-[600px] md:h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm actively looking for my first opportunity in the industry.
            Whether you have a junior role, an internship, or just want to chat
            about tech — I'd love to hear from you.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span>stevengdeveloper@gmail.com</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Bucaramanga, Colombia</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="https://wa.me/573164187146?text=I'm%20interested%20in%20hiring%20your%20services%20as%20a%20Developer!" target="blank">
              <Button size="lg" className="glow-primary text-lg px-8 group">
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Me a Message
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            I typically respond within 24 hours. Let's build something great
            together!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
