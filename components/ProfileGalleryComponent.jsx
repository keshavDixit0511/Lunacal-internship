"use client";
import React from "react";
import CustomNavbar from "./CustomNavbar.jsx";


const ProfileGalleryComponent = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-lg bg-gray-900 text-white">
      {/* Left half - kept empty as per instructions */}
      <div className="w-full lg:w-auto bg-[#363C43] rounded-lg h-64 lg:h-auto"></div>

      {/* Right half - widgets */}
      <div className="space-y-4">
        {/* About Me widget */}
        <div className="bg-[#363C43] rounded-lg p-4 relative">
          <div className="flex flex-col gap-[6rem] absolute left-3 top-4">
            <img className="h-6 w-6" src="/question-mark.png" alt="Help Icon" />
            <img className="h-7 w-6" src="/dabbe.png" alt="Decorative Icon" />
          </div>
          <div className="bg-gradient-to-b from-black to-gray-600 shadow-custom-dark rounded-lg p-[2px] h-14 w-1 right-3 top-1/2 absolute"></div>
          <div className="mx-5">
            <div className="mx-5 mt-2 mb-3">
              <CustomNavbar />
            </div>
            <div className="px-7">
              <p className="text-sm text-gray-300">
                Hello! I&apos;m Dave, your sales rep here from Salesforce. I&apos;ve been
                working at this awesome company for 3 years now.
              </p>
              <p className="text-sm text-gray-300 mt-2">
                I was born and raised in Albany, NY & have been living in Santa
                Carla for the past 10 years with my wife Tiffany and my
                4-year-old twin daughters - Emma and Ella. Both of them are just
                starting school so my calendar is usually blocked between 9-10
                AM...
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#363C43] rounded-lg p-[2px] h-1 w-3/4 mx-auto"></div>

        {/* Gallery widget */}
        <div className="bg-[#363C43] rounded-lg p-4 relative">
          <div className="flex flex-col gap-[6rem] absolute left-3 top-4">
            <img className="h-6 w-6" src="/question-mark.png" alt="Help Icon" />
            <img className="h-7 w-6" src="/dabbe.png" alt="Decorative Icon" />
          </div>
          {/* Header Section */}
          <div className="mx-5">
            <div className="flex flex-col lg:flex-row md:justify-evenly lg:justify-between items-center mb-10 mx-7">
              <div className="bg-black rounded-3xl px-6 py-2 sm:px-8 sm:py-3 mb-4 sm:mb-0">
                <h2 className="text-lg font-semibold">Gallery</h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-7 lg:gap-x-8 items-center">
                <button className="rounded-[22px] bg-custom-dark-gradient shadow-custom-dark p-1 h-[3rem] w-[8rem] lg:p-3">
                  + Add Image
                </button>
                <div className="flex gap-x-3">
                  <button className="text-gray-400 rounded-full bg-[#212325] shadow-custom-dark px-3 sm:px-4 sm:py-3">
                    &larr;
                  </button>
                  <button className="text-gray-400 rounded-full bg-[#212325] shadow-custom-dark px-3 sm:px-4 sm:py-3">
                    &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Gallery Grid Section */}
            <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 pl-4 sm:pl-8">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="aspect-square h-[10rem] lg:gap-x-5 bg-gray-700 rounded-2xl overflow-hidden"
                >
                  <img
                    src="/Rectangle.png"
                    alt={`Gallery image ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#363C43] rounded-lg p-[2px] h-1 w-3/4 mx-auto"></div>
      </div>
    </div>
  );
};

export default ProfileGalleryComponent;
