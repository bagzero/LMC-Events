import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link'
import React from 'react'


const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400']
});

const ARENAQuestionsSection = () => {
    return (
        <div className="max-w-[550px] mx-auto flex flex-col gap-[30px] py-[150px]">
            <div className="flex flex-col gap-[10px]">

                <h2 className="font-semibold text-center">Got Questions?</h2>
                <h5 className="font-light text-center">Our team is available to assist with any questions related to the gymnasium, including bookings, technical support, or general inquiries. Reach out via the contact form or give us a call.</h5>
            </div>
            <div className="flex justify-center">

                <Link
                    href="/events"
                    className={`${bebasNeue.className} tracking-[3px] flex BlueGradient text-[16px] px-[20px] py-[10px] text-white 
                shadow-[-4px_4px_8px_rgba(0,0,0,0.3)] 
                hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] 
                transition-all duration-200 ease-in-out`}
                >
                    Contact Us
                </Link>
            </div>
        </div>
    )
}

export default ARENAQuestionsSection