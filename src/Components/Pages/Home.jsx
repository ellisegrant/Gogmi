import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, TrendingUp, Globe, Ship, Waves, BookOpen, Play, ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&auto=format&fit=crop" 
            alt="Maritime"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-900/95"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full py-32">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/30">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-yellow-200 font-semibold text-sm">Leading West Africa's Maritime Future</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Shaping West Africa's
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Blue Economy
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Pioneering sustainable maritime initiatives that drive economic growth and environmental stewardship
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/about" className="group bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-2xl flex items-center space-x-2 w-full sm:w-auto justify-center">
                <span>Explore Our Impact</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center space-x-2 w-full sm:w-auto justify-center">
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-white/60" />
        </div>
      </section>

      {/* Stats Section - Centered and Overlapping */}
      <section className="relative -mt-32 z-20 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: '50+', label: 'Projects', icon: <Award className="w-6 h-6 md:w-8 md:h-8" /> },
              { number: '200+', label: 'Partners', icon: <Users className="w-6 h-6 md:w-8 md:h-8" /> },
              { number: '15+', label: 'Years', icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" /> },
              { number: '25', label: 'Countries', icon: <Globe className="w-6 h-6 md:w-8 md:h-8" /> }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer">
                <div className="text-yellow-500 mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-2 text-center">{stat.number}</div>
                <p className="text-gray-600 font-medium text-sm md:text-base text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Welcome Section - Properly Centered */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">About GOGMI</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">Empowering Maritime Excellence</h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              The Gulf of Guinea Maritime Institute is West Africa's premier think tank dedicated to advancing maritime security, sustainable blue economy development, and regional cooperation.
            </p>
            <Link to="/about" className="inline-flex items-center text-blue-900 font-semibold text-lg hover:text-yellow-600 transition-colors group">
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Centered Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive maritime solutions driving sustainable development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: <Ship className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'Maritime Security',
                desc: 'Strategic frameworks for safe operations',
                img: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&fit=crop'
              },
              {
                icon: <Waves className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'Blue Economy',
                desc: 'Sustainable ocean initiatives',
                img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&fit=crop'
              },
              {
                icon: <BookOpen className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'Research & Policy',
                desc: 'Evidence-based development',
                img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&fit=crop'
              },
              {
                icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'Capacity Building',
                desc: 'Professional training programs',
                img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop'
              }
            ].map((service, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                  <div className="flex items-center text-yellow-500 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Centered */}
      <section className="py-16 md:py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">Partner with us for a sustainable maritime future</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-2xl hover:scale-105 flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/projects" className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;