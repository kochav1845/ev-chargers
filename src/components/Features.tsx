import React from 'react';
import { Brain, Scale, Wrench } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Charging",
      description: "Intelligently adapts to available capacity in real time.",
      video: "https://ahmrghovmuxowchijumv.supabase.co/storage/v1/object/public/ev%20managers/features1.mp4"
    },
    {
      icon: Scale,
      title: "Equal Balancing",
      description: "Distributes load evenly across all active chargers.",
      video: "https://ahmrghovmuxowchijumv.supabase.co/storage/v1/object/public/ev%20managers/features2.mp4"
    },
    {
      icon: Wrench,
      title: "No Service Upgrade",
      description: "Expands charging capacity without costly electrical work.",
      video: "https://ahmrghovmuxowchijumv.supabase.co/storage/v1/object/public/ev%20managers/features3.mp4"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-green-50 wave-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-gradient">EV Managers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge load management system delivers unmatched performance and reliability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-emerald-100/50"
            >
              <div className="bg-gradient-to-br from-emerald-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:from-emerald-200 group-hover:to-blue-200 transition-all duration-300 shadow-lg">
                <feature.icon className="w-8 h-8 text-gradient" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="relative overflow-hidden rounded-md border border-gray-200/50">
                <video
                  src={feature.video}
                  className="w-full h-48 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;