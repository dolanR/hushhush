'use client';

import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import '@/lib/env';

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

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, []);

  return (
    <main>
      <Head>
        <title>Hush Hush</title>
      </Head>
      <Navbar />
      <section
        className='h-screen 
       2xl:bg-[url("/images/hh-4.jpg")] 
       lg:bg-[url("/images/hh-11.jpg")]
        bg-[url("/images/patientzero.jpg")] lg:bg-center
        bg-[center_bottom_50%]
         overflow-hidden'
        id='/'
      >
        <div className='absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[55vw] z-10'>
          <Image
            src='/images/hh-logo.png'
            alt='Hush Hush'
            className='hidden lg:block'
            width={width}
            height={height}
          />
        </div>
      </section>
      <section className='h-screen' id='about'></section>
    </main>
  );
}
