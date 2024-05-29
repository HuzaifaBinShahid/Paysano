'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

type StoreCardProps = {
    storeName: string;
    openingHours: string;
    rating: string;
    numberOfReviews: string;
    imageSrc: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ storeName, openingHours, rating, numberOfReviews, imageSrc }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;

        if (card) {
            const handleMouseEnter = () => {
                gsap.to(card, { scale: 0.9, duration: 0.3, ease: 'power1.out' });
            };

            const handleMouseLeave = () => {
                gsap.to(card, { scale: 1, duration: 0.3, ease: 'power1.out' });
            };

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <div ref={cardRef} className="card rounded-lg border-white bg-cardbg shadow-lg">
            <Image
                src={imageSrc}
                alt={storeName}
                width={342}
                height={300}
            />
            <div className="details flex flex-col items-start p-8">
                <div className='bg-green h-[40px] w-[200px] rounded-full flex items-center justify-center mb-3 px-5'>
                   
                        <Image
                            src='./storesSection/clock.svg'
                            alt='clock'
                            width={20}
                            height={20}
                            className='px-3 m-3'
                        />
                   
                    <p className='py-3 my-2'>{openingHours}</p>
                </div>
                <span className='text-xl font-semibold mb-3 hover:text-green'>{storeName}</span>
                <div className="flex justify-start">
                    {[...Array(5)].map((_, index) => (
                        <Image
                            key={index}
                            src='./storesSection/star.svg'
                            alt={`star-${index}`}
                            width={20}
                            height={20}
                            className='mr-2'
                        />
                    ))}
                    <span className='text-lg font-semibold ml-3 mr-8'>{rating}</span>
                    <span className='text-textGray'>{numberOfReviews}</span>
                </div>
            </div>
        </div>
    );
}

export default StoreCard;
