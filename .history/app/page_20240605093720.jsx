import Footer from "@/components/Footer";
import About from "@/components/landing-page/About";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


// this is the landing page
export default async function Home() {
  const { getUser } = getKindeServerSession();
    const user = await getUser();

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Hero />
      <About />
      <Footer />
      <ScrollToTop />
    </div>
   
  );
}
