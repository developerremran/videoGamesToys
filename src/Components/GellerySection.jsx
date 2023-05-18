import { Button } from 'flowbite-react';
import React from 'react';

const GellerySection = () => {
    return (
        <div className='h-[600px]'>
            <div className='w-11/12 mx-auto flex justify-between gap-5 h-[600px] p-5 shadow-2xl rounded-md border mt-24 mb-56'>

                <div className='w-auto h-[300px]'>
                    <img className='h-[500px] rounded-lg' src={'/src/assets/Gallery/g1.png'} alt="" />
                </div>

                <div className='grid grid-cols-2 gap-10'>
                    <div className=' w-[320px] card-zoom'>
                        <img className='rounded-lg card-zoom-image' src={'/src/assets/Gallery/g2.png'} alt="" />
                    </div>
                    <div className=' w-[320px] card-zoom'>
                        <img className='rounded-lg card-zoom-image' src={'/src/assets/Gallery/g3.png'} alt="" />
                    </div>
                    <div className=' w-[320px] card-zoom'>
                        <img className='rounded-lg card-zoom-image' src={'/src/assets/Gallery/g4.png'} alt="" />
                    </div>
                    <div className=' w-[320px] card-zoom'>
                        <img className='rounded-lg card-zoom-image' src={'/src/assets/Gallery/g5.png'} alt="" />
                    </div>

                </div>
                
            </div>
            
        </div>
    );
};

export default GellerySection;