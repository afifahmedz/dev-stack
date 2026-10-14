// import { useState } from "react";
import { useState } from "react";
import Logo from "../assets/logo-text.png"
import { SquareMenu, X } from 'lucide-react';
const Nav = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false)
    return (
        <> 
        <nav>
            <div className="flex container mx-auto justify-between mt-2.5">
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        <div className="hidden md:flex justify-evenly gap-2.5 items-center" >
            <li className="text-pink-600 cursor-pointer">Home</li>
            <li className="cursor-pointer">Technologies</li>
            <li className="cursor-pointer">Project</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            
        </div>
        <div className="flex justify-evenly gap-2.5">
            <button className="btn btn-outline">Sign In</button>
            <button className="btn btn-secondary">Sign Up</button>
        </div>
            <button className="cursor-pointer md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}> 
        {isMenuOpen ? <X /> : <SquareMenu />} 
      </button>

        </div>
        {isMenuOpen ? <X /> : <SquareMenu />}
   
      {isMenuOpen && (
        <div className="md:hidden border-t border-blue-800 p-4">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Technologies</li>
            <li className="cursor-pointer">Project</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
        </nav>
          <div className="divider"/>
        </>
    );
};

export default Nav;       