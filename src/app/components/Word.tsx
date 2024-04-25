import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { RefObject, useRef } from 'react';

export default function Words({
  value,
  ref,
}: {
  value: string;
  ref: RefObject<HTMLElement>;
}) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    container: ref,
    offset: ['start 0.9', 'start 0.05'],
  });

  const words = value.split(' ');
  return (
    <p
      className='font-5xl lg:max-w-[85%] md:max-w-[90%] max-w-[97%] p-12 text-white flex flex-wrap lg:text-5xl sm:text-3xl text-xl leading-tight  font-bold'
      ref={element}
    >
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
    <span className='mr-3'>
      <span className='absolute opacity-25'>{children}</span>
      <motion.span style={{ opacity }} className='relative'>
        {children}
      </motion.span>
    </span>
  );
};
