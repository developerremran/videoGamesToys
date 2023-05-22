import { Button, Card, Label, TextInput,  } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


const MyToysCard = ({ toy }) => {
    const { _id,image, Price, name, sellerName, Quantity, category, id, description } = toy;
  

    const [update, setUpdate] = useState([]);

    const updateData = event =>{
        event.preventDefault();
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
        
        const allInputData={
            name,id,sellerName,category,Quantity,Price,image,description,email
        }



        fetch(`http://localhost:5000/mytoys/${_id}`,{
            method:"PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(allInputData)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data)
        })
        .catch(error => console.log(error))

    }
   


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
        //   marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    
   

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
                    <hr />
                    <div className='flex gap-10 justify-between shadow-2xl p-5 border-2'>
                        <button onClick={openModal}>Open Modal</button>

                        <Button>
                            Delete
                        </Button>
                        <Button gradientDuoTone="purpleToPink">
                            <Link to={`/products/${id}`}>
                                View Details
                            </Link>
                        </Button>
                    </div>



                </Card>
                <Modal
                    isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">

<div className=' mx-auto'>
            <h2 className='text-center text-3xl font-semibold'>Add Your Own Products</h2>

            <div className=' mx-auto mt-10 shadow-2xl p-4 border rounded-md'>
                <form onSubmit={updateData} >
                  <div className="grid grid-cols-5   gap-4">
                  <div className='w-[150px]'><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="id"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='id'
                            placeholder="Toys Name"
                            // required={true}
                        />
                    </div>
                    <div className='w-[150px]'><div className="mb-2 block">
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
                            // defaultValue={users?.email}
                            // required={true}
                        />
                    </div>
                    <div className='w-[150px]'><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Toys Name"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='name'
                            placeholder="Toys Name"
                            // required={true}
                        />
                    </div>
                    <div className='w-[150px]'><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Seller Name"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='sellerName'
                            placeholder="Seller Name"
                            // required={true}
                        />
                    </div>
                    <div className='w-[150px]'><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Category"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='category'
                            placeholder="Category"
                            // required={true}
                        />
                    </div>
                    <div className='w-[150px]'><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Quantity"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='Quantity'
                            placeholder="Quantity"
                            // required={true}
                        />
                    </div>
                    <div className='w-[150px]'><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Price"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='Price'
                            placeholder="Price"
                            // required={true}
                        />
                    </div>
                    <div className='w-[150px]'><div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Photo URl"
                        />
                    </div><TextInput
                            id="text"
                            type="text"
                            name='image'
                            placeholder="Image URL"
                            // required={true}
                        />
                    </div>
                    <div className='w-[150px]'><div className="mb-2 block ">
                        <Label
                            htmlFor="text"
                            value="Toys Description"
                        />
                    </div><TextInput
                            id="text"
                            type="text-area"
                            name='description'
                            placeholder="Write a description"
                            // required={true}
                        />
                    </div>


                    
                  </div>
                  <div className='mt-5 flex justify-center'>
                  <Button type="submit">
                        Submit
                    </Button>
                  </div>
                </form>
            </div>

        </div>


                    <h2 className='mt-16' ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                   
                </Modal>
            </div>
        </div>
    );
};

export default MyToysCard;