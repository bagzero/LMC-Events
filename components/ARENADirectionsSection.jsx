"use client"

import Image from 'next/image'
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

const ARENADirectionsSection = () => {
    const refs = Array.from({ length: 6 }, () => React.createRef());
    const visibility = refs.map(ref => useOnScreen(ref));

    return (
        <div className="w-full bg-black text-white py-[100px]">
            <div className="w-[80%] mx-auto flex flex-col flex-wrap gap-[50px]">
                <div ref={refs[0]} className={`flex flex-col gap-[20px] transition-all duration-700 ${visibility[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="font-semibold">Directions and Parking Information</h3>
                    <h5 className="font-light">Located at 348 Tryon Street, Charlotte, NC, the gymnasium is conveniently accessible via Screed Rd. Details for getting to the venue include:</h5>
                </div>

                <div className="flex flex-col gap-[50px]">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex flex-wrap gap-[40px]">
                            {[1, 2].map((index) => (
                                <div key={index} ref={refs[index]} className={`w-[${index === 1 ? '450px' : '250px'}] 3xl:w-[${index === 1 ? '528px' : '308px'}] transition-all duration-700 ${visibility[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                    <Image
                                        src={index === 1 ? '/basketball stadium.png' : '/bus stop.png'}
                                        alt="gallery"
                                        layout="responsive"
                                        width={0}
                                        height={0}
                                    />
                                </div>
                            ))}
                        </div>
                        <div ref={refs[3]} className={`flex flex-col gap-[10px] max-w-[30%] text-white transition-all duration-700 ${visibility[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h5 className="font-light mb-[30px]">
                                Located at 348 Tryon Street, Charlotte, NC, the gymnasium is conveniently accessible via Screed Rd. Details for getting to the venue include:
                            </h5>
                            <h5 className="font-light">
                                The gym is located near Screed Road with easy access to public transportation.
                            </h5>
                        </div>
                    </div>

                    <div className="flex justify-center gap-[150px] items-center">
                        <div ref={refs[4]} className={`max-w-[475px] flex flex-col transition-all duration-700 ${visibility[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h3 className="font-semibold">Seating Chart and Policies</h3>
                            <div className="flex flex-col gap-[20px]">
                                <h5 className="font-light">Food and Drink: Outside food and beverages are not permitted, but concessions will be available at the venue.</h5>
                                <h5 className="font-light">Bag Policy: Small bags and backpacks are allowed. Please check for any restricted items listed on our policy page.</h5>
                                <h5 className="font-light">Event Cancellations: If an event is canceled, refunds will be processed according to our school’s policy.</h5>
                            </div>
                        </div>

                        <div ref={refs[5]} className={`w-[450px] 3xl:w-[560px] transition-all duration-700 ${visibility[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <Image
                                src="/gym seating.png"
                                alt="gallery"
                                layout="responsive"
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ARENADirectionsSection