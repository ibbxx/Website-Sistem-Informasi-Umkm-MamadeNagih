import {
  Wallet,
  Package,
  TrendingUp,
  Globe,
  PiggyBank,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Modal Fleksibel",
    description: "Sesuai level kemitraan",
  },
  {
    icon: Package,
    title: "Produk Siap Jual",
    description: "Dengan kemasan premium",
  },
  {
    icon: TrendingUp,
    title: "Varian Rasa Populer",
    description: "Disukai pasar",
  },
  {
    icon: Globe,
    title: "Jual Online & Offline",
    description: "Fleksibilitas penjualan",
  },
  {
    icon: PiggyBank,
    title: "Margin Menarik",
    description: "Peluang keuntungan besar",
  },
  {
    icon: Award,
    title: "Brand Berkembang",
    description: "Didukung Mamade Nagih",
  },
];

const MitraBenefits = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Keuntungan Menjadi{" "}
            <span className="text-primary">Mitra Mamade Nagih</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-muted rounded-2xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-foreground mb-1">
                {benefit.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MitraBenefits;
