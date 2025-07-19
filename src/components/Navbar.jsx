import { useEffect } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaHashnode } from "react-icons/fa6";

export const Navbar = ({menuOpen, setMenuOpen}) =>{
    useEffect(() =>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                { /* Name + Social Links */}
                <a href="#home" className="font-mono text-xl font-bold text-white mr-4 md:mr-0"> 
                    Arunmathavan
                </a>

                <div className="flex space-x-2 text-white text-xl ">
                    <a href="mailto:arunmathavankamaraj2003@gmail.com" target="_blank" rel="nooper noreferrer"><IoMail /></a>
                    <a href="https://www.linkedin.com/in/arunmathavan-backend-developer/" target="_blank" rel="nooper noreferrer"><FaLinkedin /></a>
                    <a href="https://arunmathavank.hashnode.dev/" target="_blank" rel="nooper noreferrer"><FaHashnode /></a>
                    <a href="https://github.com/ArunmathavanK" target="_blank" rel="nooper noreferrer"><FaGithub /></a>
                    <a href="https://x.com/ArunmathavanK" target="_blank" rel="nooper noreferrer"><FaSquareXTwitter /></a>
                </div>


                {/* mobile menu icon */}
                <div 
                   className="w-20 h-10 flex items-center justify-center cursor-pointer z-50 md:hidden text-white text-1xl bg-black/50 rounded"
                   onClick={() => setMenuOpen((prev) => !prev)}
                >
                   &#9776;
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-centre space-x-8">
                    <a href="#home" className="text-gray-300 hove:text-white transition-colors">{" "}Home{" "}</a>
                    <a href="#about" className="text-gray-300 hove:text-white transition-colors">{" "}About{" "}</a>
                    <a href="#projects" className="text-gray-300 hove:text-white transition-colors">{" "}Projects{" "}</a>
                    <a href="#contact" className="text-gray-300 hove:text-white transition-colors">{" "}Contact{" "}</a>
                </div>
            </div>
        </div>
    </nav>
    );
}
