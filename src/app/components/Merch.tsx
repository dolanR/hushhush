/* eslint-disable @next/next/no-img-element */

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const topSlider = [
  'hh-ch-hoodie.png',
  'hh-gt-shirt.png',
  'hh-poster.png',
  'hh-gt-shirt2.png',
  'hh-shirt.png',
];

const bottomSlider = [
  'hh-tank.png',
  'hh-tr-shirt1.png',
  'hh-tr-shirt2.png',
  'hh-tr-tank.png',
  'hh-tr-tote.png',
];

export default function Merch() {
  const firstSliderRef = useRef(null);
  const secondSliderRef = useRef(null);
  const thirdSliderRef = useRef(null);
  const fourthSliderRef = useRef(null);

  let xPercentOne = 0;
  const directionOne = -1;
  let xPercentTwo = 0;
  const directionTwo = 1;

  const animation = () => {
    if (xPercentOne <= -100) {
      xPercentOne = 0;
    }
    if (xPercentTwo >= 0) {
      xPercentTwo = -100;
    }

    gsap.set(firstSliderRef.current, { xPercent: xPercentOne });
    gsap.set(secondSliderRef.current, { xPercent: xPercentOne });
    gsap.set(thirdSliderRef.current, { xPercent: xPercentTwo });
    gsap.set(fourthSliderRef.current, { xPercent: xPercentTwo });
    xPercentOne += 0.03 * directionOne;
    xPercentTwo += 0.03 * directionTwo;
    requestAnimationFrame(animation);
  };

  useEffect(() => {
    requestAnimationFrame(animation);
  });

  return (
    <section className='h-[110vh] flex flex-col overflow-x-hidden' id='merch'>
      <div className='h-[45%] flex relative'>
        <div className='h-full flex left-0' ref={firstSliderRef}>
          {topSlider.map((item, i) => {
            return (
              <div className='h-full aspect-square' key={i}>
                <img
                  src={`/images/${item}`}
                  alt='Merch'
                  className='h-full w-full pl-[2%] object-cover'
                />
              </div>
            );
          })}
        </div>
        <div className='h-full flex left-full' ref={secondSliderRef}>
          {topSlider.map((item, i) => {
            return (
              <div className='h-full aspect-square' key={i}>
                <img
                  src={`/images/${item}`}
                  alt='Merch'
                  className='h-full w-full pl-[2%] object-cover'
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className='h-[10%] w-screen flex justify-center items-center text-white'>
        <a
          className='border-[5px] pt-5 px-5 pb-6 cursor-pointer font-bold text-5xl rounded-md'
          href='https://hushhush.printify.me/products'
          target='_blank'
        >
          Shop Merch
        </a>
      </div>
      <div className='h-[45%] flex relative'>
        <div className='h-full flex' ref={thirdSliderRef}>
          {bottomSlider.map((item, i) => {
            return (
              <div className='h-full aspect-square' key={i}>
                <img
                  src={`/images/${item}`}
                  alt='Merch'
                  className='h-full w-full pl-[2%] object-cover'
                />
              </div>
            );
          })}
        </div>
        <div className='h-full flex' ref={fourthSliderRef}>
          {bottomSlider.map((item, i) => {
            return (
              <div className='h-full aspect-square' key={i}>
                <img
                  src={`/images/${item}`}
                  alt='Merch'
                  className='h-full w-full pl-[2%] object-cover'
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
