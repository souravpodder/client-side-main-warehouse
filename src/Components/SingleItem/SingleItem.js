import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleItem.css';

const SingleItem = ({ item }) => {
  const { name, description, price, quantity, img, supplier, _id } = item;
  const navigate = useNavigate();
  const navigateToItemDetails = id => {
    navigate(`/inventory/${id}`);
  }
  return (
    <div className='col-lg-4 col-md-6'>
      <Card className='main-card'>
        <Card.Img variant="top" src={img} className="card-img" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p className='card-info justify-text'>{description}</p>
            <p className='card-info'>price: ${price}</p>
            <p className='card-info'>quantity: {quantity}</p>
            <p className='card-info'>supplier: {supplier}</p>
          </Card.Text>
          <button className='common-btn' onClick={() => navigateToItemDetails(_id)}>Update Stock</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleItem;