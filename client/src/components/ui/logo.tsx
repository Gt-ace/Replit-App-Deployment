import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="w-10 h-10 relative">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary to-purple-400"
        animate={{ 
          rotate: [0, 10, 0, -10, 0], 
          scale: [1, 1.05, 1, 1.05, 1] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-purple-300 opacity-70"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <motion.div 
        className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-indigo-300 opacity-70"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      
      {/* Logo letter */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="font-bold text-xl text-white"
          animate={{ 
            textShadow: [
              "0 0 5px rgba(255,255,255,0.5)",
              "0 0 15px rgba(255,255,255,0.8)",
              "0 0 5px rgba(255,255,255,0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          N
        </motion.span>
      </motion.div>
    </div>
  );
}
