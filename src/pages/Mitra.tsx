import Layout from "@/components/Layout";
import MitraHero from "@/components/MitraHero";
import MitraAbout from "@/components/MitraAbout";
import PricingSection from "@/components/PricingSection";
import MitraBenefits from "@/components/MitraBenefits";
import MitraCTA from "@/components/MitraCTA";

const Mitra = () => {
  return (
    <Layout>
      <MitraHero />
      <MitraAbout />
      <PricingSection />
      <MitraBenefits />
      <MitraCTA />
    </Layout>
  );
};

export default Mitra;
