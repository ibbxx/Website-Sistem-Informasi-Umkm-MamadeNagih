import { Link } from "react-router-dom";
import { Phone, Instagram, Mail, MapPin, ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4 text-left">
            <img
              src="/images/logo.png"
              alt="Mamade Nagih"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Camilan lokal berkualitas & peluang usaha nyata dari PT Ade
              Gemilang Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Menu</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Produk
              </Link>
              <Link
                to="/mitra"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Mitra
              </Link>
              <a
                href="https://s.shopee.co.id/2LRTk1Khf3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Shopee Store
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Kontak</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/6285757051063"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>0857-5705-1063</span>
              </a>
              <a
                href="https://instagram.com/mamadenagih"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Instagram size={18} />
                <span>@mamadenagih</span>
              </a>
              <a
                href="https://s.shopee.co.id/2LRTk1Khf3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <ShoppingBag size={18} />
                <span>Shopee Official Store</span>
              </a>
              <a
                href="mailto:ptadegemilangidn@gmail.com"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>ptadegemilangidn@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Jl. Enrekang–Toraja, Belajen, Kabupaten Enrekang, Sulawesi
                  Selatan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Mamade Nagih – PT Ade Gemilang
            Indonesia. Camilan lokal berkualitas & peluang usaha nyata.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
