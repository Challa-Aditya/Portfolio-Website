'use client'

import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbarblur, setnavbarblur]=useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } 
        else {
            setnavbarblur(false);
        }
    }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
          <div className="w-full h-16 fixed top-0 shadow-sm shadow-[#2A0E50]/50 bg-[#171515a0] backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
            <Link href="/" className='text-3xl ml-4 pl-4 highlight-text challa'>Challa</Link>
                <button onClick={toggleMenu} className={`Hamburger`}><RxHamburgerMenu/></button>
            <ul className={`Navlinks ${isOpen ? "showNavbar":""}`} onClick={toggleMenu} >
              <li className='text-2xl hover:text-3xl highlight-text'>
                <div className='px-3'>
                  <Link href="/">About</Link>
                </div>
              </li>
              <li className='text-2xl hover:text-3xl highlight-text'>
                <div className='px-3'>
                  <Link href="/Projects" >Projects</Link>
                </div>
              </li>
              <li className='text-2xl hover:text-3xl highlight-text'>
                <div className='px-3'>
                  <Link href="/Resume">Resume</Link>
                </div>
              </li>
              <li className='text-2xl hover:text-3xl highlight-text'>
                <div className='px-3'>
                  <Link href="/Contact">Contact</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
}

export default Navbar;
