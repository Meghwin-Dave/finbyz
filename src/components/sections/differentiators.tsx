"use client";

import { Eye, Heart, CheckCircle, BarChart } from "lucide-react";

const differentiators = [
  {
    icon: Eye,
    title: "Clarity Over Complexity",
    description: "We simplify tech jargon into action plans. No overengineering, just elegant problem-solving.",
    gradient: "from-[#1A5276] to-[#2E86AB]",
    iconColor: "#1A5276"
  },
  {
    icon: Heart,
    title: "Ownership with Empathy",
    description: "Your goals become our goals. We bring care into consulting.",
    gradient: "from-[#FF8C00] to-[#FFA500]",
    iconColor: "#FF8C00"
  },
  {
    icon: CheckCircle,
    title: "Precision in Execution",
    description: "We sweat the details — ERP flows, automations, dashboards — done right the first time.",
    gradient: "from-[#1A5276] to-[#3498DB]",
    iconColor: "#1A5276"
  },
  {
    icon: BarChart,
    title: "Adaptable Team Model",
    description: "Need a full-time developer or quick AI prototype? Our team scales as you grow.",
    gradient: "from-[#8E44AD] to-[#9B59B6]",
    iconColor: "#8E44AD"
  }
];

export default function Differentiators() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-[#1A5276]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#FF8C00]/10 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4">
            Our Differentiators
          </h2>
          <p className="text-xl text-muted-foreground">
            What sets us apart in the technology landscape
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={item.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-gray-200 relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="flex items-start space-x-6 relative z-10">
                  <div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon 
                      className="w-8 h-8 text-white" 
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1A5276] mb-3 group-hover:text-[#2E86AB] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#1A5276] to-[#FF8C00] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Quote */}
        <div className="text-center mt-16 animate-fade-in-delayed">
          <div className="bg-gradient-to-r from-[#1A5276]/10 to-[#FF8C00]/10 rounded-2xl p-8 border border-gray-200">
            <blockquote className="text-2xl font-bold text-[#1A5276] mb-4">
              "You bring the vision — we'll build the roadmap."
            </blockquote>
            <p className="text-muted-foreground font-semibold">
              — The Finbyz Promise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

