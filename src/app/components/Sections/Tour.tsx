import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';

import SignupForm from '@/app/components/SignupForm';
import Socials from '@/app/components/Socials';
export default function Tour() {
  const url = `https://gmail.us18.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&amp;id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}&amp;f_id=0084c2e1f0`;

  return (
    <section
      className='h-screen flex flex-col md:px-36 sm:px-24 px-2 justify-center text-center items-center text-white'
      id='tour'
    >
      <h1 className='lg:text-9xl md:text-8xl sm:text-7xl text-5xl font-bold'>
        TOUR INFO COMING SOON
      </h1>
      <p className='md:text-3xl sm:text-2xl text-lg pt-6'>
        In the meantime, keep up with us on our socials
      </p>
      <Socials className='flex' />
      <p className='md:text-3xl sm:text-2xl text-lg pb-6'>
        And sign up for our newsletter!
      </p>
      <div className='flex flex-row gap-6 pb-6'>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status }) => (
            <div className='flex flex-row gap-6'>
              <SignupForm
                status={status}
                onValidated={(formData: EmailFormFields) => subscribe(formData)}
              />
            </div>
          )}
        />
      </div>
    </section>
  );
}
