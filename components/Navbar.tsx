import { Book } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const NavItems = [
            { name: "Home", href: "/" },
            { name: "Patterns", href: "/Patterns" },
            { name: "Pricing", href: "/Pricing" },
            { name: "FAQs", href: "/FAQs" },
            { name: "About", href: "/About" }
          ];
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Book className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Pattern-Sheet</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {NavItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button variant="link" size="sm" className="text-sm text-muted-foreground hover:text-foreground">
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm">Log In</Button>
          <Button size="sm">Sign Up</Button>
        </div>

      </div>
    </header>
  );
}
