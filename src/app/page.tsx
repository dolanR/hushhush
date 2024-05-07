'use client';

import { AnimatePresence } from 'framer-motion';
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
import SignupModal from '@/app/components/SignupModal';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const close = () => setModalOpen(false);

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      window.innerHeight * 0.01 + 'px'
    );
    setTimeout(() => {
      setModalOpen(true);
    }, 1000);
  }, []);

  React.useEffect(() => {
    if (!document.body) {
      return;
    }
    if (modalOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [modalOpen]);

  return (
    <main>
      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {modalOpen && <SignupModal handleClose={close} />}
      </AnimatePresence>
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
