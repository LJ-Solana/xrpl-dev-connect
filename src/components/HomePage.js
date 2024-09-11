import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlusIcon, MagnifyingGlassIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const HomePage = () => (
  <div className="min-h-screen bg-gray-900 flex flex-col">
    <div className="container mx-auto px-6 py-20 flex-grow">
      <h1 className="text-6xl font-extrabold text-green-500 text-center mb-6 font-mono">
        &lt;XRPL Dev Connect/&gt;
      </h1>
      <p className="text-2xl text-green-400 text-center mb-16 font-mono">
        Empowering XRPL developers to connect, collaborate, and innovate
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden border-2 border-green-500 transition duration-300 hover:shadow-2xl hover:scale-105">
          <div className="px-8 py-6">
            <div className="flex items-center mb-4">
              <UserPlusIcon className="h-8 w-8 text-green-400 mr-3" />
              <h2 className="text-3xl font-bold text-green-500 font-mono">&gt; Register Your Skills</h2>
            </div>
            <p className="text-lg text-green-400 font-mono">Showcase your XRPL expertise and get matched with cutting-edge projects.</p>
          </div>
          <div className="px-8 py-6">
            <Link to="/register" className="block w-full bg-gray-800 hover:bg-gray-700 text-green-400 font-bold py-3 px-6 rounded-lg text-center transition duration-300 ease-in-out font-mono text-lg">
              &gt; Register Now
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden border-2 border-green-500 transition duration-300 hover:shadow-2xl hover:scale-105">
          <div className="px-8 py-6">
            <div className="flex items-center mb-4">
              <MagnifyingGlassIcon className="h-8 w-8 text-green-400 mr-3" />
              <h2 className="text-3xl font-bold text-green-500 font-mono">&gt; Explore Developers</h2>
            </div>
            <p className="text-lg text-green-400 font-mono">Discover talented XRPL developers and groundbreaking projects.</p>
          </div>
          <div className="px-8 py-6">
            <Link to="/explore" className="block w-full bg-gray-800 hover:bg-gray-700 text-green-400 font-bold py-3 px-6 rounded-lg text-center transition duration-300 ease-in-out font-mono text-lg">
              &gt; Start Exploring
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-green-500 mb-12 font-mono">&gt; Why XRPL Dev Connect?</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gray-900 p-6 rounded-xl border-2 border-green-500 hover:bg-gray-800 transition duration-300 hover:shadow-xl">
            <CodeBracketIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <p className="mt-2 text-lg text-green-400 font-mono">Access cutting-edge XRPL technology</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border-2 border-green-500 hover:bg-gray-800 transition duration-300 hover:shadow-xl">
            <RocketLaunchIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <p className="mt-2 text-lg text-green-400 font-mono">Accelerate projects with skilled collaborators</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border-2 border-green-500 hover:bg-gray-800 transition duration-300 hover:shadow-xl">
            <UserPlusIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <p className="mt-2 text-lg text-green-400 font-mono">Expand your professional network</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border-2 border-green-500 hover:bg-gray-800 transition duration-300 hover:shadow-xl">
            <MagnifyingGlassIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <p className="mt-2 text-lg text-green-400 font-mono">Discover innovative XRPL projects</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;