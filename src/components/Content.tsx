
import React from "react";
import { FileText, Video, Film, Clock } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const Content = () => {
  return (
    <section id="content" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Video Analysis Content</h2>
          <p className="text-cyber-text opacity-80 max-w-2xl mx-auto">
            Detailed breakdowns and insights from our advanced video analysis technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Content Card 1 */}
          <div className="cyber-panel p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-accent1/10 to-transparent opacity-70"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Video className="h-8 w-8 text-cyber-accent1" />
                <h3 className="text-xl font-bold ml-3 text-cyber-accent2">Frame Detection</h3>
              </div>
              <p className="text-cyber-text mb-6">
                Our AI system breaks down videos frame by frame, detecting objects, people, text, and actions with remarkable precision.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-cyber-accent1 bg-opacity-20 flex items-center justify-center mt-1 mr-3">
                    <div className="h-2 w-2 rounded-full bg-cyber-accent1"></div>
                  </div>
                  <span className="text-cyber-text">Object recognition with 98% accuracy</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-cyber-accent1 bg-opacity-20 flex items-center justify-center mt-1 mr-3">
                    <div className="h-2 w-2 rounded-full bg-cyber-accent1"></div>
                  </div>
                  <span className="text-cyber-text">Motion tracking across consecutive frames</span>
                </li>
              </ul>
              <Button variant="outline" className="text-cyber-accent1 border-cyber-accent1 hover:bg-cyber-accent1 hover:bg-opacity-10">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Content Card 2 */}
          <div className="cyber-panel p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-accent2/10 to-transparent opacity-70"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-cyber-accent2" />
                <h3 className="text-xl font-bold ml-3 text-cyber-accent2">Temporal Analysis</h3>
              </div>
              <p className="text-cyber-text mb-6">
                Second-by-second breakdown of videos reveals patterns and insights that are impossible to detect with the naked eye.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-cyber-accent2 bg-opacity-20 flex items-center justify-center mt-1 mr-3">
                    <div className="h-2 w-2 rounded-full bg-cyber-accent2"></div>
                  </div>
                  <span className="text-cyber-text">Identifies key moments and transitions</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-cyber-accent2 bg-opacity-20 flex items-center justify-center mt-1 mr-3">
                    <div className="h-2 w-2 rounded-full bg-cyber-accent2"></div>
                  </div>
                  <span className="text-cyber-text">Tracks narrative structure and pacing</span>
                </li>
              </ul>
              <Button variant="outline" className="text-cyber-accent2 border-cyber-accent2 hover:bg-cyber-accent2 hover:bg-opacity-10">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Content Card 3 */}
          <div className="cyber-panel p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-accent3/10 to-transparent opacity-70"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Film className="h-8 w-8 text-cyber-accent3" />
                <h3 className="text-xl font-bold ml-3 text-cyber-accent2">Visual Patterns</h3>
              </div>
              <p className="text-cyber-text mb-6">
                Discover recurring visual elements, color schemes, and compositional techniques used throughout your video content.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-cyber-accent3 bg-opacity-20 flex items-center justify-center mt-1 mr-3">
                    <div className="h-2 w-2 rounded-full bg-cyber-accent3"></div>
                  </div>
                  <span className="text-cyber-text">Color palette analysis and mood mapping</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-cyber-accent3 bg-opacity-20 flex items-center justify-center mt-1 mr-3">
                    <div className="h-2 w-2 rounded-full bg-cyber-accent3"></div>
                  </div>
                  <span className="text-cyber-text">Composition and framing evaluation</span>
                </li>
              </ul>
              <Button variant="outline" className="text-cyber-accent3 border-cyber-accent3 hover:bg-cyber-accent3 hover:bg-opacity-10">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Content Card 4 */}
          <div className="cyber-panel p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-accent2/10 to-transparent opacity-70"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-cyber-accent2" />
                <h3 className="text-xl font-bold ml-3 text-cyber-accent2">Detailed Reports</h3>
              </div>
              <p className="text-cyber-text mb-6">
                Comprehensive analysis reports with actionable insights to improve your video content and production quality.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-cyber-accent2 bg-opacity-20 flex items-center justify-center mt-1 mr-3">
                    <div className="h-2 w-2 rounded-full bg-cyber-accent2"></div>
                  </div>
                  <span className="text-cyber-text">Exportable second-by-second breakdowns</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-cyber-accent2 bg-opacity-20 flex items-center justify-center mt-1 mr-3">
                    <div className="h-2 w-2 rounded-full bg-cyber-accent2"></div>
                  </div>
                  <span className="text-cyber-text">Suggested improvements and enhancements</span>
                </li>
              </ul>
              <Button variant="outline" className="text-cyber-accent2 border-cyber-accent2 hover:bg-cyber-accent2 hover:bg-opacity-10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
