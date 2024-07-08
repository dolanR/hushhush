import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';

import SignupForm from '@/app/components/SignupForm';

export default function Newsletter() {
  const url = `https://gmail.us18.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&amp;id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}&amp;f_id=0084c2e1f0`;

  return (
    <section className='h-[30vh] flex flex-col md:px-36 sm:px-24 px-2 justify-center text-center items-center text-white sm:mb-24 md:mb-36'>
      <p className='md:text-6xl sm:text-4xl text-lg pb-6 max-w-[1250px] font-bold'>
        Sign up for our newsletter to stay up to date with all things HUSH HUSH
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
