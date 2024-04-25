export default function Hamburger({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
}) {
  return (
    <div
      className='flex flex-col z-50 items-center justify-center cursor-pointer lg:m-10 fixed p-3 right-0 top-0 sm:m-6 m-3'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`lg:w-14 lg:h-2 w-9 h-1 bg-white transition-all duration-300 ease-out ${
          isOpen
            ? '-rotate-45 translate-y-3 lg:translate-y-4'
            : 'translate-y-0.5'
        }`}
      ></div>
      <div
        className={`lg:w-14 lg:h-2 w-9 h-1 bg-white mt-2 transition-all duration-300 ease-out ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>
      <div
        className={`lg:w-14 lg:h-2 w-9 h-1 bg-white mt-2 transition-all duration-300 ease-out ${
          isOpen
            ? 'rotate-45 -translate-y-3 lg:-translate-y-4'
            : '-translate-y-0.5'
        }`}
      ></div>
    </div>
  );
}
