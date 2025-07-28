"use client";

import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Globe, Users, Target } from "lucide-react";
import { useState, useEffect } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix: string;
  className: string;
}

function AnimatedCounter({ end, suffix, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className={className}>
      {count}{suffix}
    </div>
  );
}

const benefits = [
  { 
    number: 10, 
    suffix: "+", 
    label: "Years of Proven Experience",
    icon: Award,
    gradient: "from-[#1A5276] to-[#2E86AB]"
  },
  { 
    number: 200, 
    suffix: "%", 
    label: "Efficiency Gains with Our Solutions",
    icon: TrendingUp,
    gradient: "from-[#FF8C00] to-[#FFA500]"
  },
  { 
    number: 12, 
    suffix: "+", 
    label: "Countries Served",
    icon: Globe,
    gradient: "from-[#1A5276] to-[#3498DB]"
  },
  { 
    number: 60, 
    suffix: "%", 
    label: "Team Deployment Rate with 3X ROI",
    icon: Users,
    gradient: "from-[#FF8C00] to-[#FFB84D]"
  },
  { 
    number: 100, 
    suffix: "+", 
    label: "Projects Delivered with Precision",
    icon: Target,
    gradient: "from-[#1A5276] to-[#2E86AB]"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1A5276] via-[#2E86AB] to-[#3498DB] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#FF8C00]/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Finbyz
          </h2>
          <p className="text-xl text-blue-100">
            Proven results that speak for themselves
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto bg-gradient-to-br ${benefit.gradient} shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <AnimatedCounter
                  end={benefit.number}
                  suffix={benefit.suffix}
                  className="text-4xl md:text-5xl font-bold text-white mb-2 block"
                />
                
                <p className="text-blue-100 text-sm leading-relaxed">
                  {benefit.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in-delayed">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white hover:from-[#FFA500] hover:to-[#FFB84D] text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            Let's Build That Efficiency →
          </Button>
        </div>
      </div>
    </section>
  );
}

