import React from 'react';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-white mb-4">About GOGMI</h1>
          <p className="text-2xl text-white/90">Championing Maritime Excellence Since 2008</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-yellow-500 font-semibold text-sm uppercase">Our Story</span>
              <h2 className="text-4xl font-bold text-blue-900 mt-4 mb-6">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2008, the Gulf of Guinea Maritime Institute (GOGMI) emerged as a response to the growing need for specialized maritime expertise in West Africa.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are a non-profit think tank that brings together maritime strategic thinkers, practitioners, and experts to research and address critical maritime challenges in the Gulf of Guinea region.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through innovative research, strategic advocacy, and comprehensive capacity building programs, we're shaping the future of West Africa's blue economy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Award className="w-8 h-8" />, number: '50+', label: 'Projects' },
                { icon: <Users className="w-8 h-8" />, number: '200+', label: 'Partners' },
                { icon: <TrendingUp className="w-8 h-8" />, number: '15+', label: 'Years' },
                { icon: <Target className="w-8 h-8" />, number: '25', label: 'Countries' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-yellow-500 mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-900">{stat.number}</div>
                  <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase">Our Foundation</span>
            <h2 className="text-5xl font-bold text-blue-900 mt-4">Mission, Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-16 h-16" />,
                title: 'Our Mission',
                desc: 'To provide strategic maritime research, advocacy, and capacity building that drives sustainable blue economy development across West Africa.'
              },
              {
                icon: <Eye className="w-16 h-16" />,
                title: 'Our Vision',
                desc: 'To be the leading maritime think tank in Africa, recognized for excellence in research, policy innovation, and transformative impact.'
              },
              {
                icon: <Heart className="w-16 h-16" />,
                title: 'Our Values',
                desc: 'Integrity, Excellence, Collaboration, Innovation, and Sustainability guide everything we do in advancing maritime excellence.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-yellow-500 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase">Our Team</span>
            <h2 className="text-5xl font-bold text-blue-900 mt-4">Leadership</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Kofi Mensah', role: 'Executive Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop' },
              { name: 'Admiral Grace Okoro', role: 'Director of Research', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop' },
              { name: 'Prof. Jean Baptiste', role: 'Head of Policy', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop' }
            ].map((member, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-white/90 mb-10">Partner with us to transform West Africa's maritime future</p>
          <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-xl">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;