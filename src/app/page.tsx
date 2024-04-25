'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import BurgerNav from '@/app/components/BurgerNav';
import Hamburger from '@/app/components/Hamburger';
import Navbar from '@/app/components/Navbar';
import Socials from '@/app/components/Socials';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  const [width, setWidth] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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
            alt='Hush Hush'
            initial={{
              scale: 0,
            }}
            whileInView={{ scale: 1 }}
          />
        </div>
        <Socials />
      </section>
      <section className='h-screen' id='about'></section>
      <section className='h-screen' id='merch'></section>
      <section className='h-screen' id='tour'></section>
    </main>
  );
}
