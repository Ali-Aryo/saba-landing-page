const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/saeed-otufat-shamsi-51a840/" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="bg-surface-lowest w-full py-12 px-6 lg:px-8 border-t border-on-background/10 mt-auto"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 text-sm font-medium text-on-surface-variant">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-lg font-bold text-on-background tracking-tighter font-headline">
            SABA
          </div>

          {/* Links */}
          <nav
            className="flex flex-wrap justify-center gap-6"
            aria-label="Footer"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary-container transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <p className="text-on-surface-variant text-center opacity-60">
          © {new Date().getFullYear()} SABA Management Consulting. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
