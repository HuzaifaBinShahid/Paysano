'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import RoundedButton from "@/common_views/RoundedButton";

const HelloAndWelcome = () => {
  const [showComponent, setShowComponent] = useState(false);
  

  useEffect(() => {
    // Detect when the component comes into view
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY;
      const element = document.getElementById('helloAndWelcome');
      if (element && bottom >= element.offsetTop) {
        setShowComponent(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='helloAndWelcome' className={`mt-20 transition-all duration-1000 ease-in-out ${showComponent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className='container mx-auto grid grid-cols-1 gap-10'>

        <div className='text-center'>
          <h2 className= 'font-bold text-4xl'>HELLO & WELCOME</h2>
          <div className=' mx-auto w-3/6'>
            <p>Explore nearby restaurants and shops, discover enticing menus, read reviews, and effortlessly place orders.
              <span className='text-green'>Welcome to Paysano-</span> where convenience meets local delights.</p>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='bg-green h-[50px] w-[150px] rounded-full flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:-translate-x-2'>
            <RoundedButton type="button" title="Restaurants" variant="text-black font-bold"  full={true} />
          </div>
          <div className='bg-customGray text-textGray h-[50px] w-[175px] rounded-full flex text-center justify-center relative transform transition-transform duration-300 ease-in-out hover:translate-x-2' >
            <RoundedButton type='button' title="Stores" variant='text-black font-bold' full={true} />
          </div>
        </div>

        <div className=' flex items-center justify-center'>

          <div className='flex flex-row gap-5'>
       
            <div className=' flex items-center justify-center'>


              <div className='flex flex-row gap-5'>

                <div className='relative flex flex-col items-center  transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>
                  <div className='relative'>
                    <Image
                      src="./welcomeSection/Vegetables.svg"
                      alt="vegetables"
                      height={450}
                      width={100}
                    />
                    <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold text-white'>
                      Vegetables
                    </div>
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/healthyfood.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>

                </div>


                <div className='relative flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>
                  <div className='relative '>
                    <Image
                      src="./welcomeSection/Fruits.svg"
                      alt="fruits"
                      height={450}
                      width={100}
                    />
                    <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold  text-white rotate-90 '>
                      Fruits
                    </div>
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/healthyfruits.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>

                </div>

                <div className='relative flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>
                  <div className='relative '>
                    <Image
                      src="./welcomeSection/Chinese.svg"
                      alt="chinese"
                      height={450}
                      width={100}
                    />
                    <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2   xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold  text-white rotate-90 '>
                      Chinese
                    </div>
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/spaguetti.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>

                </div>

                <div className='relative flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>
                  <div className='relative '>
                    <Image
                      src="./welcomeSection/Italian.svg"
                      alt="italian"
                      height={450}
                      width={100}
                    />
                    <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold  text-white  rotate-90 '>
                      Italian
                    </div>
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/pizza.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>
                </div>


                <div className='relative flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>

                  <div className='relative '>
                    <Image
                      src="./welcomeSection/FastFood.svg"
                      alt="fastfood"
                      height={450}
                      width={100}
                    />
                  </div>
                  <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold text-white rotate-90'>
                    FastFood
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/healthyfast.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>



                </div>

                <div className='relative hidden md:flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2'>

                  <div className='relative '>
                    <Image
                      src="./welcomeSection/Beans.svg"
                      alt="beans"
                      height={450}
                      width={100}
                    />
                  </div>
                  <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2   xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold  text-white rotate-90  '>
                    Beans
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/coffeebeans.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>

                </div>


                <div className='relative hidden md:flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2 ' >

                  <div className='relative '>
                    <Image
                      src="./welcomeSection/Drinks.svg"
                      alt="drinks"
                      height={450}
                      width={100}
                    />
                  </div>
                  <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold  text-white  rotate-90 '>
                    Drinks
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/poinseitta.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>


                </div>

                <div className='relative hidden md:flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2 '>

                  <div className='relative '>
                    <Image
                      src="./welcomeSection/Groceries.svg"
                      alt="groceries"
                      height={450}
                      width={100}
                    />
                  </div>
                  <div className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2   xl:text-5xl lg:text-lg sm:text-3xl text-2xl font-semibold  text-white rotate-90  '>
                    Groceries
                  </div>
                  <div className='absolute bottom-3 flex items-center justify-center' style={{ backgroundImage: 'url(./welcomeSection/eclipse.svg)', backgroundSize: 'cover', width: '70%', height: '15%' }}>
                    <Image
                      src="./welcomeSection/healthygrocery.svg"
                      alt='healthyfood'
                      width={20}
                      height={32}
                    />
                  </div>


                </div>

              </div>



            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default HelloAndWelcome;




