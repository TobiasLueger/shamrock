"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Button from '../Button/Button';

const Navigation = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(false); 
        } else { // if scroll up show the navbar
          setShow(true);  
        }
    
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      };
    
      useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
    
        // cleanup function
        return () => {
           window.removeEventListener('scroll', controlNavbar);
        };
      }, [lastScrollY]);
    return (
        <nav className={`w-[calc(100%-24px)] font-primary fixed z-20 transition-all ${show ? "top-[12px]" : "-top-[1000px]"} left-[12px] px-8 py-4 text-text rounded-[30px] rounded-b-[30px] overflow-hidden flex flex-row items-center justify-between`}>
            <div className='bg-[#315645] absolute w-full h-full left-0 top-0 -z-10'></div>
            <Link href={'#'}>
                <Image
                    src="/logo.png"
                    alt="Das Logo von Shamrock"
                    width={560}
                    height={560}
                    className='max-w-[60px] transition-all hover:animate-jiggle'
                    priority
                    />
            </Link>
            <ul className='flex gap-10'>
                <li>
                    <a href='#' className='transition hover:border-b'>Home</a>
                </li>
                <li>
                    <a href='#' className='transition hover:border-b'>Essen & Trinken</a>
                </li>
                <li>
                    <a href='#' className='transition hover:border-b'>Veranstaltungen</a>
                </li>
                <li>
                    <a href='#' className='transition hover:border-b'>Das Team</a>
                </li>
                <li>
                    <a href='#' className='transition hover:border-b'>Kontakt</a>
                </li>
            </ul>
            <Button type="primary" href="#">Aktuelles</Button>
        </nav>
    )
}

export default Navigation;