import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaMusic,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

export default function Socials() {
  return (
    <motion.div
      className='lg:flex self-end w-full p-6 justify-center text-white items-center gap-6 z-10 hidden'
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
    >
      <a
        href='https://www.facebook.com/Hushhushtheband?mibextid=LQQJ4d'
        target='_blank'
        className='transition-all duration-300 ease-in-out hover:scale-[1.3]'
      >
        <FaFacebookF className='text-3xl sm:text-5xl ' />
      </a>
      <a
        href='https://instagram.com/hush.hush.theband?igshid=NTc4MTIwNjQ2YQ=='
        target='_blank'
        className='transition-all duration-300 ease-in-out hover:scale-[1.3]'
      >
        <FaInstagram className='text-3xl sm:text-5xl ' />
      </a>
      <a
        href='https://www.tiktok.com/@hushhush_pat?_t=8eHf1ijs0v0&_r=1'
        target='_blank'
        className='transition-all duration-300 ease-in-out hover:scale-[1.3]'
      >
        <FaTiktok className='text-3xl sm:text-5xl  ' />
      </a>
      <a
        href='https://youtube.com/@hushhush-official4064?si=c_8cLLnoV4N6v9Hx'
        target='_blank'
        className='transition-all duration-300 ease-in-out hover:scale-[1.3]'
      >
        <FaYoutube className='text-3xl sm:text-5xl ' />
      </a>
      <a
        href='https://open.spotify.com/artist/3rh7nDdkXZf4aUme3SKPNF?si=0ccqBQVeTGev1ATBq2q0FA&utm_medium=share&utm_source=linktree'
        target='_blank'
        className='transition-all duration-300 ease-in-out hover:scale-[1.3]'
      >
        <FaSpotify className='text-3xl sm:text-5xl ' />
      </a>
      <a
        href='https://music.apple.com/us/artist/hush-hush/1614724552'
        target='_blank'
        className='transition-all duration-300 ease-in-out hover:scale-[1.3]'
      >
        <FaMusic className='text-3xl sm:text-5xl ' />
      </a>
    </motion.div>
  );
}
