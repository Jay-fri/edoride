import React from 'react';
import { CheckCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: 'Improved User Experience',
      items: [
        'Efficient trip planning',
        'Real-time bus tracking',
        'Digital ticket management',
        'Seamless payment process',
      ],
    },
    {
      title: 'Increased Efficiency',
      items: [
        'Automated verification systems',
        'Reduced operational errors',
        'Streamlined boarding process',
        'Optimized route management',
      ],
    },
    {
      title: 'Enhanced Safety',
      items: [
        'Verified drivers and conductors',
        'Real-time location monitoring',
        'Emergency response system',
        'Passenger capacity control',
      ],
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose TransitPro</h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the advantages of our comprehensive transportation management system
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
              <ul className="mt-4 space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <span className="ml-2 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;