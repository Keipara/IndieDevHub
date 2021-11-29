import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  const onSignUp = async (e) => {
    e.preventDefault();
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/projects' />;
  }

  return (
    <form className='login-form' onSubmit={onSignUp}>
      <div className='login-container'>
        <div className='login-header-container'>
          <h3 className='login-text'>Signup</h3>
        </div >
        <div className='login-box'>
          <div className='errors-container2'>
            {errors.map((error, ind) => (
              <div className='ind-error' key={ind}>{error}</div>
            ))}
          </div>
          <div className='email-input-container'>
            <label className='email-text' >Username</label>
            <input
              className='email-input'
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div className='email-input-container'>
            <label className='email-text'>Email</label>
              <input
                className='email-input'
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
              ></input>
          </div>
          <div className='email-input-container'>
              <label className='email-text'>Password</label>
              <input
                className='email-input'
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
              ></input>
          </div>
          <button type='submit' className='login-button'>SIGN UP</button>
        </div>
        <div className='hyperlinks-container'>
            <NavLink to="/login">
              <div className='signup-button'>
                Login
              </div>
            </NavLink>
          </div>
      </div>
    </form>
  );
};

export default SignUpForm;
