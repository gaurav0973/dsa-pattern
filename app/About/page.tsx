import { Book } from "lucide-react";

function About() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          About <span className="text-primary">Us</span>
        </h1>
        <div className="mt-2 h-1 w-24 bg-primary mx-auto rounded"></div>
      </div>

      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Learn DSA the Smart Way — Through Patterns
        </h2>
        <p className="text-lg text-muted-foreground">
          Instead of memorizing hundreds of problems, Pattern Sheet helps you master 
          **DSA patterns** that appear again and again in interviews.  
          When you understand the pattern, any problem becomes simpler.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Our Story</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Pattern Sheet was created with one purpose — to make learning DSA efficient. 
              Every top company asks problems based on a limited number of **repeating patterns**
              like Sliding Window, Two Pointers, Binary Search, Trees, and Dynamic Programming.
            </p>

            <p>
              Instead of jumping between random problems, our platform organizes everything 
              pattern-wise so you learn the “why” behind the solution, not just the steps.
            </p>

            <p>
              Whether you're preparing for placements or strengthening your foundation, 
              Pattern Sheet gives you a **structured, predictable, and pattern-based path** 
              to become strong at problem solving.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-8 bg-card rounded-lg border border-border shadow-lg">
          <div className="text-center">
            <Book className="h-16 w-16 text-primary mx-auto mb-4" />
            <span className="text-3xl font-bold text-foreground">Pattern-Sheet</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
