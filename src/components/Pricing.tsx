import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    price: "0",
    description: "Perfect for trying out the platform",
    credits: "10 Credits/month",
    features: [
      "Up to 5 pages per paper",
      "2 comparisons per month",
      "24-hour data retention",
      "Watermarked exports",
      "Community support",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro Educator",
    price: "15",
    description: "For serious teachers and tutors",
    credits: "500 Credits/month",
    features: [
      "Unlimited page count",
      "25 comparisons per month",
      "90-day data retention",
      "High-fidelity Math extraction",
      "PDF exports & shareable links",
      "Priority processing",
      "Email support",
    ],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Institution",
    price: "Custom",
    description: "For schools and departments",
    credits: "Unlimited usage",
    features: [
      "Everything in Pro",
      "Unlimited comparisons",
      "Permanent data library",
      "Team collaboration",
      "Admin dashboard",
      "SSO integration",
      "Dedicated support",
      "Custom deployment options",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section className="gradient-subtle py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4">Fair, Transparent Pricing</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Pay only for what you use. Credits roll over, no lock-in contracts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col transition-smooth ${
                plan.highlight 
                  ? "border-primary shadow-lg scale-105 md:scale-110" 
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              {plan.highlight && (
                <div className="gradient-hero rounded-t-lg px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium text-primary">{plan.credits}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.highlight ? "hero" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          All plans include fair-use AI processing. Need enterprise volume? {" "}
          <a href="#contact" className="font-medium text-primary hover:underline">
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
};
