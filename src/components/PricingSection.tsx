import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Reseller",
    minOrder: "10 pcs",
    price: "Rp113.500",
    pricePerPcs: "/ pcs",
    description: "Cocok untuk pemula dan penjualan skala kecil, baik online maupun offline.",
    highlight: false,
    features: [
      "Minimal order 10 pcs",
      "Cocok untuk pemula",
      "Penjualan online & offline",
    ],
  },
  {
    name: "Agen",
    minOrder: "100 pcs",
    price: "Rp11.000",
    pricePerPcs: "/ pcs",
    description: "Margin lebih besar, cocok untuk reseller aktif dan toko.",
    highlight: true,
    features: [
      "Minimal order 100 pcs",
      "Margin lebih besar",
      "Untuk reseller aktif & toko",
    ],
  },
  {
    name: "Distributor",
    minOrder: "500 pcs",
    price: "Rp9.500",
    pricePerPcs: "/ pcs",
    description: "Harga terbaik untuk distribusi wilayah, toko besar, dan supplier.",
    highlight: false,
    features: [
      "Minimal order 500 pcs",
      "Harga khusus terbaik",
      "Distribusi wilayah & supplier",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pilihan Level <span className="text-primary">Kemitraan</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Pilih level yang sesuai dengan kebutuhan dan skala usaha Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-6 md:p-8 animate-fade-in ${
                tier.highlight
                  ? "bg-secondary text-secondary-foreground shadow-xl scale-105"
                  : "bg-card text-foreground shadow-lg"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    tier.highlight
                      ? "text-secondary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  Min. order: {tier.minOrder}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-extrabold">
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.highlight
                        ? "text-secondary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {tier.pricePerPcs}
                  </span>
                </div>
              </div>

              <p
                className={`text-sm mb-6 text-center ${
                  tier.highlight
                    ? "text-secondary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        tier.highlight ? "bg-primary" : "bg-primary/20"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          tier.highlight
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.highlight ? "cta" : "outline"}
                size="lg"
                className="w-full"
              >
                <a
                  href="https://wa.me/6285757051063"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Daftar Sekarang
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
