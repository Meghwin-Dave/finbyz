"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Finbyz Tech helped us replace legacy ERP and launched AI workflows — all with clarity and speed.",
    author: "COO",
    company: "Manufacturing Group (Germany)",
    initials: "JD",
    rating: 5,
    gradient: "from-[#1A5276] to-[#2E86AB]"
  },
  {
    quote: "The only tech partner we trust to scale with us. Their people are their superpower.",
    author: "CTO",
    company: "SaaS Startup (Canada)",
    initials: "MR",
    rating: 5,
    gradient: "from-[#FF8C00] to-[#FFA500]"
  },
  {
    quote: "From concept to deployment in record time. Finbyz delivered exactly what we envisioned.",
    author: "CEO",
    company: "Fintech Platform (Australia)",
    initials: "SL",
    rating: 5,
    gradient: "from-[#8E44AD] to-[#9B59B6]"
  }
];

const clientLogos = [
  { name: "TechCorp", gradient: "from-[#1A5276] to-[#2E86AB]" },
  { name: "InnovateLab", gradient: "from-[#FF8C00] to-[#FFA500]" },
  { name: "DataFlow", gradient: "from-[#8E44AD] to-[#9B59B6]" },
  { name: "CloudSync", gradient: "from-[#1A5276] to-[#3498DB]" },
  { name: "SmartTech", gradient: "from-[#FF8C00] to-[#FFB84D]" }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#1A5276]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#FF8C00]/10 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4">
            Trusted by Clients Globally
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our partners say about working with us
          </p>
        </div>
        
        {/* Client Logos Carousel */}
        <div className="flex justify-center items-center space-x-8 mb-16 opacity-70 animate-fade-in-delayed">
          {clientLogos.map((logo, index) => (
            <div 
              key={logo.name}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-28 h-12 bg-gradient-to-r ${logo.gradient} rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {logo.name}
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="group bg-white/80 backdrop-blur-sm h-full border-2 border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Quote Icon */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FF8C00] fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote Text */}
                  <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center">
                    <Avatar className={`mr-4 bg-gradient-to-br ${testimonial.gradient} shadow-lg`}>
                      <AvatarFallback className="text-white font-bold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-[#1A5276]">{testimonial.author}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#1A5276] to-[#FF8C00] group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-delayed">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#1A5276] to-[#2E86AB] text-white hover:from-[#2E86AB] hover:to-[#3498DB] text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            See How We Helped Businesses Like Yours →
          </Button>
          
          {/* Trust Indicators */}
          <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#1A5276] rounded-full"></div>
              <span>500+ Projects Delivered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#FF8C00] rounded-full"></div>
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#8E44AD] rounded-full"></div>
              <span>15+ Countries Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

