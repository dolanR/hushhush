import Socials from '@/app/components/Socials';

export default function Tour() {
  return (
    <section
      className='h-screen flex flex-col md:px-36 px-24 justify-center text-center items-center text-white'
      id='tour'
    >
      <h1 className='md:text-9xl text-7xl font-bold'>TOUR INFO COMING SOON</h1>
      <p className='md:text-3xl text-2xl p-6'>
        In the meantime, keep up with us on our socials!
      </p>
      <Socials />
    </section>
  );
}
