import Navbar from "./components/Navbar";
import Hero from "./section/Hero";

function App() {
  return (
    <div className="App bg-[#383838]">
      <div className="bg-[url('/public/header.svg')] bg-cover">
        <Navbar />

        <Hero />
      </div>
    </div>
  );
}

export default App;
