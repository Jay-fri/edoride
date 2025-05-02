import React from 'react';
import { MapPin, Clock, QrCode } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Smart Transportation Management System
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Streamline your bus operations with real-time tracking, digital ticketing, and automated verification systems. The future of public transportation is here.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href='' target='_blank' className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
                Get Started
              </a>
              {/* <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg font-medium">
                Watch Demo
              </button> */}
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="ml-2 text-sm text-gray-600">Real-time Tracking</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-600" />
                <span className="ml-2 text-sm text-gray-600">Live Schedules</span>
              </div>
              <div className="flex items-center">
                <QrCode className="h-6 w-6 text-blue-600" />
                <span className="ml-2 text-sm text-gray-600">Digital Tickets</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-bluea-600 rounded-3xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-80">Current Location</p>
                    <p className="font-medium">Ring Road</p>
                  </div>
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-80">Next Stop</p>
                    <p className="font-medium">New Benin Market</p>
                  </div>
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-80">Passengers</p>
                    <p className="font-medium">11/20</p>
                  </div>
                  <QrCode className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;