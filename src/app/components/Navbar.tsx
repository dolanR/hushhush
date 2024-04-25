import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = ['ABOUT', 'MERCH', 'MUSIC', 'TOUR', 'SIGN-UP'];
  return (
    <nav className='bg-transparent absolute z-20 w-full p-6 hidden lg:block'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className='flex items-center justify-center text-white h-full font-extrabold text-4xl tracking-tight'
      >
        <ul className='flex items-center gap-6'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='hover:scale-[1.5] transition-all duration-300 ease-in-out'
            >
              <a
                className={`transition-all duration-300 ease-in-out hover:scale-[1.3]
                ${
                  index % 2 == 0
                    ? 'hh-purple font-outline-1'
                    : 'text-black font-outline-2'
                }`}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
