import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Target, Shield, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Extraction",
    description: "Advanced AI extracts questions, marks, and structure from any exam format—including complex Math and Science notation.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get similarity analysis in minutes, not hours. Our optimized pipeline processes papers at blazing speed.",
  },
  {
    icon: Target,
    title: "Precision Matching",
    description: "Semantic search finds conceptually similar questions, even when worded differently. Confidence scores included.",
  },
  {
    icon: Shield,
    title: "Cost Protection",
    description: "Smart caching and deduplication mean you never pay twice for the same paper. Fair credit-based pricing.",
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Visualize how exam patterns evolve over time with interactive heatmaps and comprehensive statistics.",
  },
  {
    icon: Users,
    title: "Built for Teams",
    description: "Share insights, collaborate on analysis, and build institutional knowledge with team workspaces.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4">Why Educators Choose Us</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Unlike generic AI tools, we specialize in exam structure. Every feature is designed for education professionals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 transition-smooth hover:shadow-md hover:border-primary/30">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
