import Navbar from "../components/Navbar";
import '../public/styles/globals.css';
import Footer from "@/components/Footer";
import About from "@/components/About";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <div id="about"><About /></div>
      <hr />
      <div id="education"><Education /></div>
      <hr />
      <div id="certificates"><Certificates /></div>
      <hr />
      <div id="skills"><Skills /></div>
      <hr />
      <div id="contact"><Contact /></div>
    </main>
  );
}
