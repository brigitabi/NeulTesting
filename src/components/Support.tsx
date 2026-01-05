import React, { useState } from 'react';

const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="support" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold">Email Support</h3>
            </div>
            <p className="text-gray-400">support@cosmicworlds.com</p>
            <p className="text-sm text-gray-500 mt-2">We typically respond within 24 hours</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold">Hours of Operation</h3>
            </div>
            <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            <p className="text-gray-400">Saturday - Sunday: Closed</p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Contact Form</h3>

          {submitted ? (
            <div className="bg-green-600/20 border border-green-500 rounded-lg p-6 text-center">
              <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl font-semibold text-green-400">Thank you for your message!</p>
              <p className="text-gray-400 mt-2">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="bug">Report a Bug</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">FAQ</h3>
          <div className="space-y-4">
            <details className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl text-left">
              <summary className="font-semibold cursor-pointer text-lg hover:text-yellow-400 transition">
                How can I contribute to Cosmic Worlds?
              </summary>
              <p className="text-gray-400 mt-4">
                We welcome contributions from space enthusiasts! You can submit articles, share discoveries,
                or help us improve our content by contacting us through the form above.
              </p>
            </details>

            <details className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl text-left">
              <summary className="font-semibold cursor-pointer text-lg hover:text-yellow-400 transition">
                Is the information on this site accurate?
              </summary>
              <p className="text-gray-400 mt-4">
                Yes! We source our information from NASA, ESA, and other reputable space agencies.
                All data is regularly updated to reflect the latest discoveries.
              </p>
            </details>

            <details className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl text-left">
              <summary className="font-semibold cursor-pointer text-lg hover:text-yellow-400 transition">
                Can I use this site for educational purposes?
              </summary>
              <p className="text-gray-400 mt-4">
                Absolutely! Cosmic Worlds is designed to be educational and is perfect for students,
                teachers, and anyone interested in learning about our solar system.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
