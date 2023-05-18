import { Carousel } from 'flowbite-react';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="h-[600px]">
                <Carousel slideInterval={5000}>
                    <div className=' h-[100vh] bg-center banner1 relative'
                    >

                    </div>
                    
                    <div
                        className=' h-[100vh] bg-center banner2'
                         
                    />

                </Carousel>
            </div>

        </div>
    );
};

export default Banner;