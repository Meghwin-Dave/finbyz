"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Zap, Code, Users } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "ERP Implementation",
    description: "Streamline operations and scale faster with expert ERPNext implementations — from vanilla to custom builds.",
    gradient: "from-[#1A5276] to-[#2E86AB]",
    iconColor: "#1A5276"
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Automate intelligently. From data workflows to business logic, we build AI that works where it matters.",
    gradient: "from-[#FF8C00] to-[#FFA500]",
    iconColor: "#FF8C00"
  },
  {
    icon: Code,
    title: "Software Development",
    description: "From SaaS apps to custom tools, we develop scalable, user-centric software built to solve real problems.",
    gradient: "from-[#1A5276] to-[#3498DB]",
    iconColor: "#1A5276"
  },
  {
    icon: Users,
    title: "Resource Augmentation",
    description: "Tap into our skilled developers and consultants — as dedicated team members or project-based specialists.",
    gradient: "from-[#8E44AD] to-[#9B59B6]",
    iconColor: "#8E44AD"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4">
            What We Do – Snapshot
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive technology solutions for modern businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="group h-full border-2 border-gray-100 hover:border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${service.iconColor}15` }}
                  >
                    <service.icon 
                      className="w-8 h-8 transition-all duration-300 group-hover:scale-110" 
                      style={{ color: service.iconColor }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1A5276] mb-4 group-hover:text-[#2E86AB] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#1A5276] to-[#FF8C00] group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-delayed">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1A5276] to-[#FF8C00] text-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-sm font-semibold">Ready to get started?</span>
            <span className="text-xs opacity-90">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}

