import Footer from "@/components/Footer";
import About from "@/components/landing-page/About";
import Hero from "@/components/landing-page/Hero";
import HowItWorks from "@/components/landing-page/HowItWorks";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";


// this is the landing page
export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <About />
      <HowItWorks />
      <Footer />
      <ScrollToTop />
    </>
  );
}
