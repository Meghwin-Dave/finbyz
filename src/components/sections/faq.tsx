"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ChevronDown, Quote, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What industries do you serve?",
    answer: "Primarily manufacturing, trading, and professional services — but we customize tech for any business model.",
    category: "Services",
    gradient: "from-[#1A5276] to-[#2E86AB]"
  },
  {
    question: "Do you work on fixed-cost projects or hourly?",
    answer: "We offer both. Clients choose between full-time resources or scoped deliverables.",
    category: "Pricing",
    gradient: "from-[#FF8C00] to-[#FFA500]"
  },
  {
    question: "How do you ensure data security?",
    answer: "We follow best-in-class data governance and NDA-backed confidentiality, especially for ERP access.",
    category: "Security",
    gradient: "from-[#8E44AD] to-[#9B59B6]"
  },
  {
    question: "What's your typical project timeline?",
    answer: "ERP implementations: 3-6 months. AI automation: 2-4 weeks. Custom software: 1-3 months depending on scope.",
    category: "Timeline",
    gradient: "from-[#1A5276] to-[#3498DB]"
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive support packages including maintenance, updates, and 24/7 technical assistance.",
    category: "Support",
    gradient: "from-[#FF8C00] to-[#FFB84D]"
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#1A5276]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#FF8C00]/10 rounded-full blur-xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1A5276] to-[#FF8C00] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </div>
        
        <div className="animate-fade-in-delayed">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="group border-2 border-gray-100 hover:border-gray-200 rounded-2xl px-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${faq.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <AccordionTrigger className="text-left font-semibold text-[#1A5276] hover:no-underline py-6 group-hover:text-[#2E86AB] transition-colors duration-300 relative z-10">
                  <div className="flex items-center space-x-4 w-full">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${faq.gradient} flex items-center justify-center shadow-sm`}>
                      <span className="text-white text-xs font-bold">{faq.category.charAt(0)}</span>
                    </div>
                    <span className="flex-1">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-[#1A5276] group-hover:text-[#2E86AB] transition-colors duration-300 group-data-[state=open]:rotate-180" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></div>
                    <p>{faq.answer}</p>
                  </div>
                </AccordionContent>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#1A5276] to-[#FF8C00] group-hover:w-full transition-all duration-500"></div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Quote Block */}
        <div className="text-center mt-16 animate-fade-in-delayed">
          <div className="relative p-8 bg-gradient-to-r from-[#1A5276]/10 to-[#FF8C00]/10 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Floating Icons */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-[#1A5276]/20 rounded-full flex items-center justify-center">
              <Quote className="w-4 h-4 text-[#1A5276]" />
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#FF8C00]/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#FF8C00]" />
            </div>
            
            <blockquote className="text-2xl font-bold text-[#1A5276] mb-4 relative z-10">
              "You bring the vision — we'll build the roadmap."
            </blockquote>
            <p className="text-muted-foreground font-semibold relative z-10">— The Finbyz Promise</p>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-delayed">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1A5276]/10 to-[#FF8C00]/10 rounded-full px-6 py-3 border border-gray-200">
            <div className="w-2 h-2 bg-[#1A5276] rounded-full"></div>
            <span className="text-sm font-semibold text-[#1A5276]">
              Transform your business processes with AI-powered automation and expert implementation.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

