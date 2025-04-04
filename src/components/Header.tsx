
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Film, HelpCircle, FileText, MoreHorizontal } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-bg bg-opacity-90 backdrop-blur-md border-b border-cyber-accent2 border-opacity-30">
      <div className="container mx-auto py-4 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="relative">
              <Film className="h-8 w-8 text-cyber-accent2 animate-pulse" />
              <div className="absolute inset-0 bg-cyber-accent2 opacity-20 blur-md rounded-full"></div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold tracking-wider text-cyber-accent2 text-glow">
                VIDEO SECOND-BY-SECOND ANALYSIS GPT
              </h1>
              <p className="text-xs text-cyber-text opacity-80 font-mono">
                Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyber-accent1 hover:underline">AiWebTools.Ai</a>
              </p>
            </div>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-3 mt-3 md:mt-0">
            <Button variant="ghost" className="cyber-button group" asChild>
              <a href="https://chatgpt.com/g/g-67ef3e7baf8481918c60bd6fbded49da-video-second-by-second-analysis-gpt" target="_blank" rel="noopener noreferrer">
                <Film className="mr-2 h-4 w-4 text-cyber-accent2 group-hover:text-cyber-accent1" />
                <span>Use Now</span>
              </a>
            </Button>
            
            <Button variant="ghost" className="cyber-button group" asChild>
              <a href="#faq">
                <HelpCircle className="mr-2 h-4 w-4 text-cyber-accent2 group-hover:text-cyber-accent1" />
                <span>FAQ</span>
              </a>
            </Button>
            
            <Button variant="ghost" className="cyber-button group" asChild>
              <a href="#disclaimer">
                <FileText className="mr-2 h-4 w-4 text-cyber-accent2 group-hover:text-cyber-accent1" />
                <span>Disclaimer</span>
              </a>
            </Button>
            
            <Button variant="ghost" className="cyber-button group" asChild>
              <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer">
                <MoreHorizontal className="mr-2 h-4 w-4 text-cyber-accent2 group-hover:text-cyber-accent1" />
                <span>More AI Tools</span>
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
