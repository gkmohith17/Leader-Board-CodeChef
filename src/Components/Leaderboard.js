import React, { useState } from 'react';

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('Opportunities');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#E7F0FE] p-8 flex flex-col justify-between relative">
      {/* Back Button and Options Menu */}
      <div className="flex justify-between items-center mb-8">
        <button className="text-3xl font-bold">{'<'} Back</button> {/* Back button */}
        <button className="text-3xl font-bold">::</button> {/* Options button */}
      </div>

      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Leaderboard</h1>

        {/* Tab Container */}
        <div className="bg-white rounded-lg p-2 shadow-md inline-flex mt-4">
          <button
            className={`relative text-xl font-semibold px-4 py-2 transition-transform duration-300 ${
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
            className={`relative text-xl font-semibold px-4 py-2 transition-transform duration-300 ${
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

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Top 3 */}
        <div className="flex justify-center w-full md:w-1/2 gap-4 relative pb-12">
          {/* Second Place */}
          <div className="bg-[#3B5987] text-white w-56 h-72 rounded-lg rounded-bl-3xl rounded-tl-3xl shadow-lg flex flex-col items-center p-4">
            <img
              src="/path-to-image"
              alt="Second Place"
              className="h-24 w-24 rounded-full mb-4 border-4 border-yellow-500"
            />
            <h2 className="text-xl font-bold">Second Place</h2>
            <span className="absolute bottom-4 text-xl font-bold bg-white text-black rounded-full px-4 py-1">#2</span>
          </div>

          {/* First Place */}
          <div className="bg-[#3B5987] text-white w-64 h-80 rounded-t-3xl shadow-lg flex flex-col items-center p-4 relative -top-10">
            <div className="relative">
              <img
                src="/path-to-image"
                alt="First Place"
                className="h-32 w-32 rounded-full mb-4 border-4 border-yellow-500"
              />
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-3xl">👑</span> {/* Crown */}
            </div>
            <h2 className="text-2xl font-bold">First Place</h2>
            <span className="absolute bottom-4 text-xl font-bold bg-white text-black rounded-full px-4 py-1">#1</span>
          </div>

          {/* Third Place */}
          <div className="bg-[#3B5987] text-white w-56 h-72 rounded-lg rounded-br-3xl rounded-tr-3xl shadow-lg flex flex-col items-center p-4">
            <img
              src="/path-to-image"
              alt="Third Place"
              className="h-24 w-24 rounded-full mb-4 border-4 border-yellow-500"
            />
            <h2 className="text-xl font-bold">Third Place</h2>
            <span className="absolute bottom-4 text-xl font-bold bg-white text-black rounded-full px-4 py-1">#3</span>
          </div>
        </div>

        {/* Right side - Rest of the players */}
        <div className="bg-[#3B5987] text-white w-full md:w-1/3 rounded-3xl p-6 mt-8 md:mt-0">
          <ul className="flex flex-col gap-8">
            {['4th', '5th', '6th', '7th'].map((rank, index) => (
              <li key={index} className="flex items-center justify-between p-6 border-b border-white">
                <div className="flex items-center">
                  <span className="border-4 border-white text-white text-xl font-bold p-3 rounded-full mr-6">{`# ${index + 4}`}</span>
                  <span className="text-white font-semibold text-lg pl-8 pr-8">{`Player Name ${index + 4}`}</span>
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
