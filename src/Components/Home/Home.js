import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleItem from '../SingleItem/SingleItem';
import './Home.css';



const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
  }, [])

  console.log(items);
  return (
    <div>
      {/* banner  */}
      <section>
        <div className="container-fluid mx-0 top-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 text-white">
                <h1>Good food choices are good investments.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
                </p>
                <div className="mt-4">
                  <button className="common-btn">Order Now</button>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* items section  */}

      <h3 className='text-center'>items total: {items.length}</h3>

      <div className="container">
        <div className="row g-5">
          {
            items.map(item => <SingleItem key={item._id} item={item} />)
          }
        </div>
      </div>

      {/* manage inventory link  */}
      <div className='text-center my-5'>
        <button type="button" className="manage-link-btn text-primary" onClick={() => navigate('/manage')}>Manage Inventories</button>
      </div>




    </div>
  );
};

export default Home;