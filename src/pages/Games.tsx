import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Target, Zap } from "lucide-react";
import { toast } from "sonner";

const Games = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  // Asteroid Clicker Game
  const [clickerScore, setClickerScore] = useState(0);
  
  // Asteroid Dodge Game
  const [dodgeScore, setDodgeScore] = useState(0);
  const [playerPosition, setPlayerPosition] = useState(50);
  const [asteroids, setAsteroids] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (activeGame === "dodge" && gameActive) {
      const interval = setInterval(() => {
        setAsteroids(prev => {
          const newAsteroids = prev
            .map(a => ({ ...a, y: a.y + 2 }))
            .filter(a => a.y < 100);
          
          // Check collision
          const collision = newAsteroids.some(
            a => a.y > 90 && Math.abs(a.x - playerPosition) < 10
          );
          
          if (collision) {
            setGameActive(false);
            toast.error(`Game Over! Score: ${dodgeScore}`);
            return [];
          }
          
          // Add new asteroid
          if (Math.random() < 0.05) {
            newAsteroids.push({
              id: Date.now(),
              x: Math.random() * 80 + 10,
              y: 0,
            });
          }
          
          setDodgeScore(prev => prev + 1);
          return newAsteroids;
        });
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [activeGame, gameActive, playerPosition, dodgeScore]);

  const handleClickerClick = () => {
    setClickerScore(prev => prev + 1);
    toast.success("+1 Asteroid!");
  };

  const startDodgeGame = () => {
    setDodgeScore(0);
    setAsteroids([]);
    setPlayerPosition(50);
    setGameActive(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setPlayerPosition(prev => Math.max(10, prev - 5));
    } else if (e.key === "ArrowRight") {
      setPlayerPosition(prev => Math.min(90, prev + 5));
    }
  };

  return (
    <div className="min-h-screen pb-24 pt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Space Games
            </h1>
            <p className="text-muted-foreground">Choose your asteroid adventure</p>
          </div>

          {!activeGame ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card 
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all cursor-pointer hover:glow-cyan"
                onClick={() => setActiveGame("clicker")}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-center">Asteroid Clicker</h3>
                  <p className="text-muted-foreground text-center">
                    Click the asteroids as fast as you can!
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Play Now
                  </Button>
                </div>
              </Card>

              <Card 
                className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all cursor-pointer hover:glow-purple"
                onClick={() => setActiveGame("dodge")}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <Rocket className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-center">Asteroid Dodge</h3>
                  <p className="text-muted-foreground text-center">
                    Navigate your ship through the asteroid field!
                  </p>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Play Now
                  </Button>
                </div>
              </Card>
            </div>
          ) : activeGame === "clicker" ? (
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Asteroid Clicker</h2>
                  <Button variant="outline" onClick={() => setActiveGame(null)}>
                    Back
                  </Button>
                </div>
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold text-primary">{clickerScore}</div>
                  <p className="text-muted-foreground">Asteroids Destroyed</p>
                  <button
                    onClick={handleClickerClick}
                    className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform glow-cyan"
                  >
                    <Zap className="w-16 h-16 text-primary-foreground" />
                  </button>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/20">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Asteroid Dodge</h2>
                  <Button variant="outline" onClick={() => setActiveGame(null)}>
                    Back
                  </Button>
                </div>
                
                {!gameActive ? (
                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Use Arrow keys ← → to move your ship
                    </p>
                    <Button onClick={startDodgeGame} className="bg-secondary hover:bg-secondary/90">
                      Start Game
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center text-2xl font-bold text-secondary">
                      Score: {Math.floor(dodgeScore / 10)}
                    </div>
                    <div 
                      className="relative w-full h-96 bg-background/50 rounded-lg border border-secondary/20 overflow-hidden"
                      tabIndex={0}
                      onKeyDown={handleKeyPress}
                    >
                      {/* Player Ship */}
                      <div
                        className="absolute bottom-4 transform -translate-x-1/2 transition-all duration-100"
                        style={{ left: `${playerPosition}%` }}
                      >
                        <Rocket className="w-8 h-8 text-secondary rotate-180" />
                      </div>
                      
                      {/* Asteroids */}
                      {asteroids.map(asteroid => (
                        <div
                          key={asteroid.id}
                          className="absolute w-6 h-6 bg-primary rounded-full"
                          style={{
                            left: `${asteroid.x}%`,
                            top: `${asteroid.y}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Games;
