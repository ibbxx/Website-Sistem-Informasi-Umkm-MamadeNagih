import { Button } from "@/components/ui/button";

const ProductCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
            Pesan Sekarang
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Nikmati keripik pisang premium Mamade Nagih untuk camilan harian dan
            oleh-oleh berkualitas.
          </p>
          <Button asChild variant="hero" size="xl">
            <a
              href="https://wa.me/6285757051063"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan Sekarang
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;
