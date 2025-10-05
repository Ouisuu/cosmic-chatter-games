import { Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen pb-20 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-primary/30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <Rocket className="w-20 h-20 mx-auto text-primary glow-cyan animate-bounce" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Asteroid Explorer
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Journey through the cosmos, play exciting space games, and discover the latest asteroid news
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <Link to="/games">
              <div className="group bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-cyan cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Space Games</h3>
                <p className="text-sm text-muted-foreground">
                  Play asteroid-themed mini games
                </p>
              </div>
            </Link>

            <Link to="/news">
              <div className="group bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:glow-purple cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Asteroid News</h3>
                <p className="text-sm text-muted-foreground">
                  Latest discoveries and updates
                </p>
              </div>
            </Link>

            <Link to="/profile">
              <div className="group bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Your Profile</h3>
                <p className="text-sm text-muted-foreground">
                  View your space journey stats
                </p>
              </div>
            </Link>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Link to="/games">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan text-lg px-8 py-6"
              >
                Start Exploring
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
