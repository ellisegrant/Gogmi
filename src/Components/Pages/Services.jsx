import React, { useState } from 'react';
import { Ship, Waves, BookOpen, Users, Shield, Anchor, Globe, TrendingUp, CheckCircle, ArrowRight, Award } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 1,
      category: 'security',
      icon: <Ship className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Maritime Security Solutions',
      shortDesc: 'Comprehensive security frameworks for safe maritime operations',
      fullDesc: 'We provide strategic maritime security assessments, threat analysis, and policy frameworks to ensure safe operations across the Gulf of Guinea region.',
      features: ['Risk Assessment', 'Security Training', 'Policy Development', 'Emergency Response'],
      image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&fit=crop',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      category: 'economy',
      icon: <Waves className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Blue Economy Development',
      shortDesc: 'Sustainable ocean economy initiatives and strategies',
      fullDesc: 'Our blue economy programs promote sustainable use of ocean resources for economic growth while preserving marine ecosystems.',
      features: ['Fisheries Management', 'Marine Conservation', 'Coastal Development', 'Sustainability Planning'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&fit=crop',
      color: 'from-teal-600 to-cyan-800'
    },
    {
      id: 3,
      category: 'research',
      icon: <BookOpen className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Research & Policy Advisory',
      shortDesc: 'Evidence-based research driving maritime policy',
      fullDesc: 'We conduct cutting-edge maritime research and provide expert policy advisory services to governments and organizations.',
      features: ['Policy Research', 'Data Analysis', 'Strategic Planning', 'Impact Assessment'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&fit=crop',
      color: 'from-purple-600 to-indigo-800'
    },
    {
      id: 4,
      category: 'training',
      icon: <Users className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Capacity Building Programs',
      shortDesc: 'Professional training and skill development',
      fullDesc: 'Comprehensive training programs that empower maritime professionals with the knowledge and skills needed for excellence.',
      features: ['Professional Workshops', 'Certification Programs', 'Online Courses', 'Mentorship'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop',
      color: 'from-orange-600 to-red-800'
    },
    {
      id: 5,
      category: 'security',
      icon: <Shield className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Port Security Assessment',
      shortDesc: 'Comprehensive port and harbor security evaluation',
      fullDesc: 'Detailed security assessments of port facilities to identify vulnerabilities and implement best practices.',
      features: ['Facility Inspection', 'Compliance Review', 'Security Protocols', 'Staff Training'],
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&fit=crop',
      color: 'from-slate-600 to-gray-800'
    },
    {
      id: 6,
      category: 'research',
      icon: <Anchor className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Maritime Intelligence Reports',
      shortDesc: 'Strategic intelligence and analysis services',
      fullDesc: 'Detailed maritime intelligence reports providing insights into regional trends, threats, and opportunities.',
      features: ['Threat Analysis', 'Market Intelligence', 'Risk Forecasting', 'Custom Reports'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop',
      color: 'from-emerald-600 to-green-800'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-4 h-4" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'economy', name: 'Blue Economy', icon: <Waves className="w-4 h-4" /> },
    { id: 'research', name: 'Research', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'training', name: 'Training', icon: <Users className="w-4 h-4" /> }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/30 mb-6">
            <Anchor className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-200 font-semibold text-sm">Comprehensive Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Delivering excellence across maritime security, blue economy development, research, and capacity building
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base ${
                  activeTab === category.id
                    ? 'bg-blue-900 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                  <div className="absolute top-6 left-6 text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{service.fullDesc}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition-all flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { icon: <Award className="w-10 h-10 md:w-12 md:h-12" />, number: '50+', label: 'Projects Delivered' },
              { icon: <Users className="w-10 h-10 md:w-12 md:h-12" />, number: '500+', label: 'Professionals Trained' },
              { icon: <Globe className="w-10 h-10 md:w-12 md:h-12" />, number: '25', label: 'Countries Served' },
              { icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />, number: '98%', label: 'Client Satisfaction' }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-yellow-400 flex justify-center">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <p className="text-white/80 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Let's discuss how our services can support your maritime objectives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2">
              <span>Request a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 hover:text-white transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;