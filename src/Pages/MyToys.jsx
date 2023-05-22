import React, { useContext, useEffect, useState } from 'react';
import MyToysCard from '../Components/MyToys/MyToysCard';
import { AuthContext } from '../Authntication/Authntication';

const MyToys = () => {
    const {users} = useContext(AuthContext)

    const [selectedToys, setSelectedToys] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/myProduct/${users?.email}`)
        .then(res => res.json())
        .then(data =>{
            setSelectedToys(data)
          
        })
        .catch(error => console.log(error))
    },[users])
        // console.log(selectedToys);
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