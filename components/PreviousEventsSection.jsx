"use client"

import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link';
import { useEffect } from 'react';


const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400']
});

const EventList = () => {
    // Function to handle when an element is in the viewport
    const isVisible = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(isVisible, {
            threshold: 0.1, // Trigger when 10% of the element is visible
        });

        // Observe each event card
        const eventCards = document.querySelectorAll('.event-card');
        eventCards.forEach(card => observer.observe(card));

        return () => {
            observer.disconnect(); // Clean up the observer
        };
    }, []);

    return (
        <div className="flex flex-col py-[100px] bg-gray-100">
            <div className="w-full flex flex-wrap items-center justify-center px-auto py-[100px]">
                <div className="flex flex-col w-[80%] gap-[40px]">
                    <h2 className={`${bebasNeue.className} text-h1 font-bold leading-[120px] text-center mb-[40px]`}>
                        Previous <span className="BlueTextGradient">Events</span>
                    </h2>

                    <div className="flex flex-wrap justify-between gap-[40px]">
                        {/* Event 1 */}
                        <div className="event-card flex flex-col p-[25px] bg-white rounded-[25px] shadow-lg max-w-[45%] transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                            <h3 className="text-xl font-semibold text-gradient-blue mb-[10px]">Trade Show at LMC</h3>
                            <p className="text-sm text-gray-500 mb-[10px]">Date: March 15, 2024</p>
                            <p className="text-sm text-gray-500 mb-[10px]">Time: 10:00 AM - 1:00 PM</p>
                            <p className="text-sm text-gray-500 mb-[10px]">Location: Charlotte, Uptown</p>
                            <p className="text-sm text-gray-700">
                                A dynamic trade show with local businesses showcasing their innovative products and services.
                                A great opportunity to network and discover the latest trends in various industries.
                            </p>
                        </div>

                        {/* Event 2 */}
                        <div className="event-card flex flex-col p-[25px] bg-white rounded-[25px] shadow-lg max-w-[45%] transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                            <h3 className="text-xl font-semibold text-gradient-blue mb-[10px]">Music Festival at City Park</h3>
                            <p className="text-sm text-gray-500 mb-[10px]">Date: April 5, 2024</p>
                            <p className="text-sm text-gray-500 mb-[10px]">Time: 2:00 PM - 5:00 PM</p>
                            <p className="text-sm text-gray-500 mb-[10px]">Location: Charlotte, City Park</p>
                            <p className="text-sm text-gray-700">
                                Join us for an unforgettable experience at the Music Festival, featuring local bands, food trucks, and an electric atmosphere.
                                A perfect day out with friends and family.
                            </p>
                        </div>

                        {/* Event 3 */}
                        <div className="event-card flex flex-col p-[25px] bg-white rounded-[25px] shadow-lg max-w-[45%] transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                            <h3 className="text-xl font-semibold text-gradient-blue mb-[10px]">Business Networking at Uptown Plaza</h3>
                            <p className="text-sm text-gray-500 mb-[10px]">Date: May 20, 2024</p>
                            <p className="text-sm text-gray-500 mb-[10px]">Time: 9:00 AM - 12:00 PM</p>
                            <p className="text-sm text-gray-500 mb-[10px]">Location: Charlotte, Uptown Plaza</p>
                            <p className="text-sm text-gray-700">
                                A prime event for professionals to connect, collaborate, and explore new business opportunities.
                                Perfect for entrepreneurs, startups, and established companies looking to expand their network.
                            </p>
                        </div>

                        {/* Event 4 */}
                        <div className="event-card flex flex-col p-[25px] bg-white rounded-[25px] shadow-lg max-w-[45%] transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                            <h3 className="text-xl font-semibold text-gradient-blue mb-[10px]">Tech Conference at LMC</h3>
                            <p className="text-sm text-gray-500 mb-[10px]">Date: June 12, 2024</p>
                            <p className="text-sm text-gray-500 mb-[10px]">Time: 10:00 AM - 4:00 PM</p>
                            <p className="text-sm text-gray-500 mb-[10px]">Location: Charlotte, LMC</p>
                            <p className="text-sm text-gray-700">
                                A full-day conference bringing together industry experts and enthusiasts to discuss the latest trends in technology, software development, and AI.
                                A must-attend for anyone in the tech space.
                            </p>
                        </div>
                    </div>

                    {/* View Future Events Button */}
                    <div className="w-full flex justify-center mt-[40px]">
                        <Link
                            href="/events"
                            className={`${bebasNeue.className} tracking-[3px] flex BlueGradient text-[16px] px-[20px] py-[10px] text-white 
                  shadow-[-4px_4px_8px_rgba(0,0,0,0.3)] 
                  hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] 
 transition-all duration-300 ease-in-out
                  hover:opacity-90 hover:scale-95`}
                                          >
                            View Future Events
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventList;
