"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Services for AI Infra", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${scrolled
          ? "bg-surface-lowest/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-surface-lowest to-transparent"
        }
      `}
      role="banner"
    >
      <div className="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto relative">
        {/* Logo + Tagline */}
        <div className="flex flex-col">
          <a
            href="#"
            className="text-xl font-bold tracking-tighter text-on-background font-headline"
            aria-label="SABA – Home"
          >
            SABA
          </a>
          <span className="text-[10px] sm:text-xs text-on-surface-variant/60 tracking-wide leading-tight hidden sm:block">
            AI Infrastructure: AI Natives · Neo-Clouds · LPS
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary-container transition-colors duration-300 text-sm font-medium tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button variant="tertiary" className="px-0 py-0">
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface-variant hover:text-on-background transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden fixed inset-0 top-[64px] z-40
          bg-surface-lowest/95 backdrop-blur-xl
          flex flex-col items-center justify-center gap-8
          transition-all duration-500
          ${mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }
        `}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-2xl font-medium text-on-surface-variant hover:text-primary-container transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setMobileOpen(false)}>
          <Button variant="primary">Get Started</Button>
        </a>
      </div>
    </header>
  );
}
