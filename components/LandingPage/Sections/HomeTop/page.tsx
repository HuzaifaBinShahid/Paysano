'use client';
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/LandingPage/Sections/HomeTop/Navbar";
import Image from "next/image";
import RoundedButton from "@/common_views/RoundedButton";

const HomeTop = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 500); 

    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className='bg-home-bg bg-cover bg-center bg-no-repeat'>

      <div className='px-10 lg:px-0 mx-auto w-full'>

        {/* Nav Bar */}
        <div className='pt-10'>
          <Navbar />
        </div>

        {/* Main div */}
        <div className={`flex flex-col lg:flex-row lg:justify-between justify-center items-center transition-opacity duration-500 ease-in-out ${showComponent ? 'opacity-100' : 'opacity-0'}`}>

          {/* Text side */}
          <div className='max-w-[700px] flex flex-col gap-5 my-20 lg:my-10 lg:p-10 text-center lg:text-left gpa- '>
            {/* text div */}
            <div>
              <h2 className="font-bold text-[30px] lg:text-[50px] mb-3">
                Unveiling the Finest <span className='text-green'>Restaurants</span> and <span className='text-green'>Stores</span>
              </h2>

              <p className="text-[15px] lg:text-[20px] font-semibold text-black-50"> Savor culinary wonders and explore curated retail gems on our platform.
                Indulge in diverse restaurant menus and discover unique store products, all in one place.</p>
            </div>
            
            {/* button div */}
            <div>
              <RoundedButton
                type="button"
                title="Start Your Exploration"
                variant="btn_dark_green"
                className="transform transition-transform duration-300 ease-in-out hover:translate-x-2"
              />
            </div>
          </div>

          {/* div image */}
          <div className="p-10 hidden lg:block pt-10">
            <Image src="/home/home-left.png" alt="homeleft" width={800} height={800} />
          </div>

        </div>

      </div>

    </section>
  )
}

export default HomeTop;
