const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Tentang <span className="text-primary">Mamade Nagih</span>
          </h2>
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              Mamade Nagih merupakan produk camilan premium di bawah naungan PT
              Ade Gemilang Indonesia yang berfokus pada produksi keripik pisang
              berkualitas tinggi.
            </p>
            <p>
              Kami menggunakan pisang lokal pilihan, khususnya jenis kepok dan
              tanduk, yang diperoleh langsung dari petani di Kabupaten Enrekang,
              Sulawesi Selatan. Setiap produk diproses secara higienis tanpa
              bahan pengawet, sehingga menghasilkan keripik pisang dengan rasa
              autentik, renyah, dan konsisten.
            </p>
            <p>
              Mamade Nagih hadir untuk menghadirkan camilan yang aman dikonsumsi,
              memiliki cita rasa yang disukai pasar, dan siap dipasarkan secara
              luas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
