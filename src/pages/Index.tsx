
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import QuizSection from "@/components/QuizSection";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <QuizSection />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
