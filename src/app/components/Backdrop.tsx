import { motion } from 'framer-motion';

export default function Backdrop({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.div
      className='h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
