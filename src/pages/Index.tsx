import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import NimBooks from "@/components/NimBooks";
import Stats from "@/components/Stats";
import NimAcademy from "@/components/NimAcademy";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <NimBooks />
      <Stats />
      <NimAcademy />
      <WhyChooseUs />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Index;
