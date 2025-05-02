import React from 'react';
import { Smartphone, Globe, Shield, Zap } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Advanced Technology</h2>
          <p className="mt-4 text-xl text-gray-600">
            Built with cutting-edge technology for reliable performance
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">GPS Integration</h3>
            <p className="mt-2 text-gray-600">Real-time location tracking with high accuracy</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
              <Smartphone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Mobile First</h3>
            <p className="mt-2 text-gray-600">Optimized for all mobile devices</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Secure Platform</h3>
            <p className="mt-2 text-gray-600">Enterprise-grade security measures</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Real-time Updates</h3>
            <p className="mt-2 text-gray-600">Instant notifications and updates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;