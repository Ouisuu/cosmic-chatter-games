import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "New Asteroid Belt Discovery",
    date: "2025-10-01",
    category: "Discovery",
    content: "Astronomers have discovered a previously unknown asteroid belt in the outer solar system, containing potentially thousands of rocky bodies.",
    priority: "high",
  },
  {
    id: 2,
    title: "Near-Earth Asteroid Flyby",
    date: "2025-09-28",
    category: "Alert",
    content: "A large asteroid will safely pass Earth this week at a distance of 4 million miles. No threat to our planet.",
    priority: "medium",
  },
  {
    id: 3,
    title: "Asteroid Mining Technology Advances",
    date: "2025-09-25",
    category: "Technology",
    content: "New robotic mining technology could make asteroid resource extraction viable within the next decade.",
    priority: "low",
  },
  {
    id: 4,
    title: "Ancient Asteroid Impact Revealed",
    date: "2025-09-20",
    category: "Research",
    content: "Scientists uncover evidence of a massive asteroid impact that occurred 2 billion years ago in Australia.",
    priority: "medium",
  },
  {
    id: 5,
    title: "Asteroid Defense System Test Success",
    date: "2025-09-15",
    category: "Defense",
    content: "NASA's planetary defense system successfully diverts test asteroid, proving Earth protection capabilities.",
    priority: "high",
  },
  {
    id: 6,
    title: "Rare Metal-Rich Asteroid Found",
    date: "2025-09-10",
    category: "Discovery",
    content: "Astronomers identify an asteroid composed primarily of rare metals valued at trillions of dollars.",
    priority: "medium",
  },
];

const News = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-primary text-primary-foreground";
      case "medium":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen pb-24 pt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Asteroid News
            </h1>
            <p className="text-muted-foreground">Latest updates from the cosmos</p>
          </div>

          <div className="space-y-6">
            {newsItems.map((item) => (
              <Card
                key={item.id}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:glow-cyan"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className={getPriorityColor(item.priority)}>
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                    <Star className="w-6 h-6 text-primary/50 flex-shrink-0" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
