import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Outputs() {
  return (
    <section id="outputs" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            High-Resolution{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Outputs
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Generate professional-quality designs ready for your projects
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full h-auto rounded-lg overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="High resolution design output" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Create stunning visuals in seconds</h3>
            <p className="text-muted-foreground mb-6">
              Our AI generates high-quality design assets that are ready to use in your projects. 
              Export in multiple formats with pixel-perfect precision.
            </p>
            <Button 
              className="w-fit bg-gradient-to-r from-primary to-purple-400 hover:opacity-90 transition-opacity"
            >
              Try Now
            </Button>
          </motion.div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-8">
          <motion.div 
            className="flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Real-Time Collaboration</h3>
            <p className="text-muted-foreground mb-6">
              Work together with your team in real-time. Share, comment, and iterate on designs 
              to achieve the perfect result.
            </p>
            <Button 
              className="w-fit bg-gradient-to-r from-primary to-purple-400 hover:opacity-90 transition-opacity"
            >
              Learn More
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full h-auto rounded-lg overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Real-time collaboration platform" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
