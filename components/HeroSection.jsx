"use client"

import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

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

const HeroSection = () => {
    const refs = Array.from({ length: 10 }, () => React.createRef());
    const visibility = refs.map(ref => useOnScreen(ref));

    return (
        <div className="flex flex-col pb-[50px]">
            <div className="w-full flex flex-wrap items-center justify-center px-auto py-[100px]">
                <div ref={refs[0]} className={`flex flex-col md:w-[40%] w-[80%] md:text-start text-center gap-[40px] transition-all duration-700 ${visibility[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
                    <div className="flex flex-col gap-[20px]">
                        <h1 ref={refs[1]} className={`${bebasNeue.className} text-h1 font-bold leading-[120px] transition-all duration-700 ${visibility[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Experience the heart of your <span className="BlueTextGradient">Community.</span></h1>
                        <h5 ref={refs[2]} className={`text-h2 w-[73%] transition-all duration-700 ${visibility[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>We are your venue for every event. Ranging from sporting matches to lively music concerts, our events always capture the beauty of the Charlotte community.</h5>
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
                <div className="relative">
                    <div ref={refs[4]} className={`w-[400px] z-230 ml-[150px] transition-all duration-700 ${visibility[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
                        <Image
                            src="/community clean up.png"
                            alt="pic 1"
                            layout="responsive"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div ref={refs[5]} className={`w-[400px] z-10 mr-[30px] -mt-[150px] transition-all duration-700 ${visibility[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
                        <Image
                            src="/cheerleeding.jpg"
                            alt="pic 2"
                            layout="responsive"
                            width={0}
                            height={0}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-between flex-wrap px-[10%] py-[100px] md:py-[50px] sm:py-[30px] md:flex-col md:gap-8">
                <div ref={refs[6]} className={`w-[40%] md:w-full transition-all duration-700 ${visibility[6] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <Image
                        src="/homepage pic 1.jpeg"
                        alt="pic 1"
                        layout="responsive"
                        width={0}
                        height={0}
                    />
                </div>
                <div ref={refs[7]} className={`flex flex-col gap-[50px] md:gap-[30px] w-[55%] md:w-full text-justify transition-all duration-700 ${visibility[7] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h4 className="text-[25px] md:text-[20px] sm:text-[18px]">Welcome to LMC Events, a modern and versatile arena that brings people together. Our space is designed to host everything from thrilling sports events to unforgettable concerts, trade shows, and much more. As the heart of the community, we take pride in providing an exceptional experience for all guests.</h4>
                    <Link
                        href="/arena"
                        className="text-[20px] md:text-[18px] flex items-center gap-[10px]"
                    >
                        <div ref={refs[8]} className={`w-[35px] md:w-[25px] rotate-[-135deg] transition-all duration-700 ${visibility[8] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <Image
                                src="/black right arrow.png"
                                alt="arrow"
                                layout="responsive"
                                width={0}
                                height={0}
                            />
                        </div>
                        VIEW ARENA DETAILS
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;