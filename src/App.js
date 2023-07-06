import Navbar from "./components/Navbar";
import About from "./section/About";
import Hero from "./section/Hero";
import Tokenomics from "./section/Tokenomics";

function App() {
  return (
    <div className="App bg-[#02010B]">
      <div className="bg-[url('/public/header.svg')] bg-cover">
        <Navbar />

        <Hero />
      </div>
        <About />
        <Tokenomics/>

    </div>
  );
}

export default App;
