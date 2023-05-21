import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../Authntication/Authntication';

const AddToys = () => {
const {users} = useContext(AuthContext)

    const addedHandler = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const id = form.id.value;
        const sellerName = form.sellerName.value;
        const category   = form.category.value;
        const Quantity  = form.Quantity.value;
        const Price   = form.Price.value;
        const image   = form.image.value;
        const description  = form.description.value;
        const email = form.email.value;
        
        const allInfo={
            name,id,sellerName,category,Quantity,Price,image,description,email
        }
        // console.log(allInfo)
        fetch('http://localhost:5000/mytoys',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(allInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // if(insertedId){
            //     alert('successes added')
            //     form.reset()
            // }
        })
        .catch(error => console.log(error))
        form.reset()
    
    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-3xl font-semibold'>Add Your Own Products</h2>

            <div className='w-1/4 mx-auto mt-10 shadow-2xl p-4 border rounded-md'>
                <form onSubmit={addedHandler} className="flex flex-col gap-4">
                    <div><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="id"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='id'
                            placeholder="Toys Name"
                            required={true}
                        />
                    </div>
                    <div><div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your Email"
                        />
                         
                    </div>
                    <TextInput
                            id="email"
                            type="email"
                            name='email'
                            
                            placeholder="email"
                            defaultValue={users?.email}
                            required={true}
                        />
                    </div>
                    <div><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Toys Name"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='name'
                            placeholder="Toys Name"
                            required={true}
                        />
                    </div>
                    <div><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Seller Name"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='sellerName'
                            placeholder="Seller Name"
                            required={true}
                        />
                    </div>
                    <div><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Category"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='category'
                            placeholder="Category"
                            required={true}
                        />
                    </div>
                    <div><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Quantity"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='Quantity'
                            placeholder="Quantity"
                            required={true}
                        />
                    </div>
                    <div><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Price"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='Price'
                            placeholder="Price"
                            required={true}
                        />
                    </div>
                    <div><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Photo URl"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='image'
                            placeholder="Image URL"
                            required={true}
                        />
                    </div>
                    <div><div className="mb-2 block ">
                        <Label
                            htmlFor="text"
                            value="Toys Description"
                        />
                    </div><TextInput
                            id="text"
                            type="text-area"
                            name='description'
                            placeholder="Write a description"
                            required={true}
                        />
                    </div>


                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>

        </div>
    );
};

export default AddToys;