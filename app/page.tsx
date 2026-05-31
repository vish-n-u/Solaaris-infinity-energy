import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import StatsBar from "./_components/StatsBar";
import Services from "./_components/Services";
import WhyChooseUs from "./_components/WhyChooseUs";
import SystemTypes from "./_components/SystemTypes";
import SubsidySection from "./_components/SubsidySection";
import Gallery from "./_components/Gallery";
import Testimonials from "./_components/Testimonials";
import LeadForm from "./_components/LeadForm";
import Footer from "./_components/Footer";
import WhatsAppButton from "./_components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WhyChooseUs />
        <SystemTypes />
        <SubsidySection />
        <Gallery />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
