import React from 'react';
import { Leaf, Recycle, Globe, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

export const SustainabilitySection: React.FC = () => {
  const sustainabilityFeatures = [
    {
      icon: Leaf,
      title: 'Natural Materials',
      description: 'Made from renewable resources like eucalyptus trees, merino wool, and sugarcane.',
      metric: '90% Natural'
    },
    {
      icon: Recycle,
      title: 'Circular Design',
      description: 'Every shoe is designed to be returned and recycled at the end of its life.',
      metric: '100% Recyclable'
    },
    {
      icon: Globe,
      title: 'Carbon Neutral',
      description: 'We measure and offset our entire carbon footprint to be carbon neutral.',
      metric: '0 Net Carbon'
    },
    {
      icon: Award,
      title: 'B Corp Certified',
      description: 'Meeting the highest standards of social and environmental performance.',
      metric: 'Certified Since 2016'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-emerald-600 mb-4">
            <Leaf className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Sustainability</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Better for Your Feet, Better for the Planet
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to prove that comfort, style, and sustainability aren't 
            mutually exclusive. Every step you take in our shoes is a step toward a better future.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sustainabilityFeatures.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="text-2xl font-bold text-emerald-600">
                  {feature.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Environmental Impact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Trees Planted</span>
                  <span className="text-2xl font-bold text-emerald-600">1.2M+</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Plastic Bottles Recycled</span>
                  <span className="text-2xl font-bold text-emerald-600">50M+</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Carbon Offset (tons)</span>
                  <span className="text-2xl font-bold text-emerald-600">25,000+</span>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600">Renewable Energy Used</span>
                  <span className="text-2xl font-bold text-emerald-600">100%</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sustainable materials"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-emerald-600 bg-opacity-10 rounded-xl" />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="secondary">
              Learn More About Our Impact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};