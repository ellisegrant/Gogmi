import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = 'GOGMI - Gulf of Guinea Maritime Institute',
  description = 'Leading maritime excellence through research, advocacy, and capacity building across West Africa\'s blue economy.',
  keywords = 'maritime, blue economy, West Africa, Gulf of Guinea, maritime security, ocean conservation',
  image = '/og-image.jpg',
  url = 'https://gogmi.org.gh'
}) => {
  const location = useLocation();
  const fullUrl = `${url}${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property, content, isName = false) => {
      const attr = isName ? 'name' : 'property';
      let element = document.querySelector(`meta[${attr}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description, true);
    updateMetaTag('keywords', keywords, true);

    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', fullUrl);
    updateMetaTag('og:type', 'website');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);

  }, [title, description, keywords, image, fullUrl]);

  return null;
};

// Page-specific SEO data
export const pageSEO = {
  home: {
    title: 'GOGMI - Shaping West Africa\'s Blue Economy',
    description: 'Pioneering sustainable maritime initiatives that drive economic growth and environmental stewardship across the Gulf of Guinea.',
    keywords: 'maritime institute, blue economy, West Africa, maritime security, sustainable fisheries'
  },
  about: {
    title: 'About Us - GOGMI Maritime Institute',
    description: 'Learn about GOGMI\'s mission, vision, and leadership team driving maritime excellence in West Africa.',
    keywords: 'about GOGMI, maritime institute, West Africa, team, mission, vision'
  },
  services: {
    title: 'Our Services - Maritime Solutions | GOGMI',
    description: 'Comprehensive maritime services including security solutions, blue economy development, research, and capacity building.',
    keywords: 'maritime services, security, training, research, blue economy, capacity building'
  },
  projects: {
    title: 'Our Projects - Maritime Initiatives | GOGMI',
    description: 'Explore GOGMI\'s transformative maritime projects across West Africa driving sustainable development.',
    keywords: 'maritime projects, West Africa projects, blue economy projects, sustainability'
  },
  contact: {
    title: 'Contact Us - Get In Touch | GOGMI',
    description: 'Contact GOGMI for maritime expertise, partnerships, and collaboration opportunities.',
    keywords: 'contact GOGMI, maritime consultation, partnership, collaboration'
  },
  blog: {
    title: 'News & Blog - Latest Maritime Insights | GOGMI',
    description: 'Stay updated with the latest maritime news, research insights, and success stories from West Africa.',
    keywords: 'maritime news, blog, insights, research, West Africa maritime'
  },
  resources: {
    title: 'Resources & Publications - Download Reports | GOGMI',
    description: 'Access maritime research reports, policy briefs, training materials, and multimedia content.',
    keywords: 'maritime resources, publications, research reports, downloads, policy briefs'
  }
};

export default SEO;