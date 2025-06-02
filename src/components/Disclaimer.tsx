
import React from "react";

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Legal Disclaimer</h2>
          <p className="text-cyber-text opacity-80 max-w-2xl mx-auto">
            Important information about using our AI tool
          </p>
        </div>

        <div className="max-w-4xl mx-auto cyber-panel p-8 font-mono text-sm">
          <div className="space-y-6">
            <div className="bg-cyber-accent1 bg-opacity-10 p-4 rounded border border-cyber-accent1 border-opacity-30 mb-6">
              <h3 className="text-cyber-accent1 font-bold mb-2 text-lg">Educational & Research Purposes</h3>
              <p className="text-cyber-text opacity-90">
                This tool is provided for informational, educational, and research purposes only. 
                It is not intended for commercial use or critical decision-making processes.
              </p>
            </div>
            
            <div>
              <h3 className="text-cyber-accent2 font-bold mb-2 text-lg">Limitation of Liability</h3>
              <p className="text-cyber-text opacity-80">
                The Video Second-by-Second Analysis GPT is provided "as is" without warranties of any kind, 
                either expressed or implied. AI Web Tools and its affiliates shall not be liable for any 
                damages arising from the use of this tool, including but not limited to direct, indirect, 
                incidental, punitive, and consequential damages.
              </p>
            </div>
            
            <div>
              <h3 className="text-cyber-accent2 font-bold mb-2 text-lg">Data Privacy</h3>
              <p className="text-cyber-text opacity-80">
                By using this tool, you acknowledge that your uploaded videos and interactions may be 
                processed by OpenAI's systems according to their privacy policy. We do not store your 
                videos or the analysis results beyond the duration of your session.
              </p>
            </div>
            
            <div>
              <h3 className="text-cyber-accent2 font-bold mb-2 text-lg">Content Restrictions</h3>
              <p className="text-cyber-text opacity-80">
                Users are prohibited from uploading videos containing illegal content, including but not 
                limited to: violence, explicit sexual content, harassment, private information without 
                consent, copyright-infringing material, and content that violates OpenAI's usage policies.
              </p>
            </div>
            
            <div>
              <h3 className="text-cyber-accent2 font-bold mb-2 text-lg">Accuracy Limitations</h3>
              <p className="text-cyber-text opacity-80">
                While the Video Second-by-Second Analysis GPT strives for accuracy in its analysis, 
                it may occasionally misinterpret visual content or miss details. Users should not rely 
                exclusively on this tool for critical decisions, especially in legal, medical, or 
                safety-critical contexts.
              </p>
            </div>
            
            <div>
              <h3 className="text-cyber-accent2 font-bold mb-2 text-lg">Acknowledgement</h3>
              <p className="text-cyber-text opacity-80">
                By using this tool, you acknowledge that you have read, understood, and agreed to these 
                terms and conditions. You also agree to use the tool in compliance with all applicable laws 
                and regulations.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-cyber-accent2 border-opacity-30 text-center">
            <p className="text-cyber-text opacity-60">
              Last Updated: April 4, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
