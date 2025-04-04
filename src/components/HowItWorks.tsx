
import React from "react";
import { Upload, Scissors, Scan, Eye, HelpCircle, RefreshCw } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Upload Video",
      description: "Upload any video file you want to analyze in detail."
    },
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Segmentation",
      description: "The AI breaks your video into 5-second segments, then into one-second clips."
    },
    {
      icon: <Scan className="h-6 w-6" />,
      title: "Frame Extraction",
      description: "Each second is broken into 5 color subframes for detailed visual analysis."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Visual Analysis",
      description: "AI examines each frame identifying people, objects, actions, and details."
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: "Q&A Interaction",
      description: "Ask specific questions about any frame for deeper understanding."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Complete Process",
      description: "The process repeats until the entire video has been analyzed second-by-second."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 relative bg-cyber-bg bg-cyber-grid">
      <div className="absolute inset-0 bg-cyber-bg bg-opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="text-cyber-text opacity-80 max-w-2xl mx-auto">
            Our AI follows a specific methodology to analyze your videos with precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="cyber-panel p-6 hover:shadow-neon transition-all duration-300 relative overflow-hidden group"
            >
              {/* Step number */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-cyber-dark rounded-full flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                <span className="text-cyber-accent2 font-bold text-2xl">{index + 1}</span>
              </div>
              
              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-cyber-dark p-3 rounded-full inline-block border border-cyber-accent2 border-opacity-30 text-cyber-accent2">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-cyber-accent2">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-cyber-text opacity-80">
                  {step.description}
                </p>
                
                {/* Connection line to next step */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-cyber-accent2 border-opacity-50"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Video timeline visualization */}
        <div className="mt-20 cyber-panel p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyber-accent2 opacity-5 pointer-events-none"></div>
          
          <h3 className="text-2xl font-bold text-cyber-accent2 mb-6 text-center">
            Second-by-Second Analysis Visualization
          </h3>
          
          <div className="w-full h-16 bg-cyber-dark rounded-lg relative mb-12">
            {/* Timeline markers */}
            <div className="absolute inset-0 flex">
              {Array(10).fill(0).map((_, i) => (
                <div key={i} className="flex-1 border-r border-cyber-accent2 border-opacity-30 relative">
                  <div className="absolute bottom-0 left-0 w-full flex flex-col items-center">
                    <div className="h-3 w-px bg-cyber-accent2"></div>
                    <span className="text-xs text-cyber-accent2 mt-1">SEC {i+1}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Current position indicator */}
            <div className="absolute top-0 left-[20%] bottom-0 w-[10%] bg-gradient-to-r from-cyber-accent1 to-cyber-accent2 opacity-70"></div>
            
            {/* Playhead */}
            <div className="absolute top-0 left-[30%] bottom-0 w-1 bg-cyber-accent3 z-10 animate-pulse">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyber-accent3 rounded-full"></div>
            </div>
          </div>
          
          {/* Frame breakdown */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="relative">
                <div className={`aspect-video rounded-md overflow-hidden border-2 ${i === 0 ? 'border-cyber-accent3' : 'border-cyber-accent2 border-opacity-30'}`}>
                  <div className="absolute inset-0 bg-cyber-dark"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-accent1 to-cyber-accent2 opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-cyber-accent2 font-mono">FRAME {i+1}</span>
                  </div>
                </div>
                <div className="mt-2 text-center text-xs text-cyber-text opacity-70 font-mono">
                  {(i * 0.2).toFixed(1)}s
                </div>
              </div>
            ))}
          </div>
          
          {/* Analysis text example */}
          <div className="cyber-panel p-4 font-mono text-sm">
            <div className="text-cyber-accent2 mb-2">// ANALYSIS OUTPUT:</div>
            <div className="text-cyber-text opacity-90 max-h-24 overflow-y-auto scrollbar-none">
              <p className="mb-2">
                {">"} SECOND 3: Frame 2 (0.2s)
              </p>
              <p className="text-cyber-accent3">
                Subject in motion, turning left. Background contains urban environment with 4 pedestrians. 
                Lighting: natural daylight with approx. 70% illumination. 
                Object detected: smartphone in subject's right hand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
