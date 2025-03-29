import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ComparisonCardProps {
  title: string;
  items: string[];
  type: "negative" | "feature" | "positive";
  icon: ReactNode;
}

export default function ComparisonCard({
  title,
  items,
  type,
  icon
}: ComparisonCardProps) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getIconWrapperColor = () => {
    switch (type) {
      case "negative":
        return "bg-red-500";
      case "feature":
      case "positive":
        return "bg-gradient-to-r from-primary to-purple-400";
      default:
        return "bg-primary";
    }
  };

  return (
    <motion.div 
      className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors"
      variants={item}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="text-muted-foreground space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <div 
              className={`w-5 h-5 rounded-full ${getIconWrapperColor()} flex items-center justify-center flex-shrink-0 mt-0.5`}
            >
              {icon}
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
