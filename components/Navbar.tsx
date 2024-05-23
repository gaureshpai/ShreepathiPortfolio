import "../public/styles/Navbar.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="titleb"> {/* Anchor tag wrapping both Image and Link */}
          <Image
            src=""
            alt="Shreepathi Logo"
            width={32} // Set the width of the image
            height={32} // Set the height of the image
            className="mr-2" // Add margin to separate the logo from the text
          />
          Shreepathi
        </a>
        <div className="button-container">
          <a href="https://github.com/shree2307" target="_blank" rel="noopener noreferrer" className="buttons">
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
