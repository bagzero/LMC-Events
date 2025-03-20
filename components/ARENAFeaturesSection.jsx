"use client"

import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
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

const ARENAFeaturesSection = () => {
    const refs = Array.from({ length: 4 }, () => React.createRef());
    const visibility = refs.map(ref => useOnScreen(ref));

    return (
        <div className="max-w-[90%] 3xl:max-w-[75%] py-[100px] mx-auto text-center justify-center flex flex-col items-center gap-[50px]">
            <div className="flex flex-col gap-[10px]">
                <h3 className="mb-4 font-semibold">Venue Features:</h3>
                <h5 className="mb-8 font-light">
                    At LMC Events, we’re dedicated to offering an exceptional experience for every event.
                </h5>
            </div>

            <div className="flex justify-between gap-5">
                {[
                    { src: '/speaker icon.png', title: 'Exceptional Audio & Visual Equipment', desc: 'We provide essential sound systems and projectors to support events.' },
                    { src: '/seating icon.png', title: 'Comfortable Seating for 3,500 Guests', desc: 'Ample seating arrangements for attendees with bleachers or folding chairs' },
                    { src: '/wifi icon.png', title: 'High-Speed Wi-Fi', desc: 'Free Wi-Fi is available for attendees to stay connected during events.' },
                    { src: '/snacks icon.png', title: 'Concessions Stand', desc: 'Enjoy a variety of snacks and drinks available at our concessions.' }
                ].map((feature, index) => (
                    <div ref={refs[index]} key={index} className={`flex flex-col gap-[20px] max-w-[22%] transition-all duration-700 ${visibility[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex">
                            <div className="px-[20px] py-[15px] bg-white rounded-[25px] BoxShadow flex justify-center items-center">
                                <div className="w-[60px]">
                                    <Image
                                        src={feature.src}
                                        alt="gallery"
                                        layout="responsive"
                                        width={0}
                                        height={0}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px] text-start">
                            <h5 className="font-bold">{feature.title}</h5>
                            <h6 className="font-light">{feature.desc}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ARENAFeaturesSection