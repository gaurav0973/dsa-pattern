import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from "next/link";
function Home() {
  return (
    <section className="relative z-10 text-center py-24 px-4">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 -z-10 mx-auto max-w-3xl blur-[120px] opacity-40 bg-primary/30 rounded-full"></div>

      {/* Tagline */}
      <h2 className="text-sm font-semibold text-primary tracking-widest uppercase">
        Pattern-Based DSA Learning
      </h2>

      {/* Main Heading */}
      <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
        Learn DSA the Smart Way  
        <br />
        With a{" "}
        <span className="bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
          Pattern-Driven Approach
        </span>
      </h1>

      {/* Subheading */}
      <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
        Master essential DSA patterns like Sliding Window, Two Pointers, Trees, Graphs, 
        Dynamic Programming, and more.  
        Understand patterns → unlock every coding interview problem.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link href="/Patterns">
          <Button size="lg">
            Explore Patterns
          </Button>
        </Link>
        <Link href="/Pricing">
          <Button variant="link" className="text-base font-medium flex items-center gap-2 hover:underline">
            See Pricing
            <ArrowRight className="h-4 w-4"/>
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
