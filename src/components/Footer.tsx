
import React from "react";
import { Button } from "@/components/ui/button";
import { Film, Phone, Mail, FileText, HelpCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-accent2 border-opacity-30 relative overflow-hidden">
      {/* Scan line effect */}
      <div className="scan-line"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-cyber-accent2 text-xl font-bold tracking-wide text-glow mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-cyber-text hover:text-cyber-accent1 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-cyber-accent2 mr-2 group-hover:bg-cyber-accent1"></span> Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-cyber-text hover:text-cyber-accent1 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-cyber-accent2 mr-2 group-hover:bg-cyber-accent1"></span> How It Works
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-cyber-text hover:text-cyber-accent1 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-cyber-accent2 mr-2 group-hover:bg-cyber-accent1"></span> Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-cyber-accent2 text-xl font-bold tracking-wide text-glow mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+14758008096" className="text-cyber-text hover:text-cyber-accent1 transition-colors duration-200 flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-cyber-accent3" /> (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-cyber-text hover:text-cyber-accent1 transition-colors duration-200 flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-cyber-accent3" /> Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-cyber-accent2 text-xl font-bold tracking-wide text-glow mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-cyber-text hover:text-cyber-accent1 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-cyber-accent2 mr-2 group-hover:bg-cyber-accent1"></span> Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer" className="text-cyber-text hover:text-cyber-accent1 transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-cyber-accent2 mr-2 group-hover:bg-cyber-accent1"></span> Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <Button variant="outline" className="cyber-button group w-full" asChild>
                <a href="https://chatgpt.com/g/g-67ef3e7baf8481918c60bd6fbded49da-video-second-by-second-analysis-gpt" target="_blank" rel="noopener noreferrer">
                  <Film className="mr-2 h-4 w-4 text-cyber-accent2 group-hover:text-cyber-accent1" />
                  <span className="text-black">Use Now</span>
                </a>
              </Button>
              <Button variant="outline" className="cyber-button group w-full" asChild>
                <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer">
                  <span className="text-black">More AI Tools</span>
                </a>
              </Button>
            </div>
            
            <div className="relative">
              <Button
                className="absolute -top-4 -right-4 cyber-button rounded-full w-16 h-16 p-0 flex items-center justify-center hover:animate-glow shadow-neon"
                asChild
              >
                <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer">
                  <span className="text-xs text-black">More AI<br/>Tools</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-cyber-accent2 border-opacity-30 text-center">
          <p className="text-cyber-text text-sm opacity-80 font-mono">
            &copy; {new Date().getFullYear()} AI Web Tools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
