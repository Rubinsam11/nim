import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Nav */}
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
            <Button
              size="sm"
              className="rounded-full bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white transition-all"
            >
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary text-primary-foreground px-6 py-4 space-y-4">
          <Link to="/" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/services" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/products" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link to="/careers" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>
            Careers
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button
              size="sm"
              className="w-full rounded-full bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white transition-all"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;