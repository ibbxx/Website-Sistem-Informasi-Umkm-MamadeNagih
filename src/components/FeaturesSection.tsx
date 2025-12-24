import {
  Award,
  Shield,
  Leaf,
  Sparkles,
  Package,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Bersertifikat Halal",
    description: "Telah bersertifikat halal resmi",
  },
  {
    icon: Shield,
    title: "Izin P-IRT",
    description: "Memiliki izin P-IRT resmi",
  },
  {
    icon: Leaf,
    title: "Bahan Baku Lokal",
    description: "Menggunakan bahan baku lokal berkualitas",
  },
  {
    icon: Sparkles,
    title: "Standar Kebersihan",
    description: "Diproses dengan standar kebersihan yang ketat",
  },
  {
    icon: Package,
    title: "Kemasan Eksklusif",
    description: "Cocok untuk oleh-oleh & hampers",
  },
  {
    icon: Clock,
    title: "Daya Simpan Lama",
    description: "Daya simpan produk relatif lama",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mengapa Memilih <span className="text-primary">Mamade Nagih</span>?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Varian rasa unik dan mengikuti tren pasar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
