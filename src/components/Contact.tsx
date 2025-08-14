import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-emerald-900 to-blue-800 wave-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Started?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact us today to learn how EV Managers can optimize your building's charging infrastructure.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our team of experts is ready to help you design and implement the perfect 
                load management solution for your property.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-emerald-600 to-blue-600 p-3 rounded-lg shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-300">110 Northmill St, Nyack, New Jersey</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-emerald-600 p-3 rounded-lg shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">info@evmanagers.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-green-600 to-blue-600 p-3 rounded-lg shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">(877) 253-4137</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 border border-emerald-400/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-white/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-white/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-white/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-white/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transform shadow-lg"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;