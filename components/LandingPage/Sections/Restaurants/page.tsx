'use client'
import React, { useState, useEffect } from 'react';
import StoreCard from '@/common_views/StoreCard';
import axios from 'axios';

interface Restaurants {
    id: string;
    name: string;
    profile_pic: string;
    open_time: string;
    close_time: string;
    reviews: number;
    average_rating: number;
}

const Restaurants: React.FC = () => {
    const [restaurants, setRestaurants] = useState<Restaurants[]>([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get('https://dashboard.paysano.it/public/api/landingPage/topRestaurants');
                if (response.data.status) {
                    // Extracting required data from the API response
                    const restaurantsData: Restaurants[] = response.data.data.map((restaurants: any) => ({
                        id: restaurants.id,
                        name: restaurants.name,
                        profile_pic: `https://dashboard.paysano.it/public/storage/${restaurants.profile_pic}`,
                        open_time: restaurants.open_time,
                        close_time: restaurants.close_time,
                        reviews: restaurants.reviews,
                        average_rating: restaurants.average_rating,
                    }));
                    setRestaurants(restaurantsData);
                }
            }
            catch (error) {
                console.error('Error fetching top stores:', error);
            }
        };
        fetchRestaurants();
    }, []);
    return (
        <section id="topStores" className=" pb-20 bg-lightGray p-5">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl lg:text-4xl font-semibold m-10 text-center">Our Top <span className='text-green'>Restaurants</span></h2>
                <p className='text-textGray max-w-lg  mx-auto text-center mb-5 leading-30'>Discover an enhanced search experience, personalized recommendation, streamlined ordering, and faster checkout in our latest update. Elevate your app usage with these improvements.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {restaurants.map((restaurants, index) => (
                        <StoreCard
                            key={index}
                            storeName={restaurants.name}
                            openingHours={`${restaurants.open_time} - ${restaurants.close_time}`}
                            rating={restaurants.average_rating.toString()}
                            numberOfReviews={restaurants.reviews.toString()}
                            imageSrc={restaurants.profile_pic}
                            emptyStarSrc='/storesSection/emptyStar.svg'
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Restaurants;
