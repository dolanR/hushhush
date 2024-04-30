import React, { useEffect } from 'react';

import SoundButton from '@/app/components/SoundButton';
import Word from '@/app/components/Word';

const bio = `We are HUSH HUSH, a dynamic 4-piece post-hardcore sensation from Buffalo, NY. 
Formed in 2022, we blend catchy guitar rhythms and driving bass lines to create a unique fusion of post-hardcore and pop-punk. 
Taking influence from bands like Pierce the Veil and Senses Fail, our high-energy shows are guaranteed to make you dance and sing along. 
Join us for an unforgettable experience where passion meets performance.`;

export default function About() {
  const [isMuted, setIsMuted] = React.useState<boolean>(true);

  useEffect(() => {
    const video = document.querySelector('video');
    if (!video) return;
    video.volume = 0.2;
  }, []);

  return (
    <section className='h-[200vh] flex justify-center items-center -z-20'>
      <div id='about' className='absolute top-[160vh]'></div>
      <SoundButton isMuted={isMuted} setIsMuted={setIsMuted} />
      <video
        autoPlay
        muted={isMuted}
        loop
        className='fixed top-0 object-cover h-screen w-[120vw] -z-50 opacity-60'
      >
        <source src='/videos/hh-clip.mp4' type='video/mp4'></source>
      </video>
      <Word value={bio} />
    </section>
  );
}
