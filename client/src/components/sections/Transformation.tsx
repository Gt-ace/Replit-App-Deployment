import ComparisonCard from "@/components/ui/comparison-card";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function Transformation() {
  const withoutSolution = [
    "Hours spent on manual design work",
    "High costs for professional designers",
    "Limited iterations due to time constraints",
    "Difficult to communicate visual ideas"
  ];

  const features = [
    "Smart AI-powered design generation",
    "Multiple export formats (PNG, JPG, SVG)",
    "Unlimited design variations",
    "Collaboration tools for teams",
    "Brand style guide integration"
  ];

  const withSolution = [
    "Generate designs in seconds, not hours",
    "Fraction of the cost of traditional design",
    "Explore hundreds of variations quickly",
    "Instant visualization of creative ideas"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Transforming Imagination into{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Reality
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            See how our AI design assistant can help you achieve your creative goals
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <ComparisonCard 
            title="Without Our Solution"
            items={withoutSolution}
            type="negative"
            icon={<X className="h-3 w-3 text-white" />}
          />
          
          <ComparisonCard 
            title="Features We Provide"
            items={features}
            type="feature"
            icon={<Check className="h-3 w-3 text-white" />}
          />
          
          <ComparisonCard 
            title="With Our Solution"
            items={withSolution}
            type="positive"
            icon={<Check className="h-3 w-3 text-white" />}
          />
        </motion.div>
      </div>
    </section>
  );
}
