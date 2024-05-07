'use client';

import { AnimatePresence } from 'framer-motion';
import * as React from 'react';
import '@/lib/env';

import BurgerNav from '@/app/Components/BurgerNav';
import Hamburger from '@/app/Components/Hamburger';
import Navbar from '@/app/Components/Navbar';
import About from '@/app/Components/Sections/About';
import Footer from '@/app/Components/Sections/Footer';
import Home from '@/app/Components/Sections/Home';
import Merch from '@/app/Components/Sections/Merch';
import Music from '@/app/Components/Sections/Music';
import SignUp from '@/app/Components/Sections/SignUp';
import Tour from '@/app/Components/Sections/Tour';
import SignupModal from '@/app/Components/SignupModal';

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
