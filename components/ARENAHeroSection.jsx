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

const ARENAHeroSection = () => {
    const refs = Array.from({ length: 4 }, () => React.createRef());
    const visibility = refs.map(ref => useOnScreen(ref));

    return (
        <div className="flex flex-col pb-[50px]">
            <div className="w-full flex flex-wrap justify-center px-[10%] py-[100px]">
                <div ref={refs[0]} className={`flex flex-col w-[45%] gap-[40px] transition-all duration-700 ${visibility[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col gap-[20px]">
                        <h1 className={`${bebasNeue.className} text-h1 font-bold leading-[120px]`}>Where we are located.</h1>
                    </div>
                    <div className="max-w-[80%] flex flex-col">
                        <h5 ref={refs[1]} className={`transition-all duration-700 ${visibility[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>We are located in Charlotte, Uptown. Our arena seats more than 3,500 people.</h5>
                        <h5 ref={refs[2]} className={`transition-all duration-700 ${visibility[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>We host events approximately every weekend.</h5>
                    </div>
                    <div ref={refs[3]} className={`flex transition-all duration-700 ${visibility[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Link
                            href="/events"
                            className={`${bebasNeue.className} tracking-[3px] flex BlueGradient text-[16px] px-[20px] py-[10px] text-white 
                      shadow-[-4px_4px_8px_rgba(0,0,0,0.3)] 
                      hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] 
                      transition-all duration-200 ease-in-out`}
                        >
                            Browse Events
                        </Link>
                    </div>
                </div>
                <div className="w-[600px]">
                    <Image
                        src="/map location.jpg"
                        alt="pic 1"
                        layout="responsive"
                        width={0}
                        height={0}
                    />
                </div>
            </div>
        </div>
    );
};

export default ARENAHeroSection;
