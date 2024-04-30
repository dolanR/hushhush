/* eslint-disable @next/next/no-img-element */

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import useDimension from '@/utils/useDimension';

const topSlider = [
  'hh-ch-hoodie.png',
  'hh-gt-shirt.png',
  'hh-poster.png',
  'hh-gt-shirt2.png',
  'hh-shirt.png',
  'hh-ch-hoodie.png',
  'hh-gt-shirt.png',
  'hh-poster.png',
  'hh-gt-shirt2.png',
  'hh-shirt.png',
];

const bottomSlider = [
  'hh-tr-shirt1.png',
  'hh-tr-shirt2.png',
  'hh-tr-tank.png',
  'hh-tr-tote.png',
  'hh-tank.png',
  'hh-tr-shirt1.png',
  'hh-tr-shirt2.png',
  'hh-tr-tank.png',
  'hh-tr-tote.png',
  'hh-tank.png',
  'hh-tr-shirt1.png',
  'hh-tr-shirt2.png',
  'hh-tr-tank.png',
  'hh-tr-tote.png',
  'hh-tank.png',
];

export default function Merch() {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 4]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -2]);

  return (
    <section
      className='flex justify-between h-[calc(200dvh)] overflow-hidden bg-neutral-900 relative custom-clip-path [background:radial-gradient(125%_125%_at_50%_10%,#171717_40%,#7c07a8_100%)]'
      id='merch'
      ref={container}
    >
      <Column images={topSlider} y={y1} top='-110%' />
      <div className='w-[0%] justify-center md:text-7xl sm:text-5xl text-3xl flex relative h-full text-center font-bold'>
        <motion.a
          className='text-white border-[5px] sm:border-[7px] md:border-[8px] sm:pt-5 sm:px-4 sm:pb-6 pt-4 px-3 pb-5 h-fit cursor-pointer relative text-nowrap z-10 bg-neutral-900 rounded-md'
          href='https://hushhush.printify.me/products'
          target='_blank'
          whileHover={{
            scale: 1.2,
            color: '#7c07a8',
            WebkitTextStroke: '1px #ffffff',
            borderColor: '#28dae2',
          }}
          style={{ y }}
        >
          SHOP MERCH
        </motion.a>
      </div>
      <Column images={bottomSlider} y={y2} top='0%' />
    </section>
  );
}

const Column = ({
  images,
  y,
  top,
}: {
  images: string[];
  y: MotionValue;
  top: string;
}) => {
  return (
    <motion.div style={{ y, top: top }} className='w-[50%] relative'>
      {images.map((image, index) => (
        <div
          key={index}
          className='w-full flex justify-center items-center relative'
        >
          <Image
            key={index}
            src={`/images/${image}`}
            height={500}
            width={500}
            loading='lazy'
            alt='HUSH HUSH Merch'
            className='aspect-square'
          />
        </div>
      ))}
    </motion.div>
  );
};
