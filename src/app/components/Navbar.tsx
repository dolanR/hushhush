export default function Navbar() {
  return (
    <nav className='bg-transparent shadow-lg absolute top-0 left-0 w-full h-[7%] pr-12'>
      <div className='flex items-center justify-between text-white h-full'>
        <div></div>
        <ul className='flex items-center space-x-6'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
