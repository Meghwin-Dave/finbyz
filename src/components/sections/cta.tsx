"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale with Smart Tech? Let's Talk.</h2>
          <p className="text-xl text-blue-100 mb-8">
            Transform your business processes with AI-powered automation and expert implementation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all"
            >
              Book Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto transition-all"
            >
              Get Proposal
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

