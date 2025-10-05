import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Rocket, Star } from "lucide-react";

const Profile = () => {
  const stats = [
    { label: "Games Played", value: "24", icon: Rocket },
    { label: "High Score", value: "1,847", icon: Target },
    { label: "Achievements", value: "8", icon: Trophy },
    { label: "News Read", value: "156", icon: Star },
  ];

  const achievements = [
    { name: "First Steps", description: "Played your first game", unlocked: true },
    { name: "News Explorer", description: "Read 100 news articles", unlocked: true },
    { name: "Asteroid Hunter", description: "Score 1000+ in any game", unlocked: true },
    { name: "Space Master", description: "Complete all games", unlocked: false },
  ];

  return (
    <div className="min-h-screen pb-24 pt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Profile
            </h1>
            <p className="text-muted-foreground">Track your space exploration journey</p>
          </div>

          {/* Profile Card */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-24 h-24 border-4 border-primary glow-cyan">
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-2xl text-primary-foreground">
                  SE
                </AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left flex-1">
                <h2 className="text-3xl font-bold mb-2">Space Explorer</h2>
                <p className="text-muted-foreground mb-4">Cosmic Adventurer</p>
                <div className="flex gap-2 justify-center md:justify-start">
                  <Badge className="bg-primary text-primary-foreground">Level 12</Badge>
                  <Badge className="bg-secondary text-secondary-foreground">Pro Player</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:glow-cyan"
                >
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Achievements */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.name}
                  className={`p-4 rounded-lg border transition-all ${
                    achievement.unlocked
                      ? "bg-primary/10 border-primary/30 glow-cyan"
                      : "bg-muted/10 border-muted/30 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.unlocked ? "bg-primary/20" : "bg-muted/20"
                      }`}
                    >
                      <Trophy
                        className={`w-6 h-6 ${
                          achievement.unlocked ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{achievement.name}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                    {achievement.unlocked && (
                      <Badge className="bg-primary text-primary-foreground">Unlocked</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
