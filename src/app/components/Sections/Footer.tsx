import Socials from '@/app/components/Socials';

export default function Footer() {
  return (
    <footer
      className='py-12 bg-neutral-900 custom-clip-path-4 flex flex-col items-center justify-center text-white text-center sm:gap-6 gap-3'
      id='footer'
    >
      <Socials className='flex' />
      <div className='flex sm:flex-row flex-col gap-3 underline'>
        <a href='/privacypolicy'>Privacy Policy</a>
      </div>
      <div>&#169; {new Date().getFullYear()} HUSH HUSH</div>
      <div>
        Website by{' '}
        <a href='https://dolan.dev' className='underline' target='_blank'>
          Dolan Reynolds
        </a>
      </div>
    </footer>
  );
}
