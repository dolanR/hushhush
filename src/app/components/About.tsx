import React, { useEffect } from 'react';

import SoundButton from '@/app/components/SoundButton';
import Word from '@/app/components/Word';

const bio =
  'We are a 4-piece American Post hardcore band from Buffalo, NY. Our band formed in 2022 from a collection of energetic, fun-loving dudes who met under the careful selection of frontman, Dominic Villa. Taking influences from bands such as Pierce the Veil, Escape the Fate, and old school pop punk bands, our unique brand of entertainment fuses catchy guitar rhythms and melodies with driving bass lines to create a post hardcore/pop punk fusion. We always strive to bring a high energy show that will make you want to bop around whilst singing along with every word.';

export default function About() {
  const [isMuted, setIsMuted] = React.useState<boolean>(true);

  useEffect(() => {
    const video = document.querySelector('video');
    if (!video) return;
    video.volume = 0.2;
  }, []);

  return (
    <section
      className='h-[200vh] flex justify-center items-center -z-20'
      id='about'
    >
      <SoundButton isMuted={isMuted} setIsMuted={setIsMuted} />
      <video
        autoPlay
        muted={isMuted}
        loop
        className='fixed top-0 object-cover h-screen w-[120vw] -z-50'
      >
        <source src='/videos/hh-clip.mp4' type='video/mp4'></source>
      </video>
      <Word value={bio} />
    </section>
  );
}
