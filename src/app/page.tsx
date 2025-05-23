import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import AboutSection from "@/components/landing/AboutSection";
import MenuSection from "@/components/landing/MenuSection";
import ContactSection from "@/components/landing/ContactSection";
import ReserveForm from "@/components/landing/ReserveForm";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`flex flex-col`}>
        <AboutSection />
        <ReserveForm />
        <MenuSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
