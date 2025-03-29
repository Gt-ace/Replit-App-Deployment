import { useState } from "react";
import PricingCard from "@/components/ui/pricing-card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      title: "Basic",
      description: "For individuals getting started",
      price: isAnnual ? "$7.99" : "$9.99",
      period: "/month",
      features: [
        { text: "50 designs per month", included: true },
        { text: "Basic export formats", included: true },
        { text: "5 variations per design", included: true },
        { text: "Team collaboration", included: false },
        { text: "Brand kit integration", included: false }
      ],
      buttonText: "Choose Basic",
      isPopular: false
    },
    {
      title: "Pro",
      description: "For professionals and small teams",
      price: isAnnual ? "$23.99" : "$29.99",
      period: "/month",
      features: [
        { text: "Unlimited designs", included: true },
        { text: "All export formats", included: true },
        { text: "20 variations per design", included: true },
        { text: "Team collaboration (up to 5)", included: true },
        { text: "Brand kit integration", included: true }
      ],
      buttonText: "Choose Pro",
      isPopular: true
    },
    {
      title: "Enterprise",
      description: "For large teams and organizations",
      price: isAnnual ? "$79.99" : "$99.99",
      period: "/month",
      features: [
        { text: "Unlimited everything", included: true },
        { text: "Priority processing", included: true },
        { text: "Unlimited variations", included: true },
        { text: "Unlimited team members", included: true },
        { text: "Dedicated account manager", included: true }
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Affordable Plans for{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Every
            </span>{" "}
            Need
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your design needs
          </p>
        </motion.div>

        <div className="flex justify-center items-center gap-4 mb-16">
          <span className="text-muted-foreground">Monthly</span>
          <Switch 
            checked={isAnnual} 
            onCheckedChange={setIsAnnual} 
            className="data-[state=checked]:bg-primary"
          />
          <span className="text-muted-foreground">
            Annual <span className="text-xs text-primary">Save 20%</span>
          </span>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              buttonText={plan.buttonText}
              isPopular={plan.isPopular}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
