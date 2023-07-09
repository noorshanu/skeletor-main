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
      <div className="relative">
        <Navbar />

        <Hero />
        <video
          loop
          playsInline
          autoplay={true}
          autoPlay
          width={'100%'}
          height={'100%'}
          
          muted
          // poster="/header.svg"
          className="absolute inset-0 z-10 object-cover min-h-full min-w-full"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
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
