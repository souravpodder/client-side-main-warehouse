import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState('');

  // get the specific item details 
  useEffect(() => {
    fetch(`http://localhost:5000/item/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data)
      })
  }, [id]);

  console.log(item);

  const { _id, img, name, price, description, supplier, quantity } = item;

  return (
    <div className="container mt-5">
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
              <button className='common-btn'>Delivered</button>
            </Card.Body>
          </Card>

        </div>
        <div className="col-md-4"></div>
      </div>
    </div>

  );
};

export default ItemDetails;