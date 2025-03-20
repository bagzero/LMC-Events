"use client"

import { Bebas_Neue } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ARENAFeaturesSection from './ARENAFeaturesSection';
import { useState } from 'react';

const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400']
});

const CONTACTHeroSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form after submission if needed
        // setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="flex flex-col pb-[50px]">
            <div className="w-full flex flex-wrap items-center justify-center px-auto py-[100px]">
                <div className="flex flex-col w-[45%] gap-[40px]">
                    <div className="flex flex-col gap-[20px]">
                        <h1 className={`${bebasNeue.className} text-h1 font-bold leading-[120px] `}>Interested in hosting an event?</h1>
                        <h5 className="text-h2 w-[73%]">Make your event unforgettable by hosting it at our spacious and versatile gymnasium.</h5>
                    </div>
                </div>
                <div className="w-[600px] px-[30px] py-[35px] bg-white backdrop-blur-sm shadow-md">
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <label htmlFor="firstName" className="text-[16px] font-semibold block text-sm font-medium  mb-1">
                                First name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Your first name"
                                className="w-full px-3 py-2 bg-gray-200 border-0 rounded-md 
                      shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="col-span-1">
                            <label htmlFor="lastName" className="text-[16px] font-semibold block text-sm font-medium  mb-1">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Your last name"
                                className="w-full px-3 py-2 bg-gray-200 border-0 rounded-md 
                      shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="col-span-1">
                            <label htmlFor="email" className="text-[16px] font-semibold block text-sm font-medium  mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                className="w-full px-3 py-2 bg-gray-200 border-0 rounded-md 
                      shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="col-span-1">
                            <label htmlFor="phone" className="text-[16px] font-semibold block text-sm font-medium  mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Your phone number"
                                className="w-full px-3 py-2 bg-gray-200 border-0 rounded-md 
                      shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="message" className="text-[16px] font-semibold block text-sm font-medium  mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Leave us a message..."
                                rows={4}
                                className="w-full px-3 py-2 bg-gray-200 border-0 rounded-md 
                      shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="col-span-2 mt-2">
                            <div className="flex">
                                <Link
                                    href="/events"
                                    className={`${bebasNeue.className} tracking-[3px] flex BlueGradient text-[16px] w-full text-center  justify-center flex px-[20px] py-[10px] text-white 
                  shadow-[-4px_4px_8px_rgba(0,0,0,0.3)] 
                  hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] 
                  transition-all duration-300 ease-in-out
                  hover:scale-95`}
                                >
                                    Send Message
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="max-w-[90%] 3xl:max-w-[75%] py-[100px] mx-auto text-center justify-center flex flex-col items-center gap-[50px]">
                <div className="flex flex-col gap-[10px]">
                    <h3 className="mb-4 font-semibold">Why Choose Our Gymnasium?</h3>
                    <h5 className="mb-8 font-light">
                        At LMC Events, we’re dedicated to offering an exceptional experience for every event.
                    </h5>
                </div>

                <div className="flex justify-between gap-5">
                    <div className="flex flex-col gap-[20px] max-w-[22%]">
                        <div className="flex">

                            <div className="px-[20px] py-[15px] bg-white rounded-[25px] BoxShadow flex justify-center items-center">

                                <div className="w-[60px]">
                                    <Image
                                        src="/speaker icon.png"
                                        alt="gallery"
                                        layout="responsive"  // Adjusts height based on width while maintaining aspect ratio
                                        width={0}           // leave at 0 (wrap with a div and that will choose the width)
                                        height={0}          // leave at 0
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px] text-start">
                            <h5 className="font-bold">Exceptional Audio & Visual Equipment</h5>
                            <h6 className="font-light">We provide essential sound systems and projectors to support events.</h6>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] max-w-[22%]">
                        <div className="flex">

                            <div className="px-[20px] py-[15px] bg-white rounded-[25px] BoxShadow flex justify-center items-center">

                                <div className="w-[60px]">
                                    <Image
                                        src="/seating icon.png"
                                        alt="gallery"
                                        layout="responsive"  // Adjusts height based on width while maintaining aspect ratio
                                        width={0}           // leave at 0 (wrap with a div and that will choose the width)
                                        height={0}          // leave at 0
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px] text-start">
                            <h5 className="font-bold">Comfortable Seating for 3,500 Guests</h5>
                            <h6 className="font-light">Ample seating arrangements for attendees with bleachers or folding chairs</h6>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] max-w-[22%]">
                        <div className="flex">

                            <div className="px-[20px] py-[15px] bg-white rounded-[25px] BoxShadow flex justify-center items-center">

                                <div className="w-[60px]">
                                    <Image
                                        src="/wifi icon.png"
                                        alt="gallery"
                                        layout="responsive"  // Adjusts height based on width while maintaining aspect ratio
                                        width={0}           // leave at 0 (wrap with a div and that will choose the width)
                                        height={0}          // leave at 0
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px] text-start">
                            <h5 className="font-bold">High-Speed Wi-Fi</h5>
                            <h6 className="font-light">Free Wi-Fi is available for attendees to stay connected during events.</h6>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[20px] max-w-[22%]">
                        <div className="flex">

                            <div className="px-[20px] py-[15px] bg-white rounded-[25px] BoxShadow flex justify-center items-center">

                                <div className="w-[60px]">
                                    <Image
                                        src="/snacks icon.png"
                                        alt="gallery"
                                        layout="responsive"  // Adjusts height based on width while maintaining aspect ratio
                                        width={0}           // leave at 0 (wrap with a div and that will choose the width)
                                        height={0}          // leave at 0
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px] text-start">
                            <h5 className="font-bold">Concessions Stand</h5>
                            <h6 className="font-light">Enjoy a variety of snacks and drinks available at our concessions.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CONTACTHeroSection