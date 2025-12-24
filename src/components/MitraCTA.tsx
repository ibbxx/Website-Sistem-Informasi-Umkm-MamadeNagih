import { Button } from "@/components/ui/button";

const MitraCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
            Mulai Sekarang
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Jangan tunda peluang usahamu. Bergabunglah bersama Mamade Nagih dan
            mulai langkah bisnismu hari ini.
          </p>
          <Button asChild variant="hero" size="xl">
            <a
              href="https://wa.me/6285757051063"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daftar Sekarang Jadi Mitra Mamade Nagih
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MitraCTA;
