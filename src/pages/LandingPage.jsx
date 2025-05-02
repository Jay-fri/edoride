import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Technology from "../components/Technology";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
