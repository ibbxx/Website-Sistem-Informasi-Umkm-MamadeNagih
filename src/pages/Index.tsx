import Layout from "@/components/Layout";
import ProductHero from "@/components/ProductHero";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import FlavorsSection from "@/components/FlavorsSection";
import ProductCTA from "@/components/ProductCTA";

const Index = () => {
  return (
    <Layout>
      <ProductHero />
      <AboutSection />
      <FeaturesSection />
      <FlavorsSection />
      <ProductCTA />
    </Layout>
  );
};

export default Index;
