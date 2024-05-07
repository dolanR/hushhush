import { motion } from 'framer-motion';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';

import Backdrop from '@/app/Components/Backdrop';
import SignupForm from '@/app/Components/SignupForm';

export default function SignupModal({
  handleClose,
}: {
  handleClose: () => void;
}) {
  const url = `https://gmail.us18.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&amp;id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}&amp;f_id=0084c2e1f0`;

  const dropIn = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { y: '100vh', opacity: 0 },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='sm:max-w-[650px] max-w-[96%] fixed z-50 bg-[url("/images/hh-11.jpg")]  px-6 py-12 text-white text-center flex flex-col gap-6 items-center justify-center'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <button className='top-4 right-4 text-2xl absolute'>
          <IoClose onClick={handleClose} />
        </button>
        <p className='text-2xl font-bold'>
          Sign up for our newsletter! Stay up to date with all of HUSH HUSH's
          latest news including releases, new band merch, and more!
        </p>
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
      </motion.div>
    </Backdrop>
  );
}
