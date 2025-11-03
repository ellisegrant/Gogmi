import React, { useState } from 'react';
import { FileText, Download, Search, Filter, Calendar, Eye, BookOpen, Video, Image as ImageIcon } from 'lucide-react';

const Resources = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      id: 1,
      title: 'Maritime Security Framework for West Africa 2024',
      description: 'Comprehensive policy framework for enhancing maritime security cooperation across the Gulf of Guinea region.',
      type: 'Report',
      category: 'Security',
      size: '2.5 MB',
      pages: 85,
      date: 'November 2024',
      downloads: 1250,
      thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&fit=crop',
      fileType: 'PDF'
    },
    {
      id: 2,
      title: 'Blue Economy Investment Opportunities Guide',
      description: 'Detailed analysis of investment opportunities in sustainable fisheries, marine tourism, and renewable ocean energy.',
      type: 'Report',
      category: 'Blue Economy',
      size: '4.8 MB',
      pages: 120,
      date: 'October 2024',
      downloads: 890,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&fit=crop',
      fileType: 'PDF'
    },
    {
      id: 3,
      title: 'Maritime Training Curriculum 2024',
      description: 'Complete training curriculum for maritime security professionals including modules, assessments, and certifications.',
      type: 'Guide',
      category: 'Training',
      size: '1.8 MB',
      pages: 45,
      date: 'September 2024',
      downloads: 650,
      thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&fit=crop',
      fileType: 'PDF'
    },
    {
      id: 4,
      title: 'Regional Maritime Security Conference 2024',
      description: 'Full video recording of our flagship annual conference featuring keynotes from regional maritime leaders.',
      type: 'Video',
      category: 'Events',
      size: '580 MB',
      duration: '3h 25min',
      date: 'November 2024',
      downloads: 420,
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&fit=crop',
      fileType: 'MP4'
    },
    {
      id: 5,
      title: 'Policy Brief: Port Digitalization',
      description: 'Strategic recommendations for digital transformation of port operations in West African countries.',
      type: 'Policy Brief',
      category: 'Technology',
      size: '850 KB',
      pages: 12,
      date: 'August 2024',
      downloads: 780,
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&fit=crop',
      fileType: 'PDF'
    },
    {
      id: 6,
      title: 'Infographic: Gulf of Guinea Maritime Statistics 2023',
      description: 'Visual representation of key maritime statistics, trade volumes, and security incidents in the region.',
      type: 'Infographic',
      category: 'Data',
      size: '3.2 MB',
      date: 'July 2024',
      downloads: 1100,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&fit=crop',
      fileType: 'PNG'
    },
    {
      id: 7,
      title: 'Sustainable Fisheries Best Practices Manual',
      description: 'Practical guide for implementing sustainable fishing practices in coastal communities.',
      type: 'Manual',
      category: 'Blue Economy',
      size: '2.1 MB',
      pages: 68,
      date: 'June 2024',
      downloads: 920,
      thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&fit=crop',
      fileType: 'PDF'
    },
    {
      id: 8,
      title: 'Annual Report 2023',
      description: 'Comprehensive annual report highlighting our achievements, financial statements, and impact metrics.',
      type: 'Report',
      category: 'Organizational',
      size: '5.6 MB',
      pages: 95,
      date: 'January 2024',
      downloads: 1580,
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&fit=crop',
      fileType: 'PDF'
    }
  ];

  const types = ['all', 'Report', 'Guide', 'Policy Brief', 'Video', 'Infographic', 'Manual'];

  const filteredResources = resources.filter(resource => {
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/30 mb-6">
            <BookOpen className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-200 font-semibold text-sm">Knowledge Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Resources & Publications</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Access our library of research reports, policy briefs, training materials, and multimedia content
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <FileText />, number: '150+', label: 'Publications' },
              { icon: <Download />, number: '10K+', label: 'Downloads' },
              { icon: <Video />, number: '25+', label: 'Videos' },
              { icon: <ImageIcon />, number: '50+', label: 'Infographics' }
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

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-5 py-2 rounded-lg font-medium transition-all ${
                    selectedType === type
                      ? 'bg-blue-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type === 'all' ? 'All Resources' : type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {filteredResources.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No resources found matching your criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                    <img 
                      src={resource.thumbnail} 
                      alt={resource.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {resource.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        {resource.fileType}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {resource.date}
                      </span>
                      <span className="flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        {resource.downloads}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
                      <span className="font-medium">{resource.size}</span>
                      {resource.pages && <span>{resource.pages} pages</span>}
                      {resource.duration && <span>{resource.duration}</span>}
                    </div>

                    <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition-all flex items-center justify-center space-x-2 group-hover:shadow-lg">
                      <Download className="w-5 h-5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Need Custom Research?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            We offer customized research and consulting services tailored to your specific maritime needs
          </p>
          <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            Request Custom Research
          </button>
        </div>
      </section>
    </div>
  );
};

export default Resources;