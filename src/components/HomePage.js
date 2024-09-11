import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

const HomePage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-4">Welcome to XRPL Dev Connect</h1>
    <p className="text-xl mb-8">Connect with other XRPL developers and find exciting projects!</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Register Your Skills</h2>
        </CardHeader>
        <CardContent>
          <p>Showcase your XRPL development skills and get matched with projects.</p>
        </CardContent>
        <CardFooter>
          <Link to="/register">
            <Button>Register Now</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Explore Developers</h2>
        </CardHeader>
        <CardContent>
          <p>Discover talented XRPL developers and their projects.</p>
        </CardContent>
        <CardFooter>
          <Link to="/explore">
            <Button>Start Exploring</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  </div>
);

export default HomePage;