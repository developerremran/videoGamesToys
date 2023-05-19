import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from '../Components/ProductsCard/ProductsCard';
import SingleTopBox from '../Components/SingleTopBox';
 

const AllToys = () => {
  

    // console.log(productsInfo);
    const [productsInfo, setPrductsInfo] = useState([]) 

    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setPrductsInfo(data))
    .catch()

    return (
        <div className='container mx-auto'>
            <SingleTopBox></SingleTopBox>

           <div className='grid grid-cols-3 gap-5  '>
            {
              productsInfo.map(product=> <ProductsCard key={product.id} product={product} ></ProductsCard> )
            }
            </div>  
            
        </div>
    );
};

export default AllToys;