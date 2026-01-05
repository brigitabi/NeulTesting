import React from 'react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  category: string;
}

const News: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'New Evidence of Water on Mars Discovered',
      date: 'January 3, 2025',
      summary: 'Scientists have discovered new evidence suggesting the presence of liquid water beneath the Martian surface, raising hopes for potential microbial life.',
      category: 'Mars',
    },
    {
      id: 2,
      title: 'Jupiter\'s Moon Europa Shows Promise for Life',
      date: 'December 28, 2024',
      summary: 'Recent data from the James Webb Space Telescope reveals organic compounds on Europa\'s icy surface, strengthening the case for a subsurface ocean.',
      category: 'Jupiter',
    },
    {
      id: 3,
      title: 'Saturn\'s Rings Are Disappearing',
      date: 'December 15, 2024',
      summary: 'NASA confirms that Saturn\'s iconic rings are gradually disappearing and could vanish within 100 million years due to gravitational pull.',
      category: 'Saturn',
    },
    {
      id: 4,
      title: 'Venus Mission Approved for 2027',
      date: 'December 1, 2024',
      summary: 'Space agencies have approved a new mission to study Venus\'s atmosphere and geology, launching in 2027 to uncover the planet\'s mysterious past.',
      category: 'Venus',
    },
    {
      id: 5,
      title: 'Neptune\'s Dark Storms Observed in Detail',
      date: 'November 20, 2024',
      summary: 'Advanced telescopes capture unprecedented images of Neptune\'s massive dark storms, providing insights into the planet\'s turbulent atmosphere.',
      category: 'Neptune',
    },
    {
      id: 6,
      title: 'Mercury\'s Core Reveals Surprising Composition',
      date: 'November 10, 2024',
      summary: 'New studies suggest Mercury\'s core is much larger than previously thought, making up 85% of the planet\'s radius.',
      category: 'Mercury',
    },
  ];

  return (
    <section id="news" className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 rounded-full">
                  {item.category}
                </span>
                <span className="text-sm text-gray-400">{item.date}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-blue-300 hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.summary}
              </p>

              <button className="mt-4 text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center space-x-1">
                <span>Read more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
