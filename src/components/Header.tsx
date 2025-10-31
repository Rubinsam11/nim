import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <svg className="w-8 h-8" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 5L15 15H25L20 5Z" />
              <rect x="17" y="15" width="6" height="20" />
            </svg>
            <div className="ml-2">
              <div className="text-sm font-bold">NIM</div>
              <div className="text-xs">TECHNOLOGIES</div>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            Home
          </Link>
          <Link to="/services" className="hover:opacity-80 transition-opacity">
            Services
          </Link>
          <Link to="/products" className="hover:opacity-80 transition-opacity">
            Products
          </Link>
          <Link to="/careers" className="hover:opacity-80 transition-opacity">
            Careers
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="sm" className="rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Us
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
