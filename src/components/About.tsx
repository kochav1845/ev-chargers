import React from 'react';
import { Globe, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50 to-emerald-50 relative overflow-hidden wave-border-top">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(14, 165, 233, 0.4) 1px, transparent 0), radial-gradient(circle at 20px 20px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute inset-0 wave-pattern"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Transforming EV Infrastructure,<br />
            <span className="text-gradient">One Building at a Time</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-green-600 mx-auto mb-8"></div>
        </div>
        
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl leading-relaxed text-gray-600 mb-8 text-center">
            EV Managers has revolutionized how property owners approach electric vehicle charging infrastructure. 
            By eliminating the need for costly electrical service upgrades, we've made it possible for thousands 
            of buildings to embrace the electric vehicle revolution without breaking the bank.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Impact</h3>
              <p className="text-gray-600">
                Deployed across multiple continents, helping reduce carbon emissions worldwide.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Industry Leading</h3>
              <p className="text-gray-600">
                Award-winning technology recognized by major industry organizations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Trusted Partner</h3>
              <p className="text-gray-600">
                Thousands of satisfied customers trust us with their EV infrastructure needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;