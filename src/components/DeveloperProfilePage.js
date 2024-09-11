import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const DeveloperProfilePage = () => {
  const { id } = useParams();
  
  const developer = {
    id: id,
    name: 'Alice Johnson',
    title: 'Senior XRPL Developer',
    skills: ['Smart Contracts', 'DeFi', 'Tokenization', 'XRPL Hooks'],
    bio: 'Passionate about building decentralized applications on the XRP Ledger. Experienced in smart contract development and DeFi protocols.',
    projects: [
      { name: 'XRPL DEX', description: 'A decentralized exchange built on the XRP Ledger' },
      { name: 'NFT Marketplace', description: 'An NFT marketplace leveraging XRPL\'s native NFT support' },
    ],
    socialLinks: {
      github: 'https://github.com/alicejohnson',
      linkedin: 'https://linkedin.com/in/alicejohnson',
      twitter: 'https://twitter.com/alicejohnson',
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/explore" className="flex items-center text-green-400 hover:text-green-300 mb-8 font-mono">
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          &lt; Back to Explore
        </Link>
        <div className="bg-gray-800 border-2 border-green-500 rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-3xl font-bold text-gray-900">
                {developer.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-bold text-green-400 font-mono">{developer.name}</h1>
                <p className="text-xl text-green-300 font-mono">{developer.title}</p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-green-400 mb-2 font-mono">&gt; Skills</h2>
              <div className="flex flex-wrap">
                {developer.skills.map(skill => (
                  <span key={skill} className="bg-gray-700 text-green-400 px-3 py-1 rounded-full text-sm font-mono mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-green-400 mb-2 font-mono">&gt; Bio</h2>
              <p className="text-green-300 font-mono">{developer.bio}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-green-400 mb-2 font-mono">&gt; Projects</h2>
              <ul className="space-y-4">
                {developer.projects.map(project => (
                  <li key={project.name} className="border border-green-500 rounded p-4">
                    <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">{project.name}</h3>
                    <p className="text-green-300 font-mono">{project.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-2 font-mono">&gt; Connect</h2>
              <div className="flex space-x-4">
                <a href={developer.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-mono flex items-center">
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a href={developer.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-mono flex items-center">
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
                <a href={developer.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-mono flex items-center">
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfilePage;