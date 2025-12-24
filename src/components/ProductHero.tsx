import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProductHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-20 md:py-28 lg:py-36">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight animate-fade-in">
              Keripik Pisang <span className="block">Premium Enrekang</span>
            </h1>
            <p
              className="text-lg md:text-xl text-primary-foreground/80 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.15s" }}
            >
              Renyah, halal, dan hadir dengan berbagai varian rasa kekinian.
              Cocok untuk camilan harian, oleh-oleh, hingga peluang usaha.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button asChild variant="hero" size="lg" className="shadow-brand">
                <a
                  href="https://wa.me/6285757051063"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pesan Sekarang
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/mitra">Daftar Jadi Mitra</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Shadow to the right */}
              <div
                className="absolute top-8 -right-8 w-full h-full bg-black/20 rounded-3xl blur-2xl -z-10"
                style={{ transform: "translateX(20px) translateY(20px)" }}
              ></div>

              {/* Decorative glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow-light/40 to-accent/30 rounded-full blur-3xl scale-90 -z-20"></div>

              {/* Accent glow on the right */}
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-64 bg-brand-yellow-dark/30 rounded-full blur-3xl -z-10"></div>

              {/* Main Image */}
              <img
                src="/images/Mockup_allvariant.png"
                alt="Keripik Pisang Premium Mamade Nagih dengan berbagai varian rasa"
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain relative z-10"
                style={{
                  filter: "drop-shadow(15px 15px 30px rgba(0,0,0,0.3)) drop-shadow(-5px -5px 20px rgba(255,200,0,0.2))"
                }}
              />

              {/* Subtle reflection */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-black/10 to-transparent rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-yellow-light/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-yellow-dark/15 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default ProductHero;
