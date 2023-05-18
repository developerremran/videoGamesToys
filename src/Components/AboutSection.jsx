import { Button } from 'flowbite-react';
import React from 'react';

const AboutSection = () => {
    return (
        <div className='grid gap-20 grid-cols-2 items-center mt-36 mr-20 w-[90%] mx-auto'>
            <div className='bg-gray-300 rounded-full '>
                <figure>
                <img src={'/src/assets/About/creative-image-1-copyright.png'} alt="" />
                </figure>
            </div>
            <div className='  space-y-5'>
                <h2 className='text-xl font-semibold text-red-500'>What we do</h2>
                <p className='text-6xl font-bold  '>We help organize events for kids
                </p>
                <p>Fun, educational activities for every occasion with premium <br /> toys and snacks. Learn more about our services!

                </p>
                <Button>
                    Discover Now
                </Button>
            </div>
        </div>
    );
};

export default AboutSection;