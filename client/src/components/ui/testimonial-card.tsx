import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
}

export default function TestimonialCard({
  name,
  role,
  image,
  content
}: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-background p-6 rounded-xl border border-border hover:border-primary transition-colors"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="w-12 h-12 border-2 border-primary/20">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4">{content}</p>
      
      <div className="flex text-primary">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
      </div>
    </motion.div>
  );
}
