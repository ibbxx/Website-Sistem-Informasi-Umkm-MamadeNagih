import { Button } from "@/components/ui/button";

const MitraHero = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight animate-fade-in">
            Peluang Usaha: Join Mitra Mamade Nagih
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Ingin memulai usaha camilan tapi bingung mulai dari mana? Mamade
            Nagih membuka peluang kemitraan bagi siapa saja yang ingin berjualan
            produk camilan tanpa ribet.
          </p>
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Button asChild variant="hero" size="lg">
              <a
                href="https://wa.me/6285757051063"
                target="_blank"
                rel="noopener noreferrer"
              >
                Daftar Jadi Mitra
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-yellow-light/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow-dark/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default MitraHero;
