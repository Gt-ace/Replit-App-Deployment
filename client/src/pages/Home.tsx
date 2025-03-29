import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Outputs from "@/components/sections/Outputs";
import Transformation from "@/components/sections/Transformation";
import Pricing from "@/components/sections/Pricing";
import ToolIntegration from "@/components/sections/ToolIntegration";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

export default function Home() {
  // Scroll to section when clicking on nav links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Handle initial hash if present
    handleHashChange();
    
    // Add listener for hash changes
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <Outputs />
        <Transformation />
        <Pricing />
        <ToolIntegration />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
