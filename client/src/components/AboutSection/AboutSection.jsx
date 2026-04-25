import React from 'react';
import about1 from '../../assets/images/about1.jpg';
import about2 from '../../assets/images/about2.jpg';

const AboutSection = () => {
  return (
    <section className="w-full bg-[#121E1F] py-[100px] lg:py-[140px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT CONTENT AREA */}
          <div className="flex flex-col items-start max-w-[500px] mx-auto lg:ml-auto lg:mr-8 xl:mr-16">
            <span className="text-gray-100 text-lg md:text-xl font-medium mb-2">
              More Information
            </span>
            
            <h2 className="text-[30px] md:text-[36px] lg:text-[40px] leading-tight font-medium text-white mb-6">
              About The Best Beaches
            </h2>
            
            <p className="text-[#a0b5b9] text-[14px] md:text-[15px] leading-[1.6] mb-10">
              You can find the most beautiful and pleasant places at the best prices with special discounts, you choose the place we will guide you all the way to wait, get your place now.
            </p>
            
            <button className="px-7 py-3 bg-[#133e48] hover:bg-[#1a5563] text-white text-sm font-medium rounded-[2px] transition-colors duration-300">
              Reserve a place
            </button>
          </div>

          {/* RIGHT IMAGE LAYOUT */}
          <div className="w-full h-full flex justify-center lg:justify-end items-center gap-4 lg:gap-8 mt-12 lg:mt-0 py-10">
            {/* First Image (Smaller, Left, Lower) */}
            <img 
              src={about1}
              alt="Beautiful beach scenery"
              className="w-[200px] h-[280px] lg:w-[260px] lg:h-[380px] object-cover shadow-[0_20px_40px_rgba(0,0,0,0.4)] translate-y-6 lg:translate-y-12"
            />
            {/* Second Image (Larger, Right, Higher) */}
            <img 
              src={about2}
              alt="Relaxing beach resort"
              className="w-[240px] h-[340px] lg:w-[320px] lg:h-[460px] object-cover shadow-[0_20px_40px_rgba(0,0,0,0.4)] -translate-y-6 lg:-translate-y-12 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
