import React from 'react';
import StoreCard from '@/common_views/StoreCard';
import { Restaurants } from '@/constants';

const Restuarants = () => {
    return (
        <section id="topStores" className=" pb-20 bg-lightGray">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl lg:text-4xl font-semibold m-10 text-center">Our Top <span className='text-green'>Restaurants</span></h2>
                <p className='text-textGray max-w-lg  mx-auto text-center mb-5 leading-30'>Discover an enhanced search experience, personalized recommendation, streamlined ordering, and faster checkout in our latest update. Elevate your app usage with these improvements.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Restaurants.restaurants.map((restaurants, index) => (
                        <StoreCard
                            key={index}
                            storeName={restaurants.desc}
                            openingHours={restaurants.time}
                            rating={restaurants.rating}
                            numberOfReviews={restaurants.reviews} 
                            imageSrc={restaurants.iconSrc} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Restuarants;
