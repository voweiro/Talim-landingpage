import EarlyAccess from "@/components/EarlyAccess";
import FaqSection from "@/components/FaqSection";
import FeaturesSlider from "@/components/FeaturesSlider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowTalimWorks from "@/components/HowTalimWorks";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Header />
      <Hero />
      <Slideshow/>
      <HowTalimWorks/>
      <FeaturesSlider/>
      <EarlyAccess/>
      <FaqSection/>
      <Footer/>

    </main>
    
  );
}
