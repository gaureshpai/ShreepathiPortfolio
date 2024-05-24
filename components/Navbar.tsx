import "../public/styles/Navbar.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="titleb">
          <Image
            src=""
            alt="Shreepathi Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          Shreepathi
        </a>
        <div className="buttons-container-main">
          <div className="button-container">
            <a href="https://github.com/shree2307" target="_blank" rel="noopener noreferrer" className="buttons">
              GitHub
            </a>
          </div>
          <div className="button-container">
            <a href="" target="_blank" rel="noopener noreferrer" className="buttons">
              Linkedin
            </a>
          </div>
          <div className="button-container">
            <a href="Mailto:shreepathishree7@gmail.com" target="_blank" rel="noopener noreferrer" className="buttons">
              Mailto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
