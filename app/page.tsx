import Image from "next/image";
import Navbar from "../components/Navbar"
import '../public/styles/globals.css'
import Footer from "@/components/Footer";
import About from "@/components/About";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar/>
        <About/>
        <Education/>
        <Certificates/>
        <Skills/>
        <Contact/>
      <Footer/>
    </main>
  );
}
