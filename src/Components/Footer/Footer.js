import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer h-100'>
      <div>
        Copyright, &copy; {new Date().getFullYear()}, All Rights Reserved Super Sportswear
      </div>
      <div>
        <FaFacebook className='social-icons' />
        <BsTwitter className='social-icons' />
        <BsLinkedin className='social-icons' />
        <FaInstagramSquare className='social-icons' />
      </div>
    </div>
  );
};

export default Footer;