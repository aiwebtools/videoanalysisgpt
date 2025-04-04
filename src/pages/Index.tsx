
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-bg relative">
      {/* Background noise effect */}
      <div className="noise-bg"></div>
      
      {/* Moving scan line */}
      <div className="scan-line"></div>
      
      <Header />
      
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
        <Disclaimer />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
