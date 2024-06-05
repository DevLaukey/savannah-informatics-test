import Albums from "@/components/Albums/Albums";
import Footer from "@/components/Footer";
import About from "@/components/landing-page/About";
import Hero from "@/components/landing-page/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// this is the landing page
export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    // check if the user is empty
    <div>
      {user ? (
        // if the user is not empty, show the albums
        <Albums />
      ) : (
        // if the user is empty, show the landing page
        <>
          <Hero />
          <About />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}
