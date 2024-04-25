import { motion } from 'framer-motion';
import { BsSoundwave } from 'react-icons/bs';

export default function SoundButton({
  isMuted,
  setIsMuted,
}: {
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3, repeat: isMuted ? 0 : Infinity }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`xl:text-8xl lg:text-7xl md:text-5xl sm:text-5xl text-4xl ${
        isMuted ? 'text-neutral-500' : 'text-white'
      } fixed left-0 top-0 sm:m-7 m-4 cursor-pointer z-20`}
      onClick={() => {
        setIsMuted(!isMuted);
      }}
    >
      <BsSoundwave></BsSoundwave>
    </motion.div>
  );
}
