import React from 'react';
import Banner from '../Components/Banner';
import GellerySection from '../Components/GellerySection';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import TabsCompo from '../Components/TabsCompo';
import AboutSection from '../Components/AboutSection';


const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <GellerySection></GellerySection>

            <div className=' flex justify-center -mt-5 '>
                    <Button gradientDuoTone="purpleToPink">
                        <Link to='/all_toys'>More Gallery</Link>
                    </Button>
             </div>

                <TabsCompo></TabsCompo>
                <AboutSection></AboutSection>
                      <div className='text-center'>
                      <h2 className=' mt-28 font-semibold  text-4xl mb-4'>  All Toys In Hero </h2>
                      <p>There are many kind of product you can choice and order now. <br /> First delivery and first speed</p>
                      </div>
            
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
        </div>
    );
};

export default Home;