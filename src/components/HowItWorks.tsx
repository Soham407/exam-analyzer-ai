import { Card, CardContent } from "@/components/ui/card";
import { Upload, Brain, BarChart3, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "1",
    title: "Upload Papers",
    description: "Drag and drop 2-3 exam PDFs. We support any format—typed, scanned, or handwritten.",
  },
  {
    icon: Brain,
    step: "2",
    title: "AI Extraction",
    description: "Our hybrid AI engine extracts questions, marks, and structure—including complex Math notation.",
  },
  {
    icon: BarChart3,
    step: "3",
    title: "Semantic Analysis",
    description: "Advanced vector search finds similar questions across papers with confidence scores.",
  },
  {
    icon: Download,
    step: "4",
    title: "Export & Share",
    description: "Download detailed reports, share insights with colleagues, and build your exam library.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4">How It Works</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From upload to insight in four simple steps. No technical expertise required.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-gradient-to-r from-primary to-accent lg:block" />
                )}
                <Card className="relative border-border/50 transition-smooth hover:border-primary/30 hover:shadow-md">
                  <CardContent className="pt-6 text-center">
                    <div className="relative mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                      <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full gradient-hero text-xs font-bold text-primary-foreground">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
