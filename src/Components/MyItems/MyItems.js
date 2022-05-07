import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MySingleItem from '../MySingleItem/MySingleItem';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/items?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setMyItems(data)
      })
  }, [user.email])

  console.log(myItems);

  const handleItemDelete = id => {
    const agree = window.confirm('Are You sure to delete this item?');
    if (agree) {
      fetch(`http://localhost:5000/item/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          const remainingItems = myItems.filter(myItem => myItem._id !== id);
          setMyItems(remainingItems);
        })
    }
  }

  return (

    <div className="container my-5">
      <div className="row g-5">
        {
          myItems.map(myItem => <MySingleItem key={myItem._id} myItem={myItem} handleItemDelete={handleItemDelete} />)
        }
      </div>
    </div>

  );
};

export default MyItems;