import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  Globe,
  Ship,
  Waves,
  BookOpen,
  Play,
  ChevronDown
} from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden scroll-smooth">

      {/* HERO */}
      <header className="relative min-h-[78vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&auto=format&fit=crop"
            alt="Maritime background"
            className="w-full h-full object-cover"
          />
          {/* gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/70 to-blue-900/85"></div>
        </div>

        {/* 👇 FIXED HERO SECTION */}
        <div className="relative z-10 container mx-auto max-w-5xl px-6 py-20 flex flex-col items-center text-center text-white">
          <div className="inline-flex items-center gap-3 bg-yellow-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-yellow-500/30 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-yellow-200 font-semibold text-sm">
              Leading West Africa's Maritime Future
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Shaping West Africa's
            <span className="block mt-3 text-yellow-300 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
              Blue Economy
            </span>
          </h1>

          <p className="mt-2 text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
            Pioneering sustainable maritime initiatives that drive economic growth
            and environmental stewardship
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-yellow-500 text-gray-900 px-6 md:px-8 py-3 rounded-xl font-bold hover:bg-yellow-600 transition shadow-2xl"
            >
              <span>Explore Our Impact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 md:px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
            >
              <Play className="w-4 h-4" />
              <span>Watch Video</span>
            </button>
          </div>
        </div>
        {/* 👆 END FIXED HERO SECTION */}

        {/* down chevron */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <a href="#stats" aria-label="Scroll to stats">
            <ChevronDown className="w-10 h-10 text-white/70 animate-bounce" />
          </a>
        </div>
      </header>

      {/* STATS — unchanged */}
      {/*
      <section id="stats" className="relative -mt-20 z-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'Projects', icon: <Award className="w-6 h-6 md:w-8 md:h-8" /> },
              { number: '200+', label: 'Partners', icon: <Users className="w-6 h-6 md:w-8 md:h-8" /> },
              { number: '15+', label: 'Years', icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" /> },
              { number: '25', label: 'Countries', icon: <Globe className="w-6 h-6 md:w-8 md:h-8" /> }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg transform hover:-translate-y-2 transition cursor-default flex flex-col items-center text-center"
              >
                <div className="text-yellow-500 mb-3">{stat.icon}</div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-900">{stat.number}</div>
                <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>  */}

      {/* ABOUT / WELCOME — unchanged */}
      {/* SERVICES — unchanged */}
      {/* CTA — unchanged */}

    </div>
  );
};

export default Home;
