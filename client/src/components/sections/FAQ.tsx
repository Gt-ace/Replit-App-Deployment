import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How does the AI design process work?",
      answer: "Our AI design process uses advanced machine learning algorithms to understand your design brief and generate multiple design options based on your requirements. You can then refine the outputs with simple text commands or direct editing."
    },
    {
      question: "What types of designs can I create?",
      answer: "You can create a wide range of designs including social media graphics, website mockups, logos, illustrations, presentations, marketing materials, and more. Our AI is versatile and continuously learning new design styles and formats."
    },
    {
      question: "Do I own the designs I create?",
      answer: "Yes, you retain full ownership of all designs created using our platform. You can use them for commercial purposes without attribution. Please refer to our Terms of Service for complete details on licensing and usage rights."
    }
  ];

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
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Find answers to common questions about our AI design assistant
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary transition data-[state=open]:border-primary"
                >
                  <AccordionTrigger className="text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
