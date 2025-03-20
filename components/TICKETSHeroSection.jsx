"use client"

// pages/tickets.js
import { useState, useEffect } from 'react';
import { Bebas_Neue, Jost } from 'next/font/google';
import GradientButton from '../components/GradientButton';
import Head from 'next/head';
import Link from 'next/link';


const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400']
});

// Sample event data
const events = [
    {
        id: 1,
        title: "Annual School Basketball Tournament",
        date: "June 15, 2025",
        location: "Main Gymnasium",
        image: "/basketball tournament.jpg",
        price: 75,
        available: true,
        description: "Support our school teams as they compete in this exciting basketball tournament. Concessions available."
    },
    {
        id: 2,
        title: "Spring Talent Show 2024-2025",
        date: "July 8, 2025",
        location: "Gymnasium Stage",
        image: "talent show.webp/",
        price: 60,
        available: true,
        description: "Come enjoy performances from our talented students showcasing music, dance, comedy and more!"
    },
    {
        id: 3,
        title: "Parent-Teacher Volleyball Match",
        date: "August 22, 2025",
        location: "Secondary Gymnasium",
        image: "/volleyball.jpg",
        price: 45,
        available: false,
        description: "A fun-filled evening watching teachers and parents compete in a friendly volleyball match. Proceeds support the athletics program."
    }
];

export default function TICKETSHeroSection() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Simulating loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleEventSelect = (event) => {
        setSelectedEvent(event);
        // Smooth scroll to ticket selection section
        document.getElementById('ticket-selection')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handlePurchase = () => {
        setShowConfirmation(true);
        // Scroll to confirmation section
        setTimeout(() => {
            document.getElementById('confirmation')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Head>
                <title>Buy Tickets | LMC Events</title>
                <meta name="description" content="Purchase tickets for upcoming events at LMC" />
            </Head>


            {/* Hero Section */}
            <div className={`flex flex-col w-[40%] gap-[40px] mx-auto transition-all duration-700 opacity-100 translate-y-0`}>
                <div className="flex flex-col gap-[20px]">
                    <h1 className={`mt-[100px] mb-[100px] ${bebasNeue.className} text-h1 text-center font-bold leading-[120px] transition-all duration-700 'opacity-100 translate-y-0`}>Select your <span className="BlueTextGradient">Tickets.</span></h1>
                </div>

            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Upcoming Events Section */}
                <section className="mb-20">
                    <h3 className="font-semibold mb-8 text-center">Upcoming Events</h3>

                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {events.map((event) => (
                                <div
                                    key={event.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                                >
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="font-bebas text-2xl mb-2">{event.title}</h3>
                                        <p className="text-gray-600 mb-2">{event.date} • {event.location}</p>
                                        <p className="mb-4">{event.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl font-semibold">${event.price}</span>
                                            {event.available ? (
                                                <Link
                                                    href="/events"
                                                    className={`${bebasNeue.className} tracking-[3px] flex BlueGradient text-[16px] px-[20px] py-[10px] text-white 
              shadow-[-4px_4px_8px_rgba(0,0,0,0.3)] 
              hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] 
              transition-all duration-200 ease-in-out`}
                                                    onClick={() => handleEventSelect(event)}

                                                >
                                                    Select
                                                </Link>
                                            ) : (
                                                <span className="px-4 py-2 bg-gray-300 text-gray-600">Sold Out</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Ticket Selection Section */}
                {selectedEvent && (
                    <section id="ticket-selection" className="mb-20 scroll-mt-24 animate-fade-in">
                        <h2 className="font-bebas text-4xl mb-8 text-center">Select Your Tickets</h2>
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <img
                                        src={selectedEvent.image}
                                        alt={selectedEvent.title}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bebas text-3xl mb-2">{selectedEvent.title}</h3>
                                    <p className="text-gray-600 mb-4">{selectedEvent.date} • {selectedEvent.location}</p>
                                    <div className="mb-6">
                                        <p className="text-xl mb-2">Ticket Price: <span className="font-semibold">${selectedEvent.price}</span></p>
                                        <div className="flex items-center mb-4">
                                            <label className="mr-4">Quantity:</label>
                                            <div className="flex items-center">
                                                <button
                                                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-l-md"
                                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                                >
                                                    -
                                                </button>
                                                <span className="w-12 h-8 flex items-center justify-center bg-gray-100">
                                                    {quantity}
                                                </span>
                                                <button
                                                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-r-md"
                                                    onClick={() => setQuantity(quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-xl font-bold mb-6">Total: ${(selectedEvent.price * quantity).toFixed(2)}</p>
                                        <GradientButton
                                            text="Purchase Tickets"
                                            textSize="text-lg"
                                            my="my-2"
                                            onClick={handlePurchase}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Purchase Confirmation */}
                {showConfirmation && (
                    <section id="confirmation" className="mb-20 scroll-mt-24 animate-fade-in">
                        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                            <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h2 className="font-bebas text-3xl mb-4">Thank You For Your Purchase!</h2>
                            <p className="text-lg mb-6">
                                You have successfully purchased {quantity} ticket{quantity > 1 ? 's' : ''} for {selectedEvent.title}.
                                A confirmation email has been sent to your registered email address.
                            </p>
                            <div className="flex justify-center">
                                <GradientButton
                                    text="Download Tickets"
                                    textSize="text-base"
                                    mx="mx-2"
                                    my="my-0"
                                />
                                <button className="ml-4 px-6 py-2 border-2 border-gray-500 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                                    View My Orders
                                </button>
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQ Section */}
                <section className="mb-20">
                    <h2 className="font-bebas text-4xl mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto">
                        <FaqItem
                            question="What is your refund policy?"
                            answer="We offer full refunds up to 7 days before the event. For cancellations within 7 days of the event, we offer a 50% refund or the option to transfer your ticket to another event."
                        />
                        <FaqItem
                            question="How will I receive my tickets?"
                            answer="After purchase, tickets will be emailed to you immediately. You can print them or show the QR code on your mobile device at the entrance."
                        />
                        <FaqItem
                            question="Can I transfer my ticket to someone else?"
                            answer="Yes, tickets are transferable. You can update the attendee information through your account up to 24 hours before the event."
                        />
                        <FaqItem
                            question="What if an event is canceled?"
                            answer="If an event is canceled, you will automatically receive a full refund to your original payment method within 5-7 business days."
                        />
                    </div>
                </section>
            </div>

            {/* Newsletter Signup */}
            <div className="BlueGradient py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="mb-[10px] text-white font-semibold">Stay Updated</h2>
                    <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter and be the first to know about upcoming events,
                        exclusive offers, and early access ticket sales.
                    </p>
                    <div className="text-white flex flex-col sm:flex-row justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2 rounded-md mb-4 sm:mb-0 sm:mr-2 sm:flex-grow border-1 border-solid"
                        />
                        <Link
                            href="/contact"
                            className={`${bebasNeue.className} tracking-[3px] flex BlueGradient text-[16px] px-[20px] py-[10px] text-white 
                  shadow-[-4px_4px_8px_rgba(0,0,0,0.3)] 
                  hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] 
                  transition-all duration-300 ease-in-out
                  hover:opacity-90 hover:scale-95`}
                        >
                            Subscribe
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// FAQ Item Component with toggle functionality
function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex justify-between items-center w-full text-left text-lg font-medium focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <svg
                    className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div
                className={`mt-2 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-600 pb-2">{answer}</p>
            </div>
        </div>
    );
}