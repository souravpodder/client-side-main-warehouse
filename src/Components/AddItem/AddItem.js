import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const { register, handleSubmit } = useForm();
  // post the data on form submit 
  const onSubmit = data => {
    // console.log(data);
    fetch('http://localhost:5000/item', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...data, email: user.email })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast('Item Added Successfully!');
      })
  };

  return (
    <div className='w-50 mx-auto mt-5'>
      <h4 className='text-center mb-3'>Add item</h4>
      <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-3 input_field' type="text" placeholder='Item Name' {...register("name", { required: true })} />
        <input className='mb-3 input_field' type="number" placeholder='Quantity' {...register("quantity", { required: true })} />
        <textarea className='mb-3 ps-3' placeholder='Description' {...register("description")} />
        <input className='mb-3 input_field' placeholder='Price' type="number" {...register("price", { required: true })} />
        <input className='mb-3 input_field' placeholder='Image URL' type="text" {...register("img", { required: true })} />
        <input className='mb-3 input_field' placeholder='Supplier Name' type="text" {...register("supplier")} />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem; 