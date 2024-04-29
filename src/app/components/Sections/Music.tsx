import { motion } from 'framer-motion';
import { IoIosMusicalNotes } from 'react-icons/io';

export default function Music() {
  return (
    <section
      className='my-36 flex flex-col justify-center items-center text-center'
      id='music'
    >
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='lg:text-9xl md:text-8xl sm:text-7xl text-6xl text-white py-12 font-bold px-4'
      >
        Check Out Our Music
      </motion.p>
      <iframe
        className='rounded-md h-[300px] max-w-[550px] w-[90%]'
        src='https://open.spotify.com/embed/track/3ygEcUrX3igwOX9trptPE8?utm_source=generator'
        width='100%'
        height='352'
        allowFullScreen
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
      <iframe
        className='rounded-md h-[300px] max-w-[550px] w-[90%]'
        src='https://open.spotify.com/embed/track/5pc5KjzYGaR3m0MY6lyGfe?utm_source=generator'
        width='100%'
        allowFullScreen
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
      <iframe
        className='rounded-md h-[300px] max-w-[550px] w-[90%]'
        src='https://open.spotify.com/embed/track/0fyUXhCYS9kwcTvjvnQIAA?utm_source=generator'
        width='100%'
        height='352'
        allowFullScreen
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white font-bold text-center flex flex-col justify-center items-center gap-16'
      >
        (We're on Apple Music too)
        <a
          href='https://music.apple.com/us/artist/hush-hush/1614724552'
          target='_blank'
          className='p-4 pr-5 rounded-full border-[2px] flex items-center justify-center sm:hover:bg-red-500 sm:hover:scale-[1.5] transition-all duration-200 ease-in-out'
        >
          <IoIosMusicalNotes />
        </a>
      </motion.p>
    </section>
  );
}
