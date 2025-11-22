import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(214_95%_65%/0.1),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(180_77%_48%/0.1),_transparent_50%)]" />
      
      <div className="container relative mx-auto px-4 py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Exam Analysis</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Analyze 10 Years of Exams
            <br />
            <span className="gradient-hero bg-clip-text text-transparent">In 10 Minutes</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg text-muted-foreground md:text-xl lg:text-2xl">
            The only tool that truly understands exam structure. Upload papers, extract questions, 
            and discover patterns across years with AI-powered semantic analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="hero" asChild>
              <Link to="/upload">
                Start Comparing Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">
                <FileText className="mr-2 h-5 w-5" />
                See How It Works
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <p className="mt-8 text-sm text-muted-foreground">
            Trusted by educators analyzing <span className="font-semibold text-foreground">10,000+</span> exam papers
          </p>
        </div>
      </div>
    </section>
  );
};
