import About from "../components/About";
import Cars from "../components/Cars";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Tesla from "../components/Tesla";
import Testimonials from "../components/Testimonials";
import Sponsor from "../components/Sponsor";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Cars />
      <Tesla />
      <Testimonials />
      <Sponsor />
      <Footer />
    </>
  );
}

export default HomePage;
