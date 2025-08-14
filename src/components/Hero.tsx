import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://ahmrghovmuxowchijumv.supabase.co/storage/v1/object/public/ev%20managers/main%20hero.mp4" type="video/mp4" />
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-emerald-900/80 to-blue-800/80">
        <div className="absolute inset-0 wave-pattern"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Charge Smarter.<br />
            <span className="text-gradient">Stay Balanced.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            EV Managers syncs your power usage with eGauge data and Wevo control to ensure 
            safe, optimized charging — every day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold text-lg flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              Get Started
              <ArrowRight size={20} />
            </a>
            
            <a
              href="#showcase"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg flex items-center gap-2"
            >
              <Play size={20} />
              How It Works
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;