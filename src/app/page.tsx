'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import BurgerNav from '@/app/components/BurgerNav';
import Hamburger from '@/app/components/Hamburger';
import Navbar from '@/app/components/Navbar';
import Socials from '@/app/components/Socials';
import Word from '@/app/components/Word';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

const bio =
  'We are a 4-piece American Post hardcore band from Buffalo, NY, USA. Our band formed in 2022 from a collection of energetic, fun-loving dudes who met under the careful selection of frontman, Dominic Villa. Taking influences from bands such as Pierce the Veil, Escape the Fate, and old school pop punk bands, our unique brand of entertainment fuses catchy guitar rhythms and melodies with driving bass lines to create a post hardcore/pop punk fusion. We always strive to bring a high energy show that will make you want to bop around whilst singing along with every word.';

export default function HomePage() {
  const [width, setWidth] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <main className={`${isOpen ? 'overflow-hidden' : ''}`}>
      <Head>
        <title>Hush Hush</title>
      </Head>
      <Navbar />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <BurgerNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <section
        className='h-screen flex items-center justify-center bg-cover
       2xl:bg-[url("/images/hh-4.jpg")] 
       lg:bg-[url("/images/hh-11.jpg")]
       bg-[url("/images/hh-5.jpg")]
         lg:bg-center
        bg-[center_bottom_70%]
         overflow-hidden'
        id='home'
      >
        <div
          className={`absolute left-1/2  -translate-x-1/2 -translate-y-1/2 ${
            width > 1024
              ? 'w-[calc(45vw+200px)] top-[55%]'
              : 'w-[100vw] top-[90%]'
          } z-10`}
        >
          <motion.img
            src='/svg/hh-svg.svg'
            alt='Hush Hush Logo'
            initial={{
              scale: 0,
            }}
            whileInView={{ scale: 1 }}
          />
        </div>
        <Socials />
      </section>
      <section
        className='h-[200vh] flex justify-center items-center'
        id='about'
        ref={ref}
      >
        <video autoPlay muted loop className='fixed top-0 object-cover -z-50'>
          <source src='/videos/hh-clip.mp4' type='video/mp4'></source>
        </video>
        <Word value={bio} ref={ref} />
      </section>
      <section className='h-screen bg-neutral-950' id='merch'></section>
      <section className='h-screen' id='tour'></section>
    </main>
  );
}
