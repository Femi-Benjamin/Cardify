import Hero from "./Pages-section/Hero";
import Verify from "./Pages-section/Verify";
import Services from "./Pages-section/Services";
import Contact from "./Pages-section/Contact";
import Footer from "./Pages-section/Footer";
const Home = () => {
  return (
    <div className="md:bg-neutral-100 bg-neutral-200">
      <Hero />
      <Verify />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
