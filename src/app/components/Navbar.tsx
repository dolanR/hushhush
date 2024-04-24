export default function Navbar() {
  const navItems = ['ABOUT', 'MERCH', 'MUSIC', 'TOUR', 'SIGN-UP'];
  return (
    <nav className='bg-transparent absolute z-20 w-full p-6 hidden lg:block'>
      <div className='flex items-center justify-center text-white h-full font-extrabold text-4xl tracking-tight'>
        <ul className='flex items-center gap-6'>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                className={`transition-all duration-300 ease-in-out
                ${
                  index % 2 == 0
                    ? 'hh-purple font-outline-1'
                    : 'text-black font-outline-2'
                }`}
                href={`${
                  item == 'MERCH'
                    ? 'https://hushhush.printify.me/products'
                    : '#' + item.toLowerCase()
                }`}
                {...(item == 'MERCH' && { target: '_blank' })}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
