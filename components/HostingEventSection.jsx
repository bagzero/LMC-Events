"use client"

import { Bebas_Neue } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
});

const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};

const HostingEventSection = () => {
  const refs = Array.from({ length: 7 }, () => React.createRef());
  const visibility = refs.map(ref => useOnScreen(ref));

  return (
    <div className="max-w-[60%] py-[100px] mx-auto text-center justify-center flex flex-col items-center gap-[50px]">
      <div ref={refs[0]} className={`flex flex-col gap-[10px] transition-all duration-700 ${visibility[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="mb-4 font-semibold">Interested in hosting your own event?</h2>
        <h5 className="mb-8 font-light max-w-[90%]">
          At LMC Events, we offer a variety of rental options to meet your event's
          needs. Our pricing is based on event size, duration, and specific
          requirements. Reach out to us for a tailored quote that fits your budget and
          vision.
        </h5>
      </div>

      <div className="flex justify-between gap-5">
        {["/luggage icon.png", "/projector icon.png", "/carpark icon.png"].map((src, index) => (
          <div key={index} ref={refs[index + 1]} className={`flex flex-col gap-[20px] max-w-[35%] transition-all duration-700 ${visibility[index + 1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex">
              <div className="px-[20px] py-[15px] bg-white rounded-[25px] BoxShadow flex justify-center items-center">
                <div className="w-[60px]">
                  <Image
                    src={src}
                    alt="icon"
                    layout="responsive"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] text-start">
              <h5 className="font-bold">{index === 0 ? 'Customizable event spaces' : index === 1 ? 'Audiovisual Equipment' : 'On-site parking'}</h5>
              <h6 className="font-light">
                {index === 0 ? 'Choose from a variety of setups, including theater, banquet, and conference styles.' :
                  index === 1 ? 'Professional sound systems, projectors, and lighting to enhance your event.' :
                  'Ample parking for your guests.'}
              </h6>
            </div>
          </div>
        ))}
      </div>

      <div ref={refs[4]} className={`flex transition-all duration-700 ${visibility[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Link
          href="/contact"
          className={`${bebasNeue.className} tracking-[3px] flex BlueGradient text-[16px] px-[20px] py-[10px] text-white 
                  shadow-[-4px_4px_8px_rgba(0,0,0,0.3)] 
                  hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] 
                  transition-all duration-300 ease-in-out
                  hover:opacity-90 hover:scale-95`}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default HostingEventSection;
