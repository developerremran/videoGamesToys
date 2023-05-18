import { Button, Tabs } from 'flowbite-react';
import React from 'react';
import GellerySection from './GellerySection';

const TabsCompo = () => {
    return (
        <div className=' flex items-center justify-center mt-36'>

            <Tabs.Group
                aria-label="Default tabs"
                style="underline"

            >
                <Tabs.Item
                    active={true}
                    title="Action games"

                >
                    <div className='flex justify-between gap-10'>
                       
                        <div>
                            <img className='' src={'/src/assets/Gallery/g3.png'} alt="" />
                            <p className='text-xl font-bold'>Price: $23</p>
                            <Button gradientMonochrome="purple">
                                View Details
                            </Button>
                        </div>

                        <div>
                        <img className='' src={'/src/assets/Gallery/g5.png'} alt="" />
                            <p className='text-xl font-bold'>Price: $23</p>
                            <Button gradientMonochrome="purple">
                                View Details
                            </Button>
                        </div>
                    </div>

                </Tabs.Item>
                <Tabs.Item title="Adventure games">
                    {/* strt  */}
                    <div className='flex justify-between gap-10'>
                       
                       <div>
                           <img className='' src={'/src/assets/Gallery/g1.png'} alt="" />
                           <p className='text-xl font-bold'>Price: $23</p>
                           <Button gradientMonochrome="purple">
                               View Details
                           </Button>
                       </div>
                       
                       <div>
                       <img className='' src={'/src/assets/Gallery/g4.png'} alt="" />
                           <p className='text-xl font-bold'>Price: $23</p>
                           <Button gradientMonochrome="purple">
                               View Details
                           </Button>
                       </div>
                   </div>

                    {/* end */}
                </Tabs.Item>
                <Tabs.Item title="Simulation games">
                    {/* strt  */}
                    <div className='flex justify-between gap-10'>
                       
                       <div>
                           <img className='' src={'/src/assets/Gallery/g3.png'} alt="" />
                           <p className='text-xl font-bold'>Price: $23</p>
                           <Button gradientMonochrome="purple">
                               View Details
                           </Button>
                       </div>
                       
                       <div>
                       <img className='' src={'/src/assets/Gallery/g5.png'} alt="" />
                           <p className='text-xl font-bold'>Price: $23</p>
                           <Button gradientMonochrome="purple">
                               View Details
                           </Button>
                       </div>
                   </div>

                    {/* end */}
                </Tabs.Item>
                <Tabs.Item title="Sports games">
                    {/* strt  */}
                    <div className='flex justify-between gap-10'>
                       
                       <div>
                           <img className='' src={'/src/assets/Gallery/g4.png'} alt="" />
                           <p className='text-xl font-bold'>Price: $23</p>
                           <Button gradientMonochrome="purple">
                               View Details
                           </Button>
                       </div>
                       
                       <div>
                       <img className='' src={'/src/assets/Gallery/g2.png'} alt="" />
                           <p className='text-xl font-bold'>Price: $23</p>
                           <Button gradientMonochrome="purple">
                               View Details
                           </Button>
                       </div>
                   </div>

                    {/* end */}
                </Tabs.Item>
                <Tabs.Item title="Idle games">
                    {/* strt  */}
                    <div className='flex justify-between gap-10'>
                       
                       <div>
                           <img className='' src={'/src/assets/Gallery/g3.png'} alt="" />
                           <p className='text-xl font-bold'>Price: $23</p>
                           <Button gradientMonochrome="purple">
                               View Details
                           </Button>
                       </div>
                       
                       <div>
                       <img className='' src={'/src/assets/Gallery/g5.png'} alt="" />
                           <p className='text-xl font-bold'>Price: $23</p>
                           <Button gradientMonochrome="purple">
                               View Details
                           </Button>
                       </div>
                   </div>

                    {/* end */}
                </Tabs.Item>

            </Tabs.Group>
        </div>
    );
};

export default TabsCompo;