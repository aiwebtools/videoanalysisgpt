
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Film, FileText, MoreHorizontal, Menu, X } from "lucide-react";

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Button variant="ghost" className="cyber-button group w-full md:w-auto justify-start md:justify-center" asChild>
        <a href="https://chatgpt.com/g/g-67ef3e7baf8481918c60bd6fbded49da-video-second-by-second-analysis-gpt" target="_blank" rel="noopener noreferrer" title="Use AI Video Analysis Tool" onClick={() => setMenuOpen(false)}>
          <Film className="mr-2 h-4 w-4 text-cyber-accent2 group-hover:text-cyber-accent1" />
          <span className="text-white">Use AI Tool</span>
        </a>
      </Button>

      <Button variant="ghost" className="cyber-button group w-full md:w-auto justify-start md:justify-center" asChild>
        <a href="#disclaimer" title="AI Tools Disclaimer" onClick={() => setMenuOpen(false)}>
          <FileText className="mr-2 h-4 w-4 text-cyber-accent2 group-hover:text-cyber-accent1" />
          <span className="text-white">Disclaimer</span>
        </a>
      </Button>

      <Button variant="ghost" className="cyber-button group w-full md:w-auto justify-start md:justify-center" asChild>
        <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" title="More AI Web Tools" onClick={() => setMenuOpen(false)}>
          <MoreHorizontal className="mr-2 h-4 w-4 text-cyber-accent2 group-hover:text-cyber-accent1" />
          <span className="text-white">More AI Tools</span>
        </a>
      </Button>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-bg bg-opacity-90 backdrop-blur-md border-b border-cyber-accent2 border-opacity-30">
      <div className="container mx-auto py-3 px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center min-w-0">
            <div className="relative flex-shrink-0">
              <Film className="h-7 w-7 sm:h-8 sm:w-8 text-cyber-accent2 animate-pulse" />
              <div className="absolute inset-0 bg-cyber-accent2 opacity-20 blur-md rounded-full"></div>
            </div>
            <div className="ml-2 sm:ml-3 min-w-0">
              <h1 className="text-sm sm:text-lg md:text-xl font-bold tracking-wider text-cyber-accent2 text-glow truncate">
                VIDEO SECOND-BY-SECOND ANALYSIS GPT
              </h1>
              <p className="text-[10px] sm:text-xs text-cyber-text opacity-80 font-mono truncate">
                Powered by <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="text-cyber-accent1 hover:underline" title="AI Web Tools - Leading AI Tools Platform">AI Web Tools</a> | AIWEBTOOLS.AI
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-3">
            {navLinks}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex-shrink-0 ml-2 p-2 text-cyber-accent2 hover:text-cyber-accent1 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <nav className="md:hidden mt-3 pb-2 flex flex-col gap-2 border-t border-cyber-accent2 border-opacity-30 pt-3 animate-in slide-in-from-top-2 duration-200">
            {navLinks}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
