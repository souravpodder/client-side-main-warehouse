import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
  const navigate = useNavigate('');

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
  }, [])

  // delete the selected item 
  const handleDeleteItem = id => {
    const agree = window.confirm('Are You sure to delete this item?');
    if (agree) {
      fetch(`http://localhost:5000/item/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          const remainingItems = items.filter(item => item._id !== id);
          setItems(remainingItems);
        })
    }

  }

  return (
    <div className='container'>
      <h4 className='text-center mt-5 mb-3'>Manage the inventory </h4>
      <Table striped bordered hover>
        <thead>
          <tr>

            <th>Item Name</th>
            <th>Id</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>

          {
            items.map(item => {
              return <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item._id}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.supplier}</td>
                <td><button className='btn btn-danger' onClick={() => handleDeleteItem(item._id)}>Delete</button></td>
              </tr>
            })
          }

        </tbody>
      </Table>

      <div className='w-25 mx-auto my-5'>
        <button className='common-btn' onClick={() => navigate('/add')}>Add New Item</button>
      </div>
    </div>
  );
};

export default ManageInventory; 