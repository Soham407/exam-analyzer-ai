import { Button } from "@/components/ui/button";
import { FileCheck2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-hero">
            <FileCheck2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="hidden sm:inline-block">ExamCompare</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Pricing
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            How It Works
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/upload">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
