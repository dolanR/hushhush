import Socials from '@/app/components/Socials';

export default function Tour() {
  return (
    <section
      className='h-screen flex flex-col md:px-36 px-24 justify-center text-center items-center text-white'
      id='tour'
    >
      <h1 className='md:text-9xl text-7xl font-bold'>TOUR INFO COMING SOON</h1>
      <p className='md:text-3xl text-2xl p-6'>
        In the meantime, keep up with us on our socials
      </p>
      <Socials className='' />
      <p className='md:text-3xl text-2xl p-6'>
        And sign up for our newsletter!
      </p>
      <div className='flex flex-row gap-6'>
        <input
          type='email'
          id='email'
          className='bg-neutral-900 border-white border-[2px] text-white text-sm rounded-md focus:ring-[#7c07a8] focus:border-[#7c07a8] block sm:max-w-[500px] sm:min-w-[300px] p-2.5   bg-opacity-25'
          placeholder='example@gmail.com'
          required
        />
        <button className='flex items-center justify-center text-white rounded-md bg-transparent border-[2px] font-bold text-xl px-2 hover:border-[#7c07a8]'>
          Sign up
        </button>
      </div>
    </section>
  );
}
