import React, { useState } from 'react';
import person from "./Images/personjpeg.jpeg";

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('Opportunities');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen w-full bg-[#E7F0FE] p-8 flex flex-col justify-between relative">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-8 sm:mb-32 ">
        {/* Back Button */}
        <button className="text-xl md:text-6xl sm:mb-8 font-bold ">{'<'}</button>

        {/* Heading and Options Menu */}
        <div className="flex flex-col items-center flex-grow">
          <h1 className="text-lg md:text-4xl font-bold">Leaderboard</h1>

          {/* Tab Container */}
          <div className="bg-white rounded-lg p-4 px-2 md:px-8 md:gap-10 shadow-md inline-flex mt-4">
            <button
              className={`relative text-sm md:text-xl font-semibold px-4 py-2 transition-transform duration-300 ${
                activeTab === 'Opportunities' ? 'text-black' : 'text-gray-500'
              }`}
              onClick={() => handleTabClick('Opportunities')}
            >
              Opportunities
              {activeTab === 'Opportunities' && (
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-black w-full transform"></span>
              )}
            </button>
            <button
              className={`relative text-sm md:text-xl font-semibold px-4 py-2 transition-transform duration-300 ${
                activeTab === 'Department' ? 'text-black' : 'text-gray-500'
              }`}
              onClick={() => handleTabClick('Department')}
            >
              Department
              {activeTab === 'Department' && (
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-black w-full transform"></span>
              )}
            </button>
          </div>
        </div>

        {/* Options Menu */}
        <button className="text-3xl font-bold">: :</button>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-32 md:mt-0">
      {/* Left side - Top 3 */}
        <div className="flex justify-center w-full md:w-1/2 gap-1 relative pb-12">
          {/* Second Place */}
          <div className="bg-[#3B5987] text-white w-32 md:w-56 h-72 rounded-lg rounded-bl-3xl rounded-tl-3xl shadow-lg flex flex-col items-center p-4 relative">
            <img
              src={person}
              alt="Second Place"
              className="h-24 w-24 rounded-full mb-4 border-4 border-[#999999] relative -top-14"
            />
            <h1 className="text-lg md:text-2xl font-bold mb-2">Yogi Adithynath</h1>
            <h2 className='text-xl font-bold'>3312</h2>
            <span className="absolute bottom-4 text-xl font-bold bg-[#999999] text-black transform rotate-45 rounded-md w-8 h-8 flex justify-center items-center relative -top-48 md:-top-40 left-1/8">
              <span className="transform -rotate-45">#2</span>
            </span>
          </div>

          {/* First Place */}
          <div className="bg-[#3B5987] text-white w-36 md:w-64 h-80 rounded-t-3xl shadow-lg flex flex-col items-center p-4 relative -top-8">
            <div className="relative h-16 md:h-32">
              <img
                src={person}
                alt="First Place"
                className="h-24 md:h-32 w-32 rounded-full mb-4 border-4 border-yellow-500 relative -top-20"
              />
              <span className="absolute h-32 w-32 -top-40 left-2/3 transform -translate-x-1/2 text-6xl">👑</span> {/* Crown */}
              <span className="absolute bottom-4 text-xl font-bold bg-yellow-500 text-black transform rotate-45 rounded-md h-8 w-8 md:w-10 md:h-10 flex justify-center items-center relative -top-28 md:-top-32 left-1/3">
                <span className="transform -rotate-45">#1</span>
              </span>
            </div>
            <h1 className="text-lg md:text-3xl font-bold mb-2">Narendra Modi</h1>
            <h2 className='text-2xl font-bold'>5402</h2>
          </div>

          {/* Third Place */}
          <div className="bg-[#3B5987] text-white  w-32 md:w-56 h-72 rounded-lg rounded-br-3xl rounded-tr-3xl shadow-lg flex flex-col items-center p-4 relative">
            <img
              src={person}
              alt="Third Place"
              className="h-24 w-24 rounded-full mb-4 border-4 border-[#BA4615] relative -top-14"
            />
            <h1 className="text-2xl font-bold mb-2">M K Stalin</h1>
            <h2 className='text-xl font-bold'>1546</h2>
            <span className="absolute bottom-4 text-xl font-bold bg-[#BA4615] text-black transform rotate-45 rounded-md w-8 h-8 flex justify-center items-center relative -top-40 left-1/8">
              <span className="transform -rotate-45">#3</span>
            </span>
          </div>
        </div>

        {/* Right side - Rest of the players */}
        <div className="bg-[#3B5987] text-white w-full md:w-1/3 rounded-3xl p-6 mt-8 ml-24 md:mt-0 mr-20 mb-12">
          <ul className="flex flex-col gap-8">
            {['4th', '5th', '6th', '7th'].map((rank, index) => (
              <li key={index} className="flex items-center justify-between p-6 border-b border-white relative">
                <div className="flex items-center">
                  <span className="border-4 border-white text-white text-3xl font-bold p-3 rounded-full mr-6">{`# ${index + 4}`}</span>
                  <span className="text-white font-semibold text-lg pl-8 pr-8">{`Player Name ${index + 4}`}</span>
                </div>
                {/* Small Number in Right Corner with Triangle */}
                <div className="relative">
                  <span className="text-xs text-white absolute right-4 top-1/2 transform -translate-y-1/2">123</span>
                  <span className={`absolute right-1 top-full transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-4 ${index % 2 === 0 ? 'border-l-transparent border-r-transparent border-t-4 border-t-red-500' : 'border-l-transparent border-r-transparent border-b-4 border-b-green-500 '}`}></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
