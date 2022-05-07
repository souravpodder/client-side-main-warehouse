import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SocialLogin.css';
import googleLogo from '../../images/googleLogo.png';

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let errorElement;

  if (error) {
    errorElement = <p className='text-danger text-center fw-bold'>{error?.message}</p>
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>

      <div className='d-flex justify-content-center align-items-center'>
        <div className='half-line'></div>
        <p className='mt-2 px-2'>or</p>
        <div className='half-line'></div>
      </div>
      <div className='social-btn-container'>
        <button onClick={() => signInWithGoogle()} className='common-btn login-google-btn' > <img src={googleLogo} alt="google-img" /> <span>Login with Google</span></button>
      </div>

      {errorElement}


    </div>
  );
};

export default SocialLogin;