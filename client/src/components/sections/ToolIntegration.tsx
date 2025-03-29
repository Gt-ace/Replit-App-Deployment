import IntegrationIcon from "@/components/ui/integration-icon";
import { motion } from "framer-motion";
import { Palette, Image, FileText, Calendar, Mail, MessageSquare } from "lucide-react";

export default function ToolIntegration() {
  const integrationTools = [
    { icon: <Palette /> },
    { icon: <Image /> },
    { icon: <FileText /> },
    { icon: <Calendar /> },
    { icon: <Mail /> },
    { icon: <MessageSquare /> }
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
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
            Seamless Tool{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Integration
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Works perfectly with your favorite design and productivity tools
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-3 md:grid-cols-6 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {integrationTools.map((tool, index) => (
            <motion.div key={index} variants={item}>
              <IntegrationIcon icon={tool.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
