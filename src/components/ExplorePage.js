import React, { useState } from 'react';
import { Button, Input, Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore XRPL Developers</h1>
      <Input
        type="text"
        placeholder="Search by name or skill"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full mb-6"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDevelopers.map(dev => (
          <Card key={dev.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${dev.name}`} />
                  <AvatarFallback>{dev.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold">{dev.name}</h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {dev.skills.map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Profile</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;