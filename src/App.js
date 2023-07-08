import Navbar from "./components/Navbar";
import About from "./section/About";
import Features from "./section/Features";
import Hero from "./section/Hero";
import HowToBuy from "./section/HowToBuy";
import Partners from "./section/Partners";
import Roadmap from "./section/Roadmap";
import Footer from "./section/Footer";
import Tokenomics from "./section/Tokenomics";

function App() {
  return (
    <div className="App bg-[#02010B]">
      <div className="bg-[url('/public/header.svg')] bg-cover">
        <Navbar />

        <Hero />
      </div>
      <About />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
      <Partners />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
