import React from "react";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Get from "./components/Get";
import YouGet from "./components/YouGet";
import Accordion from "./components/Accordion";
import About from "./components/About";
import Konsul from "./components/Konsul";
import WhyChoose from "./components/WhyChoose";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Testi from "./components/Testi";

function App() {
  return (
    <div className="bg-black text-zinc-300">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Get />
      <YouGet />
      <About />
      <Konsul />
      <Map />
      <Testi />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
