import React from 'react';
import { Leaf, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Men\'s Shoes', href: '#' },
        { name: 'Women\'s Shoes', href: '#' },
        { name: 'Runners', href: '#' },
        { name: 'Loungers', href: '#' },
        { name: 'Slip-Ons', href: '#' },
        { name: 'Hikers', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Investors', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '#' },
        { name: 'Size Guide', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Care Instructions', href: '#' }
      ]
    },
    {
      title: 'Social Impact',
      links: [
        { name: 'Carbon Neutral', href: '#' },
        { name: 'Material Innovation', href: '#' },
        { name: 'Regenerative Agriculture', href: '#' },
        { name: 'Environmental Fund', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">allbirds</span>
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Comfortable, sustainable shoes made from innovative natural materials. 
              Better for your feet, better for the planet.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Accessibility</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">California Privacy Rights</a>
            </div>
            
            <div className="text-sm text-gray-600">
              © 2025 Allbirds, Inc. All rights reserved.
            </div>
          </div>

          {/* Sustainability Badge */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-full">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-800">Certified B Corporation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};