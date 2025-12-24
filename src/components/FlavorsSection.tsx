import { useState } from "react";
import { X } from "lucide-react";

const flavors = [
  {
    name: "Cokelat",
    image: "/images/Coklat.jpeg",
    description: "Rasa cokelat premium yang manis dan lembut, cocok untuk pecinta cokelat sejati."
  },
  {
    name: "Stroberi",
    image: "/images/Strawberry.jpeg",
    description: "Sensasi manis asam buah stroberi yang menyegarkan di setiap gigitan."
  },
  {
    name: "Vanila",
    image: "/images/Vanila.jpeg",
    description: "Aroma vanila klasik yang harum dan lezat, favorit semua kalangan."
  },
  {
    name: "Balado",
    image: "/images/Balado.png",
    description: "Cita rasa pedas gurih khas balado yang bikin nagih dan ketagihan."
  },
];

interface Flavor {
  name: string;
  image: string;
  description: string;
}

const FlavorsSection = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | null>(null);

  const openModal = (flavor: Flavor) => {
    setSelectedFlavor(flavor);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedFlavor(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Varian Rasa <span className="text-primary">Mamade Nagih</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Mamade Nagih menghadirkan berbagai pilihan rasa favorit. Varian rasa
            terus dikembangkan mengikuti selera pasar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {flavors.map((flavor, index) => (
            <div
              key={flavor.name}
              onClick={() => openModal(flavor)}
              className="group relative overflow-hidden rounded-2xl aspect-square animate-scale-in shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={flavor.image}
                alt={`Keripik Pisang rasa ${flavor.name}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/30 to-transparent"></div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg md:text-xl font-bold text-white text-center drop-shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  {flavor.name}
                </h3>
              </div>
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFlavor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

          {/* Modal Content */}
          <div
            className="relative bg-card rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="relative aspect-square">
              <img
                src={selectedFlavor.image}
                alt={`Keripik Pisang rasa ${selectedFlavor.name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Rasa {selectedFlavor.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {selectedFlavor.description}
              </p>
              <a
                href={`https://wa.me/6285757051063?text=Halo, saya tertarik dengan Keripik Pisang rasa ${selectedFlavor.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 px-6 bg-primary hover:bg-accent text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FlavorsSection;
