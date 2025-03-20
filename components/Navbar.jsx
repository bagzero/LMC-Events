"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bayon, Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
});

const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400']
});

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight * 0.9);
      }
    };

    handleResize();
    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`w-full ${isMobile ? '' : 'bg-transparent'} transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
    >
      <div className="mx-auto px-8 sm:px-16 md:px-24 lg:px-32 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className={`${bebasNeue.className} text-xl font-bold text-[#27628C] cursor-pointer`}>LMC Events</span>
            </Link>
          </div>

          {/* Middle - Navigation Links (hidden on mobile) */}
          <div className={`hidden md:block`}> 
            <div className="flex items-center space-x-8">
              {["events", "contact", "arena-information"].map((link) => (
                <Link key={link} href={`/${link}`}>
                  <span className={`${bebasNeue.className} tracking-[1px] hover:scale-95 hover:opacity-80 cursor-pointer`}>{link.charAt(0).toUpperCase() + link.slice(1)}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Contact Us Button */}
          <div className="flex-shrink-0">
            <Link
              href="/tickets"
              className={`${bebasNeue.className} tracking-[3px] flex BlueGradient text-[14px] px-[15px] py-[7px] text-white shadow-[-4px_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] transition-all duration-400 ease-in-out hover:scale-105`}
            >
              Buy Tickets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
