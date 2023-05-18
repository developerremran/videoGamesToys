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