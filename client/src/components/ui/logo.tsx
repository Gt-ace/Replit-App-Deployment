import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-purple-400 flex items-center justify-center">
      <motion.span 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="font-bold text-white"
      >
        N
      </motion.span>
    </div>
  );
}
