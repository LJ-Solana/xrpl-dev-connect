import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDevelopers, setFilteredDevelopers] = useState([
    { id: 1, name: 'Alice', skills: ['Smart Contracts', 'DeFi'] },
    { id: 2, name: 'Bob', skills: ['Core Ledger', 'Wallet Development'] },
    { id: 3, name: 'Charlie', skills: ['NFTs', 'Smart Contracts'] },
  ]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredDevelopers(
      // In a real app, this would be handled by the backend
      [{ id: 1, name: 'Alice', skills: ['Smart Contracts', 'DeFi'] },
       { id: 2, name: 'Bob', skills: ['Core Ledger', 'Wallet Development'] },
       { id: 3, name: 'Charlie', skills: ['NFTs', 'Smart Contracts'] }]
        .filter(dev => 
          dev.name.toLowerCase().includes(term) || 
          dev.skills.some(skill => skill.toLowerCase().includes(term))
        )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-500 text-center mb-8 font-mono">
          &lt;Explore XRPL Developers/&gt;
        </h1>
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="&gt; Search by name or skill"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full py-3 px-4 bg-gray-800 border border-green-500 rounded-md text-green-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono"
          />
          <MagnifyingGlassIcon className="absolute right-3 top-3 h-6 w-6 text-green-500" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevelopers.map(dev => (
            <div key={dev.id} className="bg-gray-800 border-2 border-green-500 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold text-gray-900">
                    {dev.name.charAt(0)}
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-green-400 font-mono">{dev.name}</h2>
                </div>
                <div className="mb-4">
                  {dev.skills.map(skill => (
                    <span key={skill} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-green-400 mr-2 mb-2 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/developer/${dev.id}`}
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-4 rounded transition duration-300 font-mono"
                >
                  &gt; View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;