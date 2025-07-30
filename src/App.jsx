import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

//import * as Sentry from '@sentry/react';
const App = () => {
  // return <button onClick={() => {throw new Error("This is your first error!");}}>Break the world</button>;return <button onClick={() => {throw new Error("This is your first error!");}}>Break the world</button>;
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
       <SpeedInsights/>
    </main>
  );
};

export default App;
