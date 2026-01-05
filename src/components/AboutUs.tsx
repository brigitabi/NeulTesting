import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          About Us
        </h2>

        <div className="space-y-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to Cosmic Worlds, your gateway to exploring the wonders of our solar system
              and beyond. We are dedicated to bringing the beauty and mystery of planets to everyone,
              from curious beginners to seasoned astronomy enthusiasts.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">What We Do</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our platform provides comprehensive information about planets, their characteristics,
              and the latest discoveries in planetary science. We curate news from leading space
              agencies and research institutions to keep you updated on the latest cosmic developments.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-pink-400">Join Our Community</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're a student, educator, or space enthusiast, Cosmic Worlds is here to
              inspire and educate. Join thousands of explorers who share your passion for the cosmos
              and embark on a journey through the stars with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
