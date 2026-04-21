import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CoreCompetencies from "@/components/sections/CoreCompetencies";
import GlobalInsights from "@/components/sections/GlobalInsights";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <CoreCompetencies />
        <GlobalInsights />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
