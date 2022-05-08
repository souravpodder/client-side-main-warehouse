import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadinSpinner from '../LoadinSpinner/LoadinSpinner';
import SingleItem from '../SingleItem/SingleItem';
import './Home.css';
import employee from '../../images/People/employee.png';
import customer from '../../images/People/customer.jpg';
import benefit_1 from '../../images/benefits/benefit-1.jpg';
import benefit_2 from '../../images/benefits/benefit-2.jpg';
import { FaLevelUpAlt } from 'react-icons/fa';
import { GiReceiveMoney } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";




const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://morning-caverns-62673.herokuapp.com/items')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
  }, [])

  console.log(items);
  return (
    <div>
      {/* banner section  */}
      <section>
        <div className="container-fluid mx-0 top-banner">
          <div className="container">

            <div className="text-center text-white">
              <h2> Build and Manage supply chain operations </h2>
              <p>Open various decision making processes along the way by managing the inventories. It is like a daily routing and means of higher business profit. So, performing it effectively optimizes the works and brings great results. Lets make the best use of the process </p>

              <div className="mt-4">
                <button className="common-btn">Contact Us</button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* items section  */}

      <h3 className='text-center my-4' >Our items</h3>

      <div className="container">
        <div className="row g-5">
          {
            (!items.length) ? <LoadinSpinner /> : items.slice(0, 6).map(item => <SingleItem key={item._id} item={item} />)
          }
        </div>
      </div>

      {/* manage inventory link  */}
      <div className='text-center my-5'>
        <button type="button" className="manage-link-btn text-primary" onClick={() => navigate('/manage')}>Manage Inventories</button>
      </div>


      {/* employee customer section  */}

      <section className='py-5'>
        <div className="employee-customer">
          <div className="container">
            <div className="row">
              <div>
                <div className="text-center">
                  <h2>Our Employees and customers are the main pillars of our success</h2>
                  <p>Employees are a fundamental part for managing a warehouse. We train our employees on a daily basis. For the special training our employees has become so much skillful. We trust in their work. They are working for us effortlessly for a long time and marching use towards success. Our Customers are also a part of us. They Relied on us for their desired gadgets and always inspired us to improve our gadget build quality. </p>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-6 mb-lg-0 mb-5">
                <div className="">
                  <img src={employee} className="img-fluid people-image" alt='employee-img' />
                </div>
              </div>
              <div className="col-md-6 mb-lg-0 mb-5">
                <div className="">
                  <img src={customer} className="img-fluid people-image" alt='customer-img' />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='benefit-section'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 text-sec mb-lg-0 mb-5">
              <h2> optimise operations in various ways that can ultimately strengthen businesses</h2>
              <p className='justify-text'>Our Warehouse Management System often has real-time inventory tracking capabilities, which helps employees know in managing the stock. By knowing the stock in real-time, the employees know which item is needed and which item is not in demand. That helps us to order items efficiently.Improving stocking efficiency and inventory management can also lead to benefits like reducing waste. Reducing waste means less money spent on items that get sold less. Minimising errors can also save money. </p>
              <div>
                <p className='fw-bold'><span className='icons'><FaLevelUpAlt /></span><span className='benefits'>Improve order accuracy</span></p>
                <p className='fw-bold'><span className='icons'><GiReceiveMoney /></span><span className='benefits'>Save money</span></p>
                <p className='fw-bold'><span className='icons'><GrUserWorker /></span> <span className='benefits'>Improve staff efficiency</span></p>
              </div>

            </div>
            <div className="col-lg-6 col-md-12">
              <div className='d-flex flex-column'>
                <img src={benefit_1} className="img-fluid mb-2" alt="benefit-img-1" />
                <img src={benefit_2} className="img-fluid" alt="benefit-img-2" />
              </div>
            </div>
          </div>
        </div>
      </section>




    </div>
  );
};

export default Home;