import Image from 'next/image';
import {
  FaFacebookF,
  FaInstagram,
  FaMusic,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

export default function BurgerNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
}) {
  const navItems = ['HOME', 'ABOUT', 'MERCH', 'MUSIC', 'TOUR', 'SIGN-UP'];
  return (
    <nav
      className={`bg-neutral-950 fixed top-0 w-screen sm:w-1/2 md:w-[50%] lg:w-[40%] h-full z-30 transition-all duration-200 ${
        isOpen ? 'right-0 opacity-1' : '-right-full opacity-0'
      }`}
    >
      <div className='w-full h-1/2 absolute -top-[12%] -z-10'>
        <Image src='/svg/hh-svg.svg' alt='Hush Hush' fill />
      </div>
      <div className='flex items-center flex-col justify-center h-full text-white w-full font-extrabold font-sans'>
        <ul className='flex flex-col items-center text-center gap-3 w-full text-4xl sm:text-5xl md:text-6xl  justify-center'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='transition-all duration-200 ease-in-out hover:scale-[1.2]'
            >
              <a
                className={`${
                  index % 2 == 0
                    ? 'hh-purple font-outline-1 hover:hh-purple-glow'
                    : 'text-black font-outline-2 hover:hh-blue-glow'
                }`}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex items-center text-center justify-center gap-5 absolute top-[87%]'>
          <a
            href='https://www.facebook.com/Hushhushtheband?mibextid=LQQJ4d'
            target='_blank'
            className='transition-all duration-300 ease-in-out hover:scale-[1.3]'
          >
            <FaFacebookF className='text-3xl md:text-5xl ' />
          </a>
          <a
            href='https://www.instagram.com/hushhush716/'
            target='_blank'
            className='transition-all duration-300 ease-in-out hover:scale-[1.3]'
          >
            <FaInstagram className='text-3xl md:text-5xl ' />
          </a>
          <a
            href='https://www.tiktok.com/@hushhush_pat?_t=8eHf1ijs0v0&_r=1'
            target='_blank'
            className='transition-all duration-300 ease-in-out hover:scale-[1.3]'
          >
            <FaTiktok className='text-3xl md:text-5xl  ' />
          </a>
          <a
            href='https://youtube.com/@hushhush-official4064?si=c_8cLLnoV4N6v9Hx'
            target='_blank'
            className='transition-all duration-300 ease-in-out hover:scale-[1.3]'
          >
            <FaYoutube className='text-3xl md:text-5xl ' />
          </a>
          <a
            href='https://open.spotify.com/artist/3rh7nDdkXZf4aUme3SKPNF?si=0ccqBQVeTGev1ATBq2q0FA&utm_medium=share&utm_source=linktree'
            target='_blank'
            className='transition-all duration-300 ease-in-out hover:scale-[1.3]'
          >
            <FaSpotify className='text-3xl md:text-5xl ' />
          </a>
          <a
            href='https://music.apple.com/us/artist/hush-hush/1614724552'
            target='_blank'
            className='transition-all duration-300 ease-in-out hover:scale-[1.3]'
          >
            <FaMusic className='text-3xl md:text-5xl ' />
          </a>
        </div>
      </div>
    </nav>
  );
}
