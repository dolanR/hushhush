import { FormEvent, useEffect, useState } from 'react';

export default function SignupForm({
  status,
  onValidated,
}: {
  status: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onValidated: any;
}) {
  const [email, setEmail] = useState<string>('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (document.getElementById('email')?.getAttribute('value') !== '') return;
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  useEffect(() => {
    if (status === 'success') {
      setEmail('');
    }
  }, [status]);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-row gap-6'>
      <input
        type='email'
        id='emailjlfk'
        className='bg-neutral-900 border-white border-[2px] text-white text-sm rounded-md  sm:max-w-[500px] sm:min-w-[300px] p-2.5 bg-opacity-25'
        placeholder='example@gmail.com'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type='hidden' value='1' name='group[1][1]' />
      <button
        type='submit'
        className={`flex items-center justify-center text-white rounded-md bg-transparent border-[2px] font-bold text-xs sm:text-lg md:text-xl px-2 hover:bg-white hover:mix-blend-screen transition-all duration-200 hover:text-black shadow-lg ${
          status === 'success' ? 'hidden' : ''
        }`}
      >
        <input
          type='text'
          id='email'
          autoComplete='off'
          placeholder='Your e-mail here'
          className='honey-honey'
        />
        Sign Up
      </button>
      <div className='flex justify-center items-center'>
        {status === 'sending' && (
          <p className='text-white bg-transparent font-bold text-base sm:text-lg md:text-xl'>
            Sending...
          </p>
        )}
        {status === 'error' && (
          <p className='text-red-500 bg-transparent font-bold text-base sm:text-lg md:text-xl'>
            Some sort of issue happened, try again. If it persists, contact
            thebandhushhush@gmail.com
          </p>
        )}
        {status === 'success' && (
          <p className='text-white bg-transparent font-bold text-base sm:text-lg md:text-xl'>
            Subscribed!
          </p>
        )}
      </div>
    </form>
  );
}
