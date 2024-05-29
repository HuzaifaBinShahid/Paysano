'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import VegetableCard from '@/common_views/VegetableCard';
import { VEGETABLES } from '@/constants';
import RoundedButton from '@/common_views/RoundedButton';

interface Vegetable {
  iconSrc: string;
  iconAlt: string;
  date: string;
  price: string;
  productName: string;
  percentage: string;
  description: string;
}

const AllVEGETABLES: React.FC = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY;
      const element = document.getElementById('allVEGETABLES');
      if (element && bottom >= element.offsetTop) {
        setShowComponent(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="allVEGETABLES"
      className={`allVEGETABLES mt-20 transition-all duration-1000 ease-in-out ${showComponent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <div className="flex flex-col lg:flex-row w-full justify-center ">
        <div className="relative w-[110%] lg:w-[400px] h-[500px] lg:h-[932px] overflow-hidden">
          <Image
            src="./allvegetablesSection/all.png"
            alt="Vegetables"
            layout="fill"
            objectFit="cover"
            className="rotate-90 lg:rotate-0"
          />
          <div className="absolute inset-0 bg-[#0000004D] bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-4 opacity-100">Vegetables</h2>
            <div className='bg-green h-[50px] w-[150px] rounded-full flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-110'>
              <RoundedButton type="button" title="Restaurants" variant="text-black font-bold" full={true} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:ml-0 lg:gap-0">
          {VEGETABLES.vegetables.map((vegetable: Vegetable, index: number) => (
            <VegetableCard
              key={index}
              iconSrc={vegetable.iconSrc}
              iconAlt={vegetable.iconAlt}
              date={vegetable.date}
              price={vegetable.price}
              productName={vegetable.productName}
              percentage={vegetable.percentage}
              description={vegetable.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllVEGETABLES;
