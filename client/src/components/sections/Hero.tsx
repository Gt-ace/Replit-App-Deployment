import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-0 right-0 opacity-70 w-3/4 h-full">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path 
            fill="hsl(var(--primary))" 
            d="M44.5,-63.4C58,-54.7,69.3,-41.7,76.5,-26.3C83.7,-10.9,86.8,7,83.2,23.9C79.7,40.8,69.4,56.7,55.2,65.5C40.9,74.3,22.7,76.1,4.8,72.5C-13.1,68.9,-30.6,59.9,-43.8,48.1C-57,36.3,-65.8,21.7,-69,5.5C-72.1,-10.7,-69.6,-28.6,-60.1,-40.5C-50.7,-52.4,-34.3,-58.3,-19.3,-65.2C-4.4,-72,10.1,-79.7,24.9,-77.1C39.7,-74.5,54.9,-61.6,44.5,-63.4Z" 
            transform="translate(100 100)"
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your AI-Powered
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent block">
              Design Assistant
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            Transform your creative ideas into stunning visual assets in seconds
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-purple-400 hover:opacity-90 transition-opacity"
            >
              Try Free Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-border hover:bg-background/80 transition-colors"
            >
              See How It Works
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
