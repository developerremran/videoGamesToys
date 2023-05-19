import React, { useEffect, useState } from 'react';
import MyToysCard from '../Components/MyToys/MyToysCard';

const MyToys = () => {

    const [selectedToys, setSelectedToys] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/mytoys')
        .then(res => res.json())
        .then(data =>{
            setSelectedToys(data)
        })
        .catch(error => console.log(error))
    },[])

    return (
        <div className='container mx-auto'>
            <h2>my toys page</h2>

            <div className='grid grid-cols-3 gap-5'>
                {
                    selectedToys.map(toy => <MyToysCard key={toy.id} toy={toy}></MyToysCard>)
                }
            </div>
            
        </div>
    );
};

export default MyToys;