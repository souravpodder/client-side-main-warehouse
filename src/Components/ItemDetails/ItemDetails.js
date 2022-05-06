import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState('');
  let { _id, img, name, price, description, supplier, quantity } = item;
  // let [quantity, setQuantity] = useState(quantity);

  // get the specific item details 
  useEffect(() => {
    fetch(`http://localhost:5000/item/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data)
      })
  }, [id]);

  console.log(item);



  const handleQuantity = id => {
    quantity = quantity - 1;
    fetch(`http://localhost:5000/updatequantity/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ quantity })
    })
      .then(res => res.json())
      .then(data => {
        setItem({ ...item, quantity })
      })

  }

  // restock the item 
  const handleIncreaseQuantity = (id, event) => {
    event.preventDefault();
    const increaseQuantity = event.target.increaseStock.value;

    if (increaseQuantity) {
      quantity = quantity + parseInt(increaseQuantity);
      console.log(quantity);
      fetch(`http://localhost:5000/updatequantity/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ quantity })
      })
        .then(res => res.json())
        .then(data => {
          setItem({ ...item, quantity })
        })
    }
  }

  return (
    <>
      <div className="container my-5">
        <div className='row'>
          <div className="col-md-4"></div>
          <div className="col-md-4">

            <Card className='main-card'>
              <Card.Img variant="top" src={img} className="card-img" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  <p className='card-info'>item id: {_id}</p>
                  <p className='card-info'>{description}</p>
                  <p className='card-info'>price: ${price}</p>
                  <p className='card-info'>quantity: {quantity}</p>
                  <p className='card-info'>supplier: {supplier}</p>
                </Card.Text>
                <button className='common-btn' onClick={() => handleQuantity(_id)}>Delivered</button>
              </Card.Body>
            </Card>

          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

      <div className='py-5 w-50 mx-auto'>
        <h3 className='text-center'>Restock the Items</h3>
        <Form onSubmit={(event) => handleIncreaseQuantity(_id, event)}>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Control type="number" placeholder="quantity to Restock" name="increaseStock" />
            <div className='w-25 mx-auto'>
              <button className='common-btn mt-3'>Restock</button>
            </div>
          </Form.Group>
        </Form>
      </div>

      <div className='text-center my-5'>
        <button type="button" class="btn btn-link" onClick={() => navigate('/manage')}>Manage Inventories</button>
      </div>
    </>


  );
};

export default ItemDetails;