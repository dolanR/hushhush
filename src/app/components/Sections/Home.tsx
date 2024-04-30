import { motion } from 'framer-motion';

import Socials from '@/app/components/Socials';

export default function Home() {
  return (
    <section
      className='h-[110vh] flex items-center justify-center bg-cover 2xl:bg-[url("/images/hh-4.jpg")] lg:bg-[url("/images/hh-11.jpg")] bg-[url("/images/hh-5.jpg")] lg:bg-center bg-[center_bottom_70%] overflow-hidden custom-clip-path-2'
      id='home'
    >
      <div className='absolute flex justify-center items-center left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[calc(45vw+200px)] lg:top-[55%] w-[100vw] top-[90%] z-10'>
        <motion.img
          src='/svg/hh-svg.svg'
          alt='Hush Hush Logo'
          initial={{
            scale: 0,
          }}
          viewport={{ once: true }}
          whileInView={{ scale: 1 }}
        />
      </div>
      <Socials className='pb-[125px] hidden' />
    </section>
  );
}
