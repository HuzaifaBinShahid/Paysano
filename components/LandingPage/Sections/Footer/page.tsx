import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <section className='footer mt-12 md:ml-3'>

            <div className='flex flex-col lg:flex-row'> {/* Use flexbox for larger screens */}
                <div className='first-half lg:w-1/2 lg:pr-10 flex flex-col items-center justify-center'> {/* For larger screens, set width to 50% and add right padding */}
                    <div className="logo mb-6 ">
                        <Image src="./logo-main.svg" alt='' width={64} height={53} />
                    </div>

                    <div className='text text-textGray text-center sm:text-start max-w-sm lg:max-w-md '>
                        <p className="mx-auto lg:mx-0">This app seamlessly integrates local restaurants and stores, allowing users to explore nearby restaurants for online food orders with detailed menu information.</p>
                    </div>
                </div>


                <div className="sections mt-12 lg:w-1/2 lg:pl-10 flex flex-col lg:flex-row items-center text-center lg:items-start lg:text-start "> {/* For larger screens, set width to 50% and add left padding */}
                    <div className="support flex-1 m-6">
                        <h1 className="text-2xl font-semibold mb-6">Support</h1>
                        <ul className="space-y-3 text-textGray ">
                            <li className='hover:text-green'>Home</li>
                            <li className='hover:text-green'>About</li>
                            <li className='hover:text-green'>FAQs</li>
                            <li className='hover:text-green'>Support</li>
                        </ul>
                    </div>

                    <div className="trending flex-1 m-6">
                        <h1 className="text-2xl font-semibold mb-6">Trending</h1>
                        <ul className="space-y-3 text-textGray">
                            <li className='hover:text-green'>Shop</li>
                            <li className='hover:text-green'>Portfolio</li>
                            <li className='hover:text-green'>Blog</li>
                        </ul>
                    </div>

                    <div className="features w-full md:flex-none  m-6">
                        <h1 className="text-2xl font-semibold mb-6">Features</h1>
                        <ul className="space-y-3 text-textGray">
                            <li className='hover:text-green'>Help Center</li>
                            <li className='hover:text-green'>Paid with Mobile</li>
                            <li className='hover:text-green'>Status</li>
                            <li className='hover:text-green'>Contact Support</li>
                        </ul>
                    </div>
                </div>



            </div>
            <div className="copyright text-center border-t-2 p-5">
                <p className='text-[15] leading-[26.3px] text-textGray'>Copyrights © 2023 All Rights Reserved by Paysano </p>
            </div>
        </section>
    )
}

export default Footer;
