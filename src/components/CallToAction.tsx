
import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyber-accent1 to-transparent opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-cyber-accent2 to-transparent opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto cyber-panel p-8 relative">
          {/* Glitch effect lines */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-cyber-accent1 opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-cyber-accent2 opacity-70"></div>
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-cyber-accent3 opacity-20"></div>
          
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-cyber-accent2 text-glow">Ready to Analyze Your Video</span>
              <br />
              <span className="text-cyber-accent1 text-glow-pink">One Second at a Time?</span>
            </h2>
            
            <p className="text-xl text-cyber-text opacity-90 max-w-2xl mx-auto">
              Get frame-by-frame insights with our AI-powered analysis tool. 
              Perfect for content creators, researchers, and visual artists.
            </p>
            
            <div className="pt-4 flex justify-center">
              <Button 
                size="lg" 
                className="cyber-button bg-cyber-accent2 bg-opacity-80 hover:bg-opacity-100 shadow-neon text-cyber-bg font-bold"
                asChild
              >
                <a href="https://chatgpt.com/g/g-67ef3e7baf8481918c60bd6fbded49da-video-second-by-second-analysis-gpt" target="_blank" rel="noopener noreferrer">
                  Use Video Second-by-Second Analysis GPT 
                  <MoveRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-cyber-text opacity-70 font-mono">
              *Requires ChatGPT Plus subscription
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
