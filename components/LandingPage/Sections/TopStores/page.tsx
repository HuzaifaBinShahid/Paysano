import React from 'react';
import StoreCard from '@/common_views/StoreCard';
import { Stores } from '@/constants';

const TopStores = () => {
    return (
        <section id="topStores" className="mt-20 pb-20 bg-lightGray">
            <div className="flex flex-col items-center ">
                <h2 className="text-4xl lg:text-4xl font-semibold m-10">Our Top <span className='text-green'>Stores</span></h2>
                <p className='text-textGray max-w-lg mx-auto text-center mb-5'>Discover an enhanced search experience, personalized recommendation, streamlined ordering, and faster checkout in our latest update. Elevate your app usage with these improvements.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {Stores.stores.map((store, index) => (
                        <StoreCard
                            key={index}
                            storeName={store.desc}
                            openingHours={store.time}
                            rating={store.rating}
                            numberOfReviews={store.reviews} 
                            imageSrc={store.iconSrc} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopStores;
