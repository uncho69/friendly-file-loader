
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Wallet, ArrowRight, Flower } from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  const handleConnect = () => {
    toast({
      title: "Wallet Connection",
      description: "Wallet connection feature coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/fd7dcf9c-b1fb-447b-98cf-899d1b93a68a.png" 
            alt="Shroomiez Mushroom" 
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold">Shroomiez NFT</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-pink-300 transition-colors">Home</a>
          <a href="#" className="hover:text-pink-300 transition-colors">Collection</a>
          <a href="#" className="hover:text-pink-300 transition-colors">Roadmap</a>
          <a href="#" className="hover:text-pink-300 transition-colors">Team</a>
        </div>
        <Button 
          onClick={handleConnect}
          className="bg-pink-500 hover:bg-pink-600"
        >
          <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Badge className="mb-4 bg-pink-500">Coming Soon</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-pink-300">Shroomiez</span>
          </h1>
          <p className="text-lg mb-8 text-purple-200">
            Join our magical mushroom universe with unique digital collectibles. Each Shroomiez NFT is one-of-a-kind with special properties and traits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
              Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-purple-400 text-purple-100 hover:bg-purple-800">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-pink-500 rounded-full opacity-75 blur-xl animate-pulse"></div>
            <div className="relative bg-purple-800 rounded-full p-4 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <img 
                src="/lovable-uploads/fd7dcf9c-b1fb-447b-98cf-899d1b93a68a.png" 
                alt="Shroomiez Mushroom" 
                className="w-40 h-40 md:w-48 md:h-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Shroomiez NFT?</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">Discover the benefits of joining our magical mushroom community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-purple-800/50 border-purple-600">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 bg-pink-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-pink-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Unique Artwork</h3>
              <p className="text-purple-200">Each Shroomiez is hand-crafted with unique traits and properties</p>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-800/50 border-purple-600">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 bg-pink-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <Wallet className="h-8 w-8 text-pink-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Benefits</h3>
              <p className="text-purple-200">Get exclusive access to events, drops, and community perks</p>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-800/50 border-purple-600">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 bg-pink-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/fd7dcf9c-b1fb-447b-98cf-899d1b93a68a.png" 
                  alt="Shroomiez Mushroom" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Future Roadmap</h3>
              <p className="text-purple-200">An exciting journey with upcoming releases and collaborations</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <Card className="bg-gradient-to-r from-purple-900 to-pink-900 border-pink-500 p-8">
          <CardContent className="p-0 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-lg">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-purple-200 mb-0">Be the first to know about new drops, exclusive offers, and community events.</p>
            </div>
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
              Join Discord <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-purple-950 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/fd7dcf9c-b1fb-447b-98cf-899d1b93a68a.png" 
                alt="Shroomiez Mushroom" 
                className="h-6 w-6"
              />
              <span className="text-xl font-bold">Shroomiez NFT</span>
            </div>
            <div className="text-sm text-purple-300">
              © 2023 Shroomiez NFT. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
