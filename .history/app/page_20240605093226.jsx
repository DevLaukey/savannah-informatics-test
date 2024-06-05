import Footer from "@/components/Footer";
import About from "@/components/landing-page/About";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


// this is the landing page
export default function Home() {
  const { getUser } = getKindeServerSession();
    console.log(await getUser());

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
      <ScrollToTop />
    </>
  );
}
