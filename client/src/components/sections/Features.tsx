import FeatureCard from "@/components/ui/feature-card";
import { motion } from "framer-motion";
import { Upload, Lightbulb, ImagePlus } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Upload Brief",
      description: "Describe your vision or upload references to get started",
      icon: <Upload />,
    },
    {
      title: "Generate Designs",
      description: "Our AI transforms your ideas into professional mockups",
      icon: <Lightbulb />,
    },
    {
      title: "Refine Outputs",
      description: "Easily make adjustments to get exactly what you need",
      icon: <ImagePlus />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Unleash Your{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Creativity
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Our powerful AI tools help you design faster and more efficiently than ever before
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
