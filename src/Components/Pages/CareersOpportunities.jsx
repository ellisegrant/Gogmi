import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Heart, Lightbulb, Target, GraduationCap, Globe, TrendingUp, Search, Filter, ChevronRight, FileText } from 'lucide-react';

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const jobCategories = ['All', 'Research', 'Policy & Advocacy', 'Operations', 'Communications', 'Finance', 'IT'];
  const jobTypes = ['All', 'Full-Time', 'Part-Time', 'Internship', 'Volunteer'];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Maritime Policy Analyst',
      category: 'Policy & Advocacy',
      type: 'Full-Time',
      location: 'Accra, Ghana',
      experience: '5-7 years',
      deadline: 'December 15, 2024',
      description: 'Lead policy research and analysis on maritime governance frameworks across West Africa. Develop policy briefs and engage with regional stakeholders.',
      requirements: ['Masters in Maritime Studies, International Relations, or related field', 'Proven experience in policy analysis', 'Excellent research and writing skills', 'Knowledge of West African maritime sector'],
      responsibilities: ['Conduct comprehensive policy research', 'Develop policy recommendations', 'Engage with government officials', 'Lead advocacy campaigns']
    },
    {
      id: 2,
      title: 'Marine Research Scientist',
      category: 'Research',
      type: 'Full-Time',
      location: 'Accra, Ghana',
      experience: '3-5 years',
      deadline: 'December 20, 2024',
      description: 'Conduct marine ecosystem research and contribute to sustainable blue economy initiatives. Work with coastal communities and scientific institutions.',
      requirements: ['PhD in Marine Biology, Oceanography, or related field', 'Research experience in marine ecosystems', 'Strong analytical skills', 'Field research experience'],
      responsibilities: ['Design and execute research projects', 'Analyze marine data', 'Publish scientific papers', 'Collaborate with research partners']
    },
    {
      id: 3,
      title: 'Communications & Media Officer',
      category: 'Communications',
      type: 'Full-Time',
      location: 'Accra, Ghana',
      experience: '2-4 years',
      deadline: 'January 10, 2025',
      description: 'Manage organizational communications, social media presence, and stakeholder engagement. Create compelling content about maritime issues.',
      requirements: ['Bachelors in Communications, Journalism, or related field', 'Proven content creation experience', 'Social media expertise', 'Excellent writing skills'],
      responsibilities: ['Develop communication strategies', 'Manage social media platforms', 'Create engaging content', 'Coordinate media relations']
    },
    {
      id: 4,
      title: 'Maritime Security Research Intern',
      category: 'Research',
      type: 'Internship',
      location: 'Remote/Hybrid',
      experience: 'Entry Level',
      deadline: 'November 30, 2024',
      description: '6-month internship supporting maritime security research projects. Gain hands-on experience in policy analysis and stakeholder engagement.',
      requirements: ['Enrolled in or recently completed relevant degree', 'Interest in maritime security', 'Research and writing skills', 'Self-motivated and eager to learn'],
      responsibilities: ['Support research activities', 'Conduct literature reviews', 'Assist in data collection', 'Prepare research summaries']
    },
    {
      id: 5,
      title: 'Finance & Grants Manager',
      category: 'Finance',
      type: 'Full-Time',
      location: 'Accra, Ghana',
      experience: '5+ years',
      deadline: 'December 5, 2024',
      description: 'Oversee financial operations and manage grant proposals and reporting. Ensure financial sustainability and compliance.',
      requirements: ['Degree in Finance, Accounting, or related field', 'Grant management experience', 'Strong financial analysis skills', 'Non-profit sector experience preferred'],
      responsibilities: ['Manage organizational finances', 'Develop grant proposals', 'Ensure compliance', 'Financial reporting']
    },
    {
      id: 6,
      title: 'Community Engagement Volunteer',
      category: 'Operations',
      type: 'Volunteer',
      location: 'Various Locations',
      experience: 'No experience required',
      deadline: 'Ongoing',
      description: 'Support community-based maritime initiatives. Work with coastal communities on sustainable development projects.',
      requirements: ['Passion for community development', 'Good interpersonal skills', 'Flexibility and adaptability', 'Commitment to mission'],
      responsibilities: ['Support community programs', 'Facilitate workshops', 'Document activities', 'Engage with local stakeholders']
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs for you and your family'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Learning & Development',
      description: 'Continuous training, conferences, and professional development opportunities'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Work on projects that make real difference across West Africa'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Culture',
      description: 'Join a diverse team of passionate maritime professionals'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and generous leave policies'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Clear career progression paths and mentorship programs'
    }
  ];

  const coreValues = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do'
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Innovation',
      description: 'We embrace creative solutions to maritime challenges'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Collaboration',
      description: 'We work together to achieve greater impact'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Integrity',
      description: 'We operate with transparency and accountability'
    }
  ];

  const filteredJobs = openPositions.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesType = selectedType === 'All' || job.type === selectedType;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/30 mb-8">
            <Briefcase className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-200 font-semibold text-sm uppercase tracking-wide">Join Our Team</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">Careers at GOGMI</h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Be part of a team transforming West Africa's maritime future
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {[
              { number: '50+', label: 'Team Members' },
              { number: '15', label: 'Nationalities' },
              { number: '6', label: 'Open Positions' },
              { number: '20+', label: 'Countries' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Why GOGMI</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mt-4 mb-6">Work That Makes a Difference</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a team dedicated to creating lasting impact across West Africa's maritime sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100">
                <div className="text-yellow-500 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mt-4">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className="text-yellow-500 mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Opportunities</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mt-4 mb-6">Open Positions</h2>
            <p className="text-lg text-gray-600">Find your perfect role in our team</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-10">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex gap-3 w-full lg:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="flex-1 lg:flex-initial px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {jobCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="flex-1 lg:flex-initial px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {jobTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <p className="text-gray-600 mt-4">
              Showing <span className="font-bold text-blue-900">{filteredJobs.length}</span> {filteredJobs.length === 1 ? 'position' : 'positions'}
            </p>
          </div>

          {/* Job Listings */}
          {filteredJobs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 mb-4">No positions found matching your criteria</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedType('All'); }}
                className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-all"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-4 py-1.5 bg-blue-900 text-white rounded-full text-sm font-semibold">
                          {job.category}
                        </span>
                        <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                          job.type === 'Full-Time' ? 'bg-green-100 text-green-700' :
                          job.type === 'Part-Time' ? 'bg-blue-100 text-blue-700' :
                          job.type === 'Internship' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-blue-900 mb-3">{job.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-yellow-500" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-yellow-500" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-yellow-500" />
                          <span>Apply by {job.deadline}</span>
                        </div>
                      </div>
                    </div>

                    <button className="lg:flex-shrink-0 bg-yellow-500 text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-600 transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                      <span>Apply Now</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Unsolicited Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FileText className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Don't See Your Role?</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We're always looking for talented individuals who share our passion for maritime excellence. Send us your CV and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-blue-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl hover:scale-105 inline-flex items-center gap-2">
            <span>Submit Your CV</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join us in shaping the future of West Africa's maritime sector
          </p>
          <button className="bg-yellow-500 text-gray-900 px-12 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-xl hover:scale-105">
            Explore Opportunities
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;