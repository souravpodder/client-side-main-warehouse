import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import LoadinSpinner from '../LoadinSpinner/LoadinSpinner';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  // handle error 
  let errorElement;
  if (error) {
    errorElement = <p className='text-center text-danger fw-bold'>Error: {error && error.message}</p>
  }

  // console.log(user);

  if (loading) {
    return <LoadinSpinner />;
  }

  if (user) {
    const url = 'http://localhost:5000/getToken';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: user?.user?.email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('accessToken', data.token);
        navigate(from, { replace: true });
      });
  }


  // get the email and passewor 
  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleLogin = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  const handleResetPassword = async () => {

    if (email) {
      await sendPasswordResetEmail(email);
      toast('Password Reset Email sent Successfully!');
    }
    else {
      toast('Please enter your email address.');
    }

  }


  return (
    <div className='form-container'>
      <Form onSubmit={handleLogin} className='my-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" className='input-field' onBlur={handleEmailBlur} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" className='input-field' onBlur={handlePasswordBlur} required />
        </Form.Group>
        <div className='w-50 mx-auto' >
          <Button className='w-100' variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
      {errorElement}

      <p className='text-center'>Not Registered Yet? <Link to="/register">Register Now!</Link></p>
      <p className='text-center'>Forgot Password? <button onClick={handleResetPassword} className='btn btn-link text-warning fw-bold text-decoration-none'>Reset Password</button></p>
      <SocialLogin />
    </div>
  );
};

export default Login; 