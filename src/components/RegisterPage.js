import React, { useState } from 'react';
import { Button, Input } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const skills = ['Smart Contracts', 'Core Ledger', 'Wallet Development', 'DeFi', 'NFTs'];

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend API
    console.log('Submitted:', { name, selectedSkills });
    alert('Registration successful!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Register Your Skills</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full"
        />
        <Select onValueChange={(value) => setSelectedSkills(prev => [...prev, value])}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your skills" />
          </SelectTrigger>
          <SelectContent>
            {skills.map(skill => (
              <SelectItem key={skill} value={skill}>{skill}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex flex-wrap gap-2">
          {selectedSkills.map(skill => (
            <Button key={skill} variant="outline" onClick={() => setSelectedSkills(prev => prev.filter(s => s !== skill))}>
              {skill} ✕
            </Button>
          ))}
        </div>
        <Button type="submit" className="w-full">Register</Button>
      </form>
    </div>
  );
};

export default RegisterPage;