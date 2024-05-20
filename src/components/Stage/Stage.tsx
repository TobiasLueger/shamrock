"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Button from '../Button/Button';

const Stage = () => {
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
        <div className="bg-primary pt-24 flex flex-col items-center">
            <div className='w-[356px] text-center flex flex-col gap-8 items-center'>
                <h1>Shamrock Irish Pub Rheinbach</h1>
                <p>Dein Irish Pub in der schönen Innenstadt von Rheinbach. Komm gerne vorbei und genieße mit uns deinen Abend.</p>
                <Button type="primary" href="#" className="w-fit">Aktuelles</Button>
            </div>
            <div className='w-[656px] text-center flex flex-col gap-8 items-center mt-56'>
                <h2>Mit uns den Abend genießen</h2>
                <p>Aber wer sind wir eigentlich? Wir sind alles Freunde und Nachbarn aus Rheinbach die dir einen schönen Abend bieten wollen.</p>
                <Button type="secondary" href="#" className="w-fit">Das Team</Button>
            </div>

        </div>
    )
}

export default Stage;