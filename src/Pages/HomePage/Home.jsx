import Navbar from "../../Components/Navbar";
import Hero from "./HomeComp/Hero";
import Services from "./HomeComp/Services";
import Testimonials from "./HomeComp/Testimonials";
import Stats from "./HomeComp/Stats";
import Footer from "./HomeComp/Footer";

function Home() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Stats></Stats>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default Home;
