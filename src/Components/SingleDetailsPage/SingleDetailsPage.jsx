import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleDetailsPage = () => {
    const productsInfo = useLoaderData()
    console.log(productsInfo);
    return (
        <div>
            <h2>Single Data Loader</h2>
            <h2>{productsInfo.price}</h2>
        </div>
    );
};

export default SingleDetailsPage;