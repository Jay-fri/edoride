import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Get Started Today</h2>
            <p className="mt-4 text-lg text-gray-600">
              Ready to transform your transportation operations? Contact us for a demo or consultation.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-600">contact@transitpro.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-600">+234 9056547738</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-600">Live chat available 24/7</span>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;