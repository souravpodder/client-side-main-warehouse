import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  let errorElement;
  if (error) {
    errorElement = <p className='text-center text-danger'>Error: {error && error.message}</p>
  }

  if (user) {
    navigate('/');
  }

  const handleSignUp = event => {
    event.preventDefault();
    const email = event.target.email?.value;
    const password = event.target.password?.value;

    createUserWithEmailAndPassword(email, password);
    toast('Verification email sent!');
  }


  return (
    <div className='form-container'>
      <Form onSubmit={handleSignUp} className='my-5'>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className='input-field' name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className='input-field' name="password" />
        </Form.Group>

        <div className='w-50 mx-auto' >
          <Button className='w-100' variant="primary" type="submit">
            Sign Up
          </Button>
        </div>
      </Form>

      {errorElement}

      <p className='text-center'>Already Registered? <Link to="/login">Login Here!</Link></p>
      <SocialLogin />
    </div>
  );
};

export default Register;