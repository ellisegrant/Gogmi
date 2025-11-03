import React, { useState } from 'react';
import { Globe, Users, Award, TrendingUp, ExternalLink } from 'lucide-react';

const Partners = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const partners = [
    {
      id: 1,
      name: 'UNESCO',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=UNESCO',
      category: 'International',
      type: 'Strategic Partner',
      since: '2015',
      description: 'Collaboration on maritime education and cultural heritage preservation',
      website: 'https://unesco.org',
      projects: 8
    },
    {
      id: 2,
      name: 'International Maritime Organization',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=IMO',
      category: 'International',
      type: 'Technical Partner',
      since: '2016',
      description: 'Maritime safety and security technical cooperation',
      website: 'https://imo.org',
      projects: 12
    },
    {
      id: 3,
      name: 'ECOWAS',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=ECOWAS',
      category: 'Regional',
      type: 'Strategic Partner',
      since: '2014',
      description: 'Regional maritime policy development and implementation',
      website: 'https://ecowas.int',
      projects: 15
    },
    {
      id: 4,
      name: 'African Union',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=AU',
      category: 'Regional',
      type: 'Strategic Partner',
      since: '2017',
      description: 'Continental maritime strategy and blue economy initiatives',
      website: 'https://au.int',
      projects: 6
    },
    {
      id: 5,
      name: 'European Union',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=EU',
      category: 'International',
      type: 'Funding Partner',
      since: '2018',
      description: 'Maritime security capacity building programs',
      website: 'https://europa.eu',
      projects: 10
    },
    {
      id: 6,
      name: 'Ghana Navy',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=GHANA+NAVY',
      category: 'Government',
      type: 'Implementation Partner',
      since: '2013',
      description: 'Maritime security operations and training',
      website: '#',
      projects: 20
    },
    {
      id: 7,
      name: 'Nigerian Maritime Administration',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=NIMASA',
      category: 'Government',
      type: 'Regulatory Partner',
      since: '2016',
      description: 'Maritime safety standards and compliance',
      website: '#',
      projects: 9
    },
    {
      id: 8,
      name: 'World Bank',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=WORLD+BANK',
      category: 'International',
      type: 'Funding Partner',
      since: '2019',
      description: 'Blue economy development financing',
      website: 'https://worldbank.org',
      projects: 5
    },
    {
      id: 9,
      name: 'WISTA Ghana',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=WISTA',
      category: 'Private Sector',
      type: 'Network Partner',
      since: '2017',
      description: 'Women in maritime empowerment programs',
      website: '#',
      projects: 7
    }
  ];

  const categories = ['all', 'International', 'Regional', 'Government', 'Private Sector'];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/30 mb-6">
            <Users className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-200 font-semibold text-sm">Global Collaboration Network</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Partners</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Working together with leading organizations to advance maritime excellence across West Africa
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Globe />, number: '50+', label: 'Global Partners' },
              { icon: <Users />, number: '15+', label: 'Countries' },
              { icon: <Award />, number: '100+', label: 'Joint Projects' },
              { icon: <TrendingUp />, number: '10 Years', label: 'Collaboration' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="text-yellow-500 flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-900 mb-1">{stat.number}</div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Partners' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Logo */}
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 flex items-center justify-center h-40 relative overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {partner.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-blue-900 group-hover:text-yellow-600 transition-colors">
                      {partner.name}
                    </h3>
                    {partner.website !== '#' && (
                      <a 
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-900 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Type:</span>
                      <span className="font-semibold text-gray-700">{partner.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Since:</span>
                      <span className="font-semibold text-gray-700">{partner.since}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Projects:</span>
                      <span className="font-semibold text-yellow-600">{partner.projects}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {partner.description}
                  </p>

                  <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition-all group-hover:shadow-lg">
                    View Partnership
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join our network of leading organizations driving maritime excellence in West Africa
          </p>
          <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            Partnership Opportunities
          </button>
        </div>
      </section>
    </div>
  );
};

export default Partners;