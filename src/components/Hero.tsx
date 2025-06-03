
import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight, Play, Tv } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden bg-hero-pattern">
      {/* Animated scan line */}
      <div className="scan-line"></div>
      
      {/* Noise texture */}
      <div className="noise-bg"></div>

      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyber-accent1 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyber-accent2 opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative space-y-6">
            <div className="inline-block bg-cyber-dark border border-cyber-accent2 border-opacity-40 px-4 py-1 rounded-full text-sm font-mono">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-cyber-accent3 mr-2 animate-pulse"></span>
                <span className="text-cyber-accent2">AI Web Tools - Advanced AI Video Analysis</span>
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-cyber-accent2 text-glow">Video Second-by-Second</span>
              <br />
              <span className="text-cyber-text">Analysis GPT</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-cyber-accent1">by AI Web Tools</span>
            </h1>
            
            <p className="text-xl text-cyber-text opacity-80">
              The most advanced AI tool for video analysis. Break videos into one-second clips for deep visual frame by frame analysis. Perfect for AI researchers, developers, and fine-tuning VLM models.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="cyber-button bg-cyber-accent1 bg-opacity-80 hover:bg-opacity-100 shadow-neon-pink"
                asChild
              >
                <a href="https://chatgpt.com/g/g-67ef3e7baf8481918c60bd6fbded49da-video-second-by-second-analysis-gpt" target="_blank" rel="noopener noreferrer" title="Try AI Video Analysis Tool">
                  <Play className="mr-2 h-4 w-4" />
                  Try AI Tool Now
                  <MoveRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="cyber-button border-cyber-accent2 hover:border-cyber-accent2"
                asChild
              >
                <a href="#how-it-works" title="How AI Video Analysis Works">
                  <Tv className="mr-2 h-4 w-4" />
                  How AI Tools Work
                </a>
              </Button>
            </div>
            
            <div className="text-sm font-mono text-cyber-text opacity-70 pt-4">
              <span className="inline-flex items-center">
                <span className="w-1 h-1 bg-cyber-accent3 mr-2"></span>
                Harnessing the power of OpenAI's advanced vision models combined with Python frame-by-frame extraction | AI Web Tools Platform
              </span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="cyber-panel p-2">
            <div className="relative rounded-lg overflow-hidden border-2 border-cyber-accent2 border-opacity-30">
              {/* VHS tape effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-accent2 to-transparent opacity-10 pointer-events-none"></div>
              
              <img 
                src="https://ideogram.ai/assets/image/lossless/response/764zva-wSOaUNOVMBd1E7Q"
                alt="Video Analysis GPT"
                className="w-full h-full object-cover"
              />
              
              {/* Scan line effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-bg opacity-40 pointer-events-none"></div>
              
              {/* Video control interface */}
              <div className="absolute bottom-0 left-0 right-0 bg-cyber-bg bg-opacity-80 backdrop-blur-sm p-3 border-t border-cyber-accent2 border-opacity-30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-cyber-dark flex items-center justify-center border border-cyber-accent2 border-opacity-50">
                      <Play className="h-3 w-3 text-cyber-accent2" />
                    </div>
                    <div className="h-1 w-32 bg-cyber-dark rounded-full overflow-hidden">
                      <div className="h-full w-[60%] bg-gradient-to-r from-cyber-accent1 to-cyber-accent2"></div>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-cyber-accent2">0:05 / 0:10</div>
                </div>
              </div>
              
              {/* Frame markers */}
              <div className="absolute bottom-14 left-4 right-4 flex justify-between pointer-events-none">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex flex-col items-center">
                    <div className="h-4 w-px bg-cyber-accent2"></div>
                    <div className="text-xs font-mono text-cyber-accent2 mt-1">SEC {num}</div>
                  </div>
                ))}
              </div>
              
              {/* Status indicator */}
              <div className="absolute top-3 right-3 flex items-center bg-cyber-dark bg-opacity-80 px-2 py-1 rounded-md border border-cyber-accent2 border-opacity-40">
                <div className="w-2 h-2 rounded-full bg-cyber-accent3 mr-2 animate-pulse"></div>
                <span className="text-xs font-mono text-cyber-accent2">ANALYZING</span>
              </div>
            </div>
          </div>
          
          {/* Floating frame indicators */}
          <div className="absolute -top-6 -left-6 bg-cyber-dark border border-cyber-accent1 border-opacity-40 p-2 rounded-md text-xs font-mono text-cyber-accent1 shadow-neon-pink animate-float">
            SECOND 1: ANALYZING
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-cyber-dark border border-cyber-accent2 border-opacity-40 p-2 rounded-md text-xs font-mono text-cyber-accent2 shadow-neon animate-float" style={{animationDelay: "1s"}}>
            5 SUBFRAMES EXTRACTED
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
