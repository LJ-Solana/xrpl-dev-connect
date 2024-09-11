import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = ({ children, onLogout }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <nav className="bg-gray-900 border-b border-green-500 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center text-green-500 text-xl font-mono font-bold">
                &lt;XRPL_Dev_Connect/&gt;
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/" className="text-green-400 hover:bg-gray-800 hover:text-green-300 px-3 py-2 rounded-md text-sm font-mono">
                  &gt; Home
                </Link>
                <Link to="/explore" className="text-green-400 hover:bg-gray-800 hover:text-green-300 px-3 py-2 rounded-md text-sm font-mono">
                  &gt; Explore
                </Link>
              </div>
            </div>
            <button onClick={onLogout} className="text-green-400 hover:bg-gray-800 hover:text-green-300 px-3 py-2 rounded-md text-sm font-mono">
              &gt; Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 border-t border-green-500 text-green-400 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-mono">&copy; 2024 XRPL_Dev_Connect. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 font-mono">Terms_of_Service</a>
              <a href="#" className="hover:text-green-300 font-mono">Privacy_Policy</a>
              <a href="#" className="hover:text-green-300 font-mono">Contact_Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;