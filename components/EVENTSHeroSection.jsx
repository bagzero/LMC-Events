"use client"
import { useState } from 'react';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
});

// Enhanced event data with more details
const events = [
  {
    date: '2025-03-02',
    title: 'Tech Meetup at LMC',
    description: 'A meetup for tech enthusiasts to discuss the latest trends in AI and software development.',
    time: '6:00 PM',
    venue: 'Main Arena',
    type: 'Technology',
    attendees: 450
  },
  {
    date: '2025-03-06',
    title: 'Networking at Uptown Plaza',
    description: 'Meet professionals and business owners to expand your network.',
    time: '5:30 PM',
    venue: 'Exhibition Hall B',
    type: 'Business',
    attendees: 320
  },
  {
    date: '2025-03-12',
    title: 'Music Concert at City Park',
    description: 'Enjoy live performances from local bands at the Music Festival.',
    time: '7:00 PM',
    venue: 'Main Arena',
    type: 'Entertainment',
    attendees: 2800
  },
  {
    date: '2025-03-15',
    title: 'Web Development Workshop',
    description: 'A hands-on workshop for beginners and professionals to sharpen their web development skills.',
    time: '10:00 AM',
    venue: 'Conference Room A',
    type: 'Education',
    attendees: 175
  },
  {
    date: '2025-03-20',
    title: 'Charity Gala at Grand Hall',
    description: 'A formal event to raise funds for local charities, with live entertainment and fine dining.',
    time: '8:00 PM',
    venue: 'Grand Hall',
    type: 'Charity',
    attendees: 650
  },
  {
    date: '2025-03-25',
    title: 'Startup Pitch Event',
    description: 'Watch startups pitch their ideas to investors in this exciting event.',
    time: '1:00 PM',
    venue: 'Exhibition Hall A',
    type: 'Business',
    attendees: 400
  },
  {
    date: '2025-03-30',
    title: 'Family Day at the Arena',
    description: 'A fun and educational day for families to enjoy exhibits and fun activities.',
    time: '11:00 AM',
    venue: 'Main Arena & Exhibition Halls',
    type: 'Family',
    attendees: 1200
  },
  {
    date: '2025-03-18',
    title: 'Basketball Championship',
    description: 'Season finals between top teams competing for the regional championship.',
    time: '7:30 PM',
    venue: 'Main Arena',
    type: 'Sports',
    attendees: 3500
  },
  {
    date: '2025-03-08',
    title: 'Art Exhibition Opening',
    description: 'Featuring works from local and international artists exploring modern themes.',
    time: '6:00 PM',
    venue: 'Exhibition Hall C',
    type: 'Art',
    attendees: 380
  },
  {
    date: '2025-03-27',
    title: 'Food & Wine Festival',
    description: 'Sample cuisine and beverages from the finest local restaurants and wineries.',
    time: '5:00 PM',
    venue: 'Exhibition Hall A & B',
    type: 'Culinary',
    attendees: 1800
  }
];

// Helper function to generate calendar days for March 2025
const generateCalendarDays = () => {
  const daysInMarch = 31;
  const startDay = new Date('2025-03-01').getDay(); // Get the first day of March (0: Sunday, 6: Saturday)
  const days = Array.from({ length: daysInMarch }, (_, i) => i + 1);

  const calendarGrid = [];
  let currentRow = [];

  // Add empty cells before the first of March
  for (let i = 0; i < startDay; i++) {
    currentRow.push(null); // Empty cells
  }

  // Add days of the month
  days.forEach((day) => {
    if (currentRow.length === 7) {
      calendarGrid.push(currentRow);
      currentRow = [];
    }
    currentRow.push(day);
  });

  // Fill in any remaining cells in the last row
  while (currentRow.length < 7 && currentRow.length > 0) {
    currentRow.push(null);
  }

  if (currentRow.length > 0) {
    calendarGrid.push(currentRow);
  }

  return calendarGrid;
};

// Function to get event type color
const getEventTypeColor = (type) => {
  const typeColors = {
    Technology: 'bg-blue-600',
    Business: 'bg-purple-600',
    Entertainment: 'bg-pink-500',
    Education: 'bg-green-600',
    Charity: 'bg-amber-500',
    Family: 'bg-teal-500',
    Sports: 'bg-red-600',
    Art: 'bg-indigo-600',
    Culinary: 'bg-orange-500'
  };
  
  return typeColors[type] || 'bg-gray-600';
};

// Function to format date in a nice readable format
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const EVENTSHeroSection = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);

  const handleClickDate = (date) => {
    setSelectedDate(date === selectedDate ? null : date);
  };

  const getEventsForDate = (dateString) => {
    return events.filter(event => event.date === dateString);
  };

  return (
    <div className="py-10">
      <div className="w-full max-w-6xl mx-auto bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <h2 className="font-bold mb-8 text-center">
          <span className="">
            MARCH 2025 <span className="BlueTextGradient">EVENTS CALENDAR</span>
          </span>
        </h2>

        {/* Calendar Grid */}
        <div className="mb-8">
          {/* Weekdays Header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
              <div key={index} className="BlueGradient text-white p-3 text-center font-medium rounded-t">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1 bg-gray-100 p-1 rounded-lg">
            {generateCalendarDays().flat().map((day, index) => {
              const dateString = day ? `2025-03-${day.toString().padStart(2, '0')}` : null;
              const dayEvents = dateString ? getEventsForDate(dateString) : [];
              const hasEvents = dayEvents.length > 0;
              const isSelected = selectedDate === dateString;
              const isHovered = hoveredDay === dateString;
              
              return (
                <div
                  key={index}
                  className={`relative min-h-32 p-2 transition-all duration-200 rounded ${
                    !day ? 'bg-gray-50 opacity-50' : 
                    isSelected ? 'bg-blue-100 shadow-inner border-2 border-blue-500' :
                    isHovered ? 'bg-blue-50' : 'bg-white'
                  } ${day ? 'cursor-pointer hover:bg-blue-50' : ''}`}
                  onClick={() => day && handleClickDate(dateString)}
                  onMouseEnter={() => day && setHoveredDay(dateString)}
                  onMouseLeave={() => setHoveredDay(null)}
                >
                  {day && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${hasEvents ? 'text-blue-600' : 'text-gray-700'}`}>
                          {day}
                        </span>
                        {hasEvents && (
                          <span className="bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5">
                            {dayEvents.length}
                          </span>
                        )}
                      </div>
                      
                      <div className="mt-1 space-y-1">
                        {dayEvents.slice(0, 2).map((event, idx) => (
                          <div 
                            key={idx} 
                            className={`text-xs p-1 rounded truncate text-white font-medium ${getEventTypeColor(event.type)}`}
                          >
                            {event.time} - {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-blue-600 font-medium">
                            +{dayEvents.length - 2} more
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Event Details */}
        {selectedDate && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-1 rounded-lg shadow-lg mt-6">
            <div className="bg-white rounded-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-blue-600">
                  Events on {formatDate(selectedDate)}
                </h2>
                <button 
                  onClick={() => setSelectedDate(null)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>
              
              {getEventsForDate(selectedDate).length === 0 ? (
                <p className="text-gray-700">No events scheduled for this day.</p>
              ) : (
                <div className="space-y-6">
                  {getEventsForDate(selectedDate).map((event, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                        <span className={`text-xs rounded-full px-2 py-1 text-white ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-2">{event.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
                        <div className="flex items-center text-sm text-gray-700">
                          <div className="w-4 h-4 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                          </div>
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <div className="w-4 h-4 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                          </div>
                          {event.venue}
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <div className="w-4 h-4 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                          </div>
                          {event.attendees.toLocaleString()} Attendees
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EVENTSHeroSection;