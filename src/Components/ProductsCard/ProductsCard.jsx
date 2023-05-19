import { Button, Card } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Authntication/Authntication';
import { Link, useLoaderData } from 'react-router-dom';

const ProductsCard = ({ product }) => {

 const {users} = useContext(AuthContext)



 
//  console.log(users);
  

    const { id, seller_name, toy_name, sub_category, price, quantity, image_url } = product;
    // console.log(id);
    return (
        <div>
            <div className="max-w-full">
                <Card imgSrc={image_url}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Toy Name:  {toy_name}
                    </h5>
                    <p className='text-xl font-semibold tracking-wide'>
                        Category : {sub_category}
                    </p>
                    <p className='text-xl font-semibold tracking-wide'>
                        Price : $ {price}
                    </p>
                    <p className='text-xl font-semibold tracking-wide'>
                        Quantity : {quantity}
                    </p>


                    <Button gradientDuoTone="purpleToPink">
                         <Link to={`/all_toys/${id}`}>
                         View Details
                     </Link>  
                     
                    </Button>
                </Card>
            </div>

        </div>
    );
};

export default ProductsCard;