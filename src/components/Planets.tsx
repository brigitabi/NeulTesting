import React from 'react';

interface Planet {
  name: string;
  description: string;
  color: string;
  size: string;
  distance: string;
  moons: number;
}

const Planets: React.FC = () => {
  const planets: Planet[] = [
    {
      name: 'Mercury',
      description: 'The smallest planet and closest to the Sun',
      color: 'bg-gray-400',
      size: '4,879 km',
      distance: '57.9M km',
      moons: 0,
    },
    {
      name: 'Venus',
      description: 'The hottest planet with a toxic atmosphere',
      color: 'bg-yellow-600',
      size: '12,104 km',
      distance: '108.2M km',
      moons: 0,
    },
    {
      name: 'Earth',
      description: 'Our home, the only known planet with life',
      color: 'bg-blue-500',
      size: '12,742 km',
      distance: '149.6M km',
      moons: 1,
    },
    {
      name: 'Mars',
      description: 'The Red Planet, a target for future colonization',
      color: 'bg-red-600',
      size: '6,779 km',
      distance: '227.9M km',
      moons: 2,
    },
    {
      name: 'Jupiter',
      description: 'The largest planet with a Great Red Spot',
      color: 'bg-orange-400',
      size: '139,820 km',
      distance: '778.5M km',
      moons: 95,
    },
    {
      name: 'Saturn',
      description: 'Known for its beautiful ring system',
      color: 'bg-yellow-300',
      size: '116,460 km',
      distance: '1.43B km',
      moons: 146,
    },
    {
      name: 'Uranus',
      description: 'An ice giant that rotates on its side',
      color: 'bg-cyan-400',
      size: '50,724 km',
      distance: '2.87B km',
      moons: 28,
    },
    {
      name: 'Neptune',
      description: 'The windiest planet in our solar system',
      color: 'bg-blue-700',
      size: '49,244 km',
      distance: '4.50B km',
      moons: 16,
    },
  ];

  return (
    <section id="planets" className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Explore the Planets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {planets.map((planet) => (
            <div
              key={planet.name}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-700"
            >
              <div className="flex justify-center mb-4">
                <div className={`${planet.color} rounded-full w-24 h-24 shadow-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">{planet.name[0]}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-3 text-purple-300">
                {planet.name}
              </h3>

              <p className="text-gray-400 text-center mb-4 min-h-[48px]">
                {planet.description}
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Diameter:</span>
                  <span className="text-gray-300 font-medium">{planet.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Distance from Sun:</span>
                  <span className="text-gray-300 font-medium">{planet.distance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Moons:</span>
                  <span className="text-gray-300 font-medium">{planet.moons}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planets;
