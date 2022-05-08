import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MySingleItem from '../MySingleItem/MySingleItem';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const MyItems = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {

    try {
      fetch(`http://localhost:5000/myitems?email=${user.email}`, {
        headers: {
          'authorization': `${user.email} ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'Unauthorized Access!') {
            toast.error(data.message);
          } else {
            setMyItems(data)
          }
        })
    }
    catch (error) {
      console.log(error.message);
      toast(error?.message);
      signOut(auth);
      navigate('/login');

    }

  }, [user.email])

  // console.log(myItems);

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

          myItems?.map(myItem => <MySingleItem key={myItem._id} myItem={myItem} handleItemDelete={handleItemDelete} />)

        }
      </div>
    </div>

  );
};

export default MyItems;

