import React, { useState } from 'react';
import ProductsCard from '../Components/ProductsCard/ProductsCard';
import SingleTopBox from '../Components/SingleTopBox';
import MyToys from './MyToys';
 

const AllToys = () => {

    const [productsInfo, setPrductsInfo] = useState([]) 

    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setPrductsInfo(data))
    .catch(error => console.log(error))

    return (
        <div className='container mx-auto'>
            
            <SingleTopBox></SingleTopBox>
         
           <div className='grid grid-cols-3 gap-5  '>
            {
              productsInfo.map(product=> <ProductsCard key={product.id} product={product} ></ProductsCard> )
            }
            </div>
            <MyToys></MyToys>
            
        </div>
    );
};

export default AllToys;