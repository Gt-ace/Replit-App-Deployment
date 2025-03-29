import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IntegrationIconProps {
  icon: ReactNode;
}

export default function IntegrationIcon({ icon }: IntegrationIconProps) {
  return (
    <motion.div 
      className="bg-card p-4 rounded-xl flex items-center justify-center hover:border-primary border border-border transition-colors"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-muted-foreground">
        {icon}
      </div>
    </motion.div>
  );
}
