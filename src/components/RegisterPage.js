import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';

const skills = ['Smart Contracts', 'Core Ledger', 'Wallet Development', 'DeFi', 'NFTs', 'XRPL Hooks', 'Tokenization'];

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    skills: [],
    bio: '',
    github: '',
    linkedin: '',
    twitter: '',
    projects: [{ name: '', description: '' }]
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...formData.projects];
    newProjects[index][field] = value;
    setFormData({ ...formData, projects: newProjects });
  };

  const addProject = () => {
    setFormData({ ...formData, projects: [...formData.projects, { name: '', description: '' }] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Registration successful!');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-10">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-green-500 font-mono">
            &lt;Register Your Skills/&gt;
          </h2>
        </div>
        <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-green-500 placeholder-gray-500 bg-gray-800 text-green-400 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-base font-mono"
                placeholder="&gt; Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="title" className="sr-only">Your Title</label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-green-500 placeholder-gray-500 bg-gray-800 text-green-400 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-base font-mono"
                placeholder="&gt; Your Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-lg font-medium text-green-400 font-mono">&gt; Skills</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <label key={skill} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500 bg-gray-800 border-green-500"
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={handleSkillChange}
                  />
                  <span className="ml-2 text-green-400 font-mono">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="bio" className="sr-only">Your Bio</label>
            <textarea
              id="bio"
              name="bio"
              rows="5"
              className="appearance-none rounded-md relative block w-full px-4 py-3 border border-green-500 placeholder-gray-500 bg-gray-800 text-green-400 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-base font-mono"
              placeholder="&gt; Your Bio"
              value={formData.bio}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="github" className="sr-only">Your GitHub</label>
              <input
                id="github"
                name="github"
                type="text"
                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-green-500 placeholder-gray-500 bg-gray-800 text-green-400 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-base font-mono"
                placeholder="&gt; Your GitHub"
                value={formData.github}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="linkedin" className="sr-only">Your LinkedIn</label>
              <input
                id="linkedin"
                name="linkedin"
                type="text"
                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-green-500 placeholder-gray-500 bg-gray-800 text-green-400 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-base font-mono"
                placeholder="&gt; Your LinkedIn"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="twitter" className="sr-only">Your Twitter</label>
              <input
                id="twitter"
                name="twitter"
                type="text"
                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-green-500 placeholder-gray-500 bg-gray-800 text-green-400 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-base font-mono"
                placeholder="&gt; Your Twitter"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>
          </div>

          {formData.projects.map((project, index) => (
            <div key={index} className="space-y-3">
              <input
                type="text"
                className="appearance-none rounded-t-md relative block w-full px-4 py-3 border border-green-500 placeholder-gray-500 bg-gray-800 text-green-400 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-base font-mono"
                placeholder="&gt; Project Name"
                value={project.name}
                onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
              />
              <textarea
                rows="4"
                className="appearance-none rounded-b-md relative block w-full px-4 py-3 border border-green-500 placeholder-gray-500 bg-gray-800 text-green-400 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-base font-mono"
                placeholder="&gt; Project Description"
                value={project.description}
                onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
              ></textarea>
            </div>
          ))}

          <div>
            <button
              type="button"
              onClick={addProject}
              className="inline-flex items-center px-6 py-3 border border-green-500 text-base font-medium rounded-md shadow-sm text-green-400 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-mono"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              &gt; Add Project
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-6 border border-green-500 text-base font-medium rounded-md text-green-400 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-mono"
            >
              &gt; Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;