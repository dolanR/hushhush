'use client';

import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import '@/lib/env';

import BurgerNav from '@/app/components/BurgerNav';
import Hamburger from '@/app/components/Hamburger';
import Navbar from '@/app/components/Navbar';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  const [width, setWidth] = React.useState<number>(0);
  const [height, setHeight] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
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
          <Image
            src='/svg/hh-svg.svg'
            alt='Hush Hush'
            width={width}
            height={height}
          />
        </div>
      </section>
      <section className='h-screen' id='tour'></section>
    </main>
  );
}
