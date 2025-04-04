
import React from "react";
import { Film, Layers, Search, Zap, Clock, FileText } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Film />,
      title: "Video Segmentation",
      description: "Breaks any video into one-second segments for detailed analysis."
    },
    {
      icon: <Layers />,
      title: "Frame Extraction",
      description: "Extracts 5 color subframes from each second for deep visual inspection."
    },
    {
      icon: <Search />,
      title: "Visual Analysis",
      description: "Utilizes ChatGPT vision for comprehensive analysis of visual content."
    },
    {
      icon: <Zap />,
      title: "VLM Fine-Tuning",
      description: "Perfect for training data creation and fine-tuning visual language models."
    },
    {
      icon: <Clock />,
      title: "Second-by-Second Approach",
      description: "Methodical analysis ensures no detail is missed throughout the entire video."
    },
    {
      icon: <FileText />,
      title: "Detailed Documentation",
      description: "Comprehensive reports for each second with timestamps and visual markers."
    }
  ];

  return (
    <section className="py-16 relative" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Key Features</h2>
          <p className="text-cyber-text opacity-80 max-w-2xl mx-auto">
            Our advanced AI system breaks down videos frame-by-frame for comprehensive analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="cyber-panel p-6 hover:shadow-neon transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="bg-cyber-dark p-3 rounded-full inline-block mb-4 border border-cyber-accent2 border-opacity-30">
                  <div className="text-cyber-accent2">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-cyber-accent2">
                  {feature.title}
                </h3>
                
                <p className="text-cyber-text opacity-80 mb-auto">
                  {feature.description}
                </p>
                
                <div className="h-2 w-full bg-cyber-dark mt-4 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyber-accent1 to-cyber-accent2 animate-pulse"
                    style={{width: `${80 + Math.random() * 20}%`}}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
