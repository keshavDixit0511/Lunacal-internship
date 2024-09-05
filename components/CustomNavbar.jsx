import React, { useState } from 'react';

const CustomNavbar = () => {
  const [activeTab, setActiveTab] = useState('About Me');
  const tabs = ['About Me', 'Experiences', 'Recommended'];

  return (
    <nav className="bg-gray-900 px-2 py-2 rounded-xl lg:rounded-full flex flex-col lg:flex-row justify-normal lg:justify-between">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-[1.5rem] py-4 text-sm font-medium rounded-2xl lg:rounded-3xl transition-colors duration-200 ${
            activeTab === tab
              ? 'rounded-22px bg-custom-dark-gradient shadow-custom-dark'
              : 'text-gray-400 hover:text-gray-300'
          } md:mx-auto`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default CustomNavbar;