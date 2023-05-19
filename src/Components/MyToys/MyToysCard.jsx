import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const MyToysCard = ({toy}) => {
    const {image,price,name,sellerName,Quantity, category,id} = toy
    return (
        <div>
             <div className="max-w-full">
                <Card imgSrc={image}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Toy Name:  {name}
                    </h5>
                    <p className='text-xl font-semibold tracking-wide'>
                        Category : {category}
                    </p>
                    <p className='text-xl font-semibold tracking-wide'>
                        Price : $ {price}
                    </p>
                    <p className='text-xl font-semibold tracking-wide'>
                        Quantity : {Quantity}
                    </p>


                    <Button gradientDuoTone="purpleToPink">
                        <Link to={`/products/${id}`}>
                            View Details
                        </Link>
                    </Button>
                </Card>
            </div>
        </div>
    );
};

export default MyToysCard;