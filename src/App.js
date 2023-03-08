import React from "react";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Get from "./components/Get"
import Support from './components/Support';
import Konsul from "./components/Konsul";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="bg-black text-zinc-300">
    <Navbar />
    <Hero/>
    <Support />
    <Get />
    <Konsul />

   
    
    </div>
  )
    
}

export default App;
