import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Words({ value }: { value: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.95', 'start 0.35'],
  });

  const words = value.split(' ');
  return (
    <p
      className='lg:max-w-[85%] md:max-w-[90%] max-w-full p-12 text-white flex flex-wrap xl:text-5xl lg:text-4xl sm:text-4xl text-lg font-bold'
      ref={element}
    >
      &emsp;
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: number[];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className='mr-2 box-border sm:mr-3'>
      <span className='absolute opacity-25'>{children}</span>
      <motion.span style={{ opacity }} className=''>
        {children}
      </motion.span>
    </span>
  );
};
