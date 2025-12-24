import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Produk" },
    { href: "/mitra", label: "Mitra" },
    { href: "#kontak", label: "Kontak" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return location.pathname === href;
  };

  const handleContactClick = () => {
    const footer = document.getElementById("kontak");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner - Shopee Promo */}
      <div className="bg-secondary text-secondary-foreground py-2 text-center text-xs sm:text-sm font-medium">
        <a
          href="https://s.shopee.co.id/2LRTk1Khf3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 hover:text-primary transition-colors"
        >
          <ShoppingBag size={14} className="sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Belanja di Shopee – Gratis Ongkir & Promo Spesial!</span>
          <span className="sm:hidden">Promo Shopee – Gratis Ongkir!</span>
        </a>
      </div>

      <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 -ml-10">
            <img
              src="/images/logo.png"
              alt="Mamade Nagih"
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.href}
                  onClick={handleContactClick}
                  className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-base font-medium transition-colors ${isActive(link.href)
                    ? "text-foreground border-b-2 border-primary pb-1"
                    : "text-foreground/80 hover:text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-3">
            <Button asChild variant="outline" size="default">
              <a
                href="https://s.shopee.co.id/2LRTk1Khf3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ShoppingBag size={18} />
                Shopee
              </a>
            </Button>
            <Button asChild variant="default" size="default">
              <a
                href="https://wa.me/6285757051063"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pesan Sekarang
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg animate-fade-in">
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <button
                    key={link.href}
                    onClick={handleContactClick}
                    className="text-lg font-medium text-foreground/80 hover:text-foreground text-left py-2"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-medium py-2 ${isActive(link.href)
                      ? "text-foreground"
                      : "text-foreground/80 hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="flex flex-col gap-3 mt-4">
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://s.shopee.co.id/2LRTk1Khf3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={18} />
                    Beli di Shopee
                  </a>
                </Button>
                <Button asChild variant="default" size="lg">
                  <a
                    href="https://wa.me/6285757051063"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pesan via WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
