import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
}

export default function PricingCard({
  title,
  description,
  price,
  period,
  features,
  buttonText,
  isPopular = false
}: PricingCardProps) {
  return (
    <motion.div 
      className={`
        ${isPopular 
          ? "bg-gradient-to-br from-primary/10 to-purple-400/10 border-primary shadow-[0_0_20px_rgba(139,92,246,0.3)] relative transform md:scale-105" 
          : "bg-background border-border hover:border-primary"
        } 
        p-6 rounded-xl border transition-colors
      `}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          POPULAR
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-muted-foreground">{period}</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className={`flex items-start gap-2 ${!feature.included && "text-muted-foreground/50"}`}>
            {feature.included ? (
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-white" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                <X className="h-3 w-3 text-muted-foreground" />
              </div>
            )}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full ${
          isPopular 
            ? "bg-gradient-to-r from-primary to-purple-400 hover:opacity-90 transition-opacity" 
            : "bg-background border border-primary text-foreground hover:bg-background/80"
        }`}
        variant={isPopular ? "default" : "outline"}
      >
        {buttonText}
      </Button>
    </motion.div>
  );
}
