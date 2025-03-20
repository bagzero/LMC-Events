"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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

const Footer = () => {
    const refs = Array.from({ length: 20 }, () => React.createRef());
    const visibility = refs.map(ref => useOnScreen(ref));

    return (
        <div className="flex flex-col w-full bg-black gap-[100px] justify-center items-center text-white py-[30px]">
            <div className="flex flex-wrap gap-[35px] xl:gap-[50px] justify-center items-center">
                {[0, 1, 2, 3].map((index) => (
                    <React.Fragment key={index}>
                        <div ref={refs[index]} className={`gap-[20px] flex transition-all duration-700 ${visibility[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="w-[35px] xl:w-[55px]">
                                <Image
                                    src={`/${['microphone icon.png', 'warranty icon.png', 'ticket icon.png', 'star icon.png'][index]}`}
                                    alt={`icon ${index}`}
                                    layout="responsive"
                                    width={0}
                                    height={0}
                                />
                            </div>
                            <div className="flex flex-col mt-[35px] gap-[10px]">
                                <h4 className="text-[14px] xl:text-[17px] font-semibold">{['Host Unforgettable Events', 'A Winning Sports Venue', 'Premier Concerts & Performances', 'Inclusive Event Access'][index]}</h4>
                                <h4 className="text-[10px] xl:text-[13px] font-light">{['Versatile venue for any occasion.', 'Perfect for tournaments and championships.', 'Enjoy community shows in a top-tier venue.', 'Get your tickets & experience the excitement.'][index]}</h4>
                            </div>
                        </div>
                        {index !== 3 && <div className="bg-white opacity-30 w-[2px] h-[50px]" />}
                    </React.Fragment>
                ))}
            </div>

            <div className="flex justify-between w-[80%] flex-wrap items-center">
                <h2 className="font-bold">Book your event today</h2>
                <div className="gap-[75px] flex flex-wrap">
                    <div ref={refs[4]} className={`flex flex-col gap-[10px] max-w-[150px] transition-all duration-700 ${visibility[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h4 className="text-[20px] font-bold">Address</h4>
                        <h6 className="opacity-70">348 Tryon Street, Charlotte, NC, 28277 USA</h6>
                    </div>
                    <div ref={refs[5]} className={`flex flex-col gap-[10px] transition-all duration-700 ${visibility[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h4 className="text-[20px] font-bold">Say Hello</h4>
                        <h6 className="opacity-70 underline">ayush.bhujle@gmail.com</h6>
                        <h6 className="opacity-70">+1 919 888 9077</h6>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-[80%] gap-[20px]">
                <div className="bg-white opacity-30 h-[2px] w-full" />
                <div className="flex justify-between">
                    <div className="flex gap-[30px]">
                        {['Events', 'Contact', 'Arena Information'].map((text, index) => (
                            <Link ref={refs[6 + index]} key={text} className={`font-[18px] transition-all duration-700 ${visibility[6 + index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} href={`/${text.toLowerCase().replace(' ', '-')}`}>{text}</Link>
                        ))}
                    </div>
                    <h4 ref={refs[11]} className={`tracking-[1px] text-[14px] transition-all duration-700 ${visibility[11] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Coded and Designed by <span className="BlueTextGradient">Ayush Bhujle</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Footer
