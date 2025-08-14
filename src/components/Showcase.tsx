import React from 'react';
import { Activity, Zap, TrendingDown } from 'lucide-react';

const Showcase = () => {
  const showcaseItems = [
    {
      title: "Real-Time Load Monitoring",
      description: " Our advanced panel-mounted monitoring hardware continuously tracks your building's electrical load in real-time, automatically adjusting EV charging load to prevent circuit overloads and ensure safe operation of all your critical systems.  
",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Activity,
      textRight: false
    },
    {
      title: "Smart Load Balancing",
      description: "Maximize your charging capacity without expensive electrical upgrades. Our intelligent load balancing technology allows you to install more EV chargers while staying within your existing electrical service limits.",
      image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Zap,
      textRight: true
    },
    {
      title: "Reduced Energy Costs",
      description: "Take control of peak demand charges and optimize your energy consumption patterns. EV Managers helps you reduce overall energy costs while providing reliable charging for all your electric vehicles.",
      image: "https://ahmrghovmuxowchijumv.supabase.co/storage/v1/object/public/ev%20managers/money.png",
      icon: TrendingDown,
      textRight: false
    }
  ];

  return (
    <section id="showcase" className="py-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-green-50 wave-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showcaseItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              item.textRight ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } items-center gap-12 lg:gap-16 mb-20 last:mb-0 relative z-10`}
          >
            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group float-animation" style={{
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                padding: '4px'
              }}>
                <div className="relative overflow-hidden rounded-2xl">
                {index === 1 ? (
                  <video
                    src="https://ahmrghovmuxowchijumv.supabase.co/storage/v1/object/public/ev%20managers/sectio%202.mp4"
                    className="w-full h-80 lg:h-96 object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-emerald-900/10 to-transparent"></div>
                <div className="absolute top-6 right-6 bg-gradient-to-br from-emerald-500 to-blue-500 p-3 rounded-full shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {item.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;