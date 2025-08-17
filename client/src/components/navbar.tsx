import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Scroll just above the section
      window.scrollTo({ 
        top: offsetTop, 
        behavior: "smooth" 
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg font-heading">B</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("intro")}
              className="nav-link text-muted-foreground hover:text-primary"
              data-testid="link-intro"
            >
              Intro
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="nav-link text-muted-foreground hover:text-primary"
              data-testid="link-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-link text-muted-foreground hover:text-primary"
              data-testid="link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="nav-link text-muted-foreground hover:text-primary"
              data-testid="link-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="nav-link text-muted-foreground hover:text-primary"
              data-testid="link-achievements"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link text-muted-foreground hover:text-primary"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? (
                <Moon className="h-5 w-5 text-yellow-400" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-500" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2" data-testid="mobile-menu">
            <button
              onClick={() => scrollToSection("intro")}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors duration-300"
              data-testid="mobile-link-intro"
            >
              Intro
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors duration-300"
              data-testid="mobile-link-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors duration-300"
              data-testid="mobile-link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors duration-300"
              data-testid="mobile-link-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors duration-300"
              data-testid="mobile-link-achievements"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors duration-300"
              data-testid="mobile-link-contact"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
