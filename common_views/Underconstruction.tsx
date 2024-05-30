import React from 'react'
import Image from 'next/image'

// Importing Components
import Navbar from '@/components/LandingPage/Sections/HomeTop/Navbar'

// Importing Assets
import image from '@/public/underconstruction/image.png'

const Underconstruction = () => {
    return (
        <>
            <section id="underconstruction">
                <div className="content my-20">
                    <Navbar />
                    <div className="container mx-auto flex justify-center items-center">
                            <Image src={image} alt='image' className='w-3/6 animate-zoom' />
                  
                    </div>
                </div>
            </section>
        </>
    )
}

export default Underconstruction