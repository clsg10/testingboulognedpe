import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyDPE from "@/components/WhyDPE";
import Steps from "@/components/Steps";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyDPE />
      <Steps />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
