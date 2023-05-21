import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const MyToysCard = ({toy}) => {
    const {image,Price,name,sellerName,Quantity, category,id,description} = toy
    return (
        <div>
             <div className="max-w-full">
                <Card>
                    <span>
                       <img className='h-[300px] w-full' src={image} alt="" />
                    </span>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Toy Name:  {name}
                    </h5>
                    <p>{description}</p>
                    <p className='text-xl font-semibold tracking-wide'>
                        Category : {category}
                    </p>
                    <p className='text-xl font-semibold tracking-wide'>
                        Price : $ {Price}
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