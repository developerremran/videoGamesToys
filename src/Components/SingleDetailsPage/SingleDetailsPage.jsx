import { Button, Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleDetailsPage = () => {
    const productsInfo = useLoaderData()
    // console.log(productsInfo);
    const { id, seller_name, toy_name, sub_category, price, quantity, image_url } = productsInfo;
    return (
        <div className='container mx-auto flex justify-center'>
            <div className="mt-20">
                <Card
                    horizontal={true}
                    imgSrc={image_url}
                >
                    <h2 className='text-2xl font-semibold'>seller_name: <span className='italic text-orange-400'>{seller_name}</span></h2>
                    <h2 className='text-2xl font-semibold mt-5 mb-5'>toy_name: {toy_name}</h2>
                    <h2 className='text-2xl font-semibold'>sub_category: {sub_category}</h2>
                    <h2 className='text-2xl font-semibold mt-5 mb-5'>quantity: {quantity}</h2>
                    <h2 className='text-2xl font-semibold'>price: {price}</h2>

                    <Button gradientMonochrome="lime">
                       Buy Now
                    </Button>
                </Card>
            </div>
        </div>
    );
};

export default SingleDetailsPage;