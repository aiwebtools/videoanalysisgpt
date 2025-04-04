
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the Video Second-by-Second Analysis GPT work?",
      answer: "The GPT breaks down your video into one-second clips, extracts 5 color subframes from each second, and uses AI vision to analyze the visual content. It follows a sequential process, analyzing one second at a time until the entire video is covered."
    },
    {
      question: "What types of videos can I analyze with this tool?",
      answer: "You can analyze any video that can be uploaded to the ChatGPT interface. The tool works best with videos where detailed visual analysis is valuable, such as tutorial videos, sports footage, surveillance video, scientific recordings, and more."
    },
    {
      question: "How accurate is the visual analysis?",
      answer: "The analysis uses OpenAI's vision models which offer high accuracy in identifying objects, people, actions, and details. However, like all AI systems, it may occasionally miss subtle details or misinterpret complex visual information. You can always ask it to look again if you notice any discrepancies."
    },
    {
      question: "Can I use this tool for commercial purposes?",
      answer: "Yes, you can use this tool for commercial purposes according to OpenAI's usage policies. It's particularly valuable for content creators, video editors, researchers, and businesses that need detailed visual analysis of video content."
    },
    {
      question: "Is there a limit to the video length I can analyze?",
      answer: "The tool can analyze videos of any length, but there may be practical limits based on OpenAI's file size restrictions for uploads. For very long videos, you may need to break them into smaller segments before uploading."
    },
    {
      question: "How can I use this for VLM (Vision Language Model) fine-tuning?",
      answer: "The frame-by-frame analysis creates detailed annotations of visual content, which can be used as training data for fine-tuning vision language models. The second-by-second approach ensures comprehensive coverage of all visual information in your video."
    }
  ];

  return (
    <section id="faq" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-cyber-text opacity-80 max-w-2xl mx-auto">
            Everything you need to know about our AI video analysis tool
          </p>
        </div>

        <div className="max-w-3xl mx-auto cyber-panel p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-cyber-accent2 border-opacity-30 rounded-lg overflow-hidden bg-cyber-dark mb-4"
              >
                <AccordionTrigger className="px-6 py-4 text-cyber-accent2 hover:text-cyber-accent1 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-cyber-text">
                  <div className="py-3">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
