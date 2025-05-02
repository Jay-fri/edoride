import React from 'react';
import { MapPin, Ticket, Clock, QrCode, CreditCard, Bell, MapPinOff } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const Features = () => {
  const features = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Real-time Location Tracking',
      description: 'Track buses and passengers in real-time with precise GPS integration.',
    },
    {
      icon: <Ticket className="h-6 w-6 text-blue-600" />,
      title: 'Digital Ticketing System',
      description: 'Purchase and manage tickets seamlessly through our digital platform.',
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Schedule Management',
      description: 'View and plan trips with accurate, up-to-date bus schedules.',
    },
    {
      icon: <QrCode className="h-6 w-6 text-blue-600" />,
      title: 'Barcode Verification',
      description: 'Secure verification system for buses, drivers, and conductors.',
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      title: 'Payment Verification',
      description: 'Instant payment confirmation through barcode scanning.',
    },
    {
      icon: <Bell className="h-6 w-6 text-blue-600" />,
      title: 'Smart Notifications',
      description: 'Real-time alerts for boarding, destinations, and system updates.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to manage your transportation system efficiently
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;