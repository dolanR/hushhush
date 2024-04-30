'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import BurgerNav from '@/app/components/BurgerNav';
import Hamburger from '@/app/components/Hamburger';
import Navbar from '@/app/components/Navbar';
import About from '@/app/components/Sections/About';
import Footer from '@/app/components/Sections/Footer';
import Home from '@/app/components/Sections/Home';
import Merch from '@/app/components/Sections/Merch';
import Music from '@/app/components/Sections/Music';
import SignUp from '@/app/components/Sections/SignUp';
import Tour from '@/app/components/Sections/Tour';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      window.innerHeight * 0.01 + 'px'
    );
  }, []);

  return (
    <main>
      <Head>
        <title>Hush Hush</title>
        <meta name='darkreader-lock' />
      </Head>
      <Navbar />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <BurgerNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <Home />
      <About />
      <Merch />
      <Music />
      <Tour />
      <SignUp />
      <Footer />
    </main>
  );
}
