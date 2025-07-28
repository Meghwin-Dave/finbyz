"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const snapshots = [
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    title: "3x Lead Conversion",
    subtitle: "Sales Process Optimization",
    challenge: "Scattered sales follow-ups",
    result: "3x Lead Conversion with ERP-Linked AI Tasks",
    gradient: "from-[#1A5276] to-[#2E86AB]",
    icon: TrendingUp
  },
  {
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    title: "75% Time Reduction",
    subtitle: "Report Automation",
    challenge: "Manual report creation",
    result: "Auto-Reports Delivered in 1/4th Time via Workflow Automation",
    gradient: "from-[#FF8C00] to-[#FFA500]",
    icon: Target
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    title: "40% Cost Savings",
    subtitle: "Process Automation",
    challenge: "Redundant manual processes",
    result: "40% Operational Cost Reduction through Intelligent Automation",
    gradient: "from-[#8E44AD] to-[#9B59B6]",
    icon: CheckCircle
  }
];

export default function SuccessSnapshots() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-[#1A5276]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-[#FF8C00]/10 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4">
            Success Snapshots
          </h2>
          <p className="text-xl text-muted-foreground">
            Real challenges, measurable results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {snapshots.map((snapshot, index) => (
            <div
              key={snapshot.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="group bg-white/80 backdrop-blur-sm h-full border-2 border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${snapshot.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Header with Image and Icon */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <img 
                        src={snapshot.image} 
                        alt={snapshot.subtitle}
                        className="w-16 h-16 rounded-xl object-cover shadow-lg"
                      />
                      <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${snapshot.gradient} flex items-center justify-center shadow-lg`}>
                        <snapshot.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A5276] group-hover:text-[#2E86AB] transition-colors duration-300">
                        {snapshot.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{snapshot.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Challenge and Result */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-[#FF8C00] rounded-full mt-1 flex-shrink-0 shadow-sm"></div>
                      <div>
                        <span className="text-sm font-semibold text-[#1A5276]">Challenge:</span>
                        <p className="text-muted-foreground text-sm leading-relaxed">{snapshot.challenge}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-[#1A5276] rounded-full mt-1 flex-shrink-0 shadow-sm"></div>
                      <div>
                        <span className="text-sm font-semibold text-[#1A5276]">Result:</span>
                        <p className="text-[#1A5276] font-semibold text-sm leading-relaxed">{snapshot.result}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Success Badge */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${snapshot.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm`}>
                      <CheckCircle className="w-3 h-3" />
                      <span>Success Story</span>
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
            Read Full Case Studies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          {/* Success Metrics */}
          <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#1A5276] rounded-full"></div>
              <span>200+ Success Stories</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#FF8C00] rounded-full"></div>
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#8E44AD] rounded-full"></div>
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

