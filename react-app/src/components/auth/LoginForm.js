import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './loginform.css';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demoLogin = async (e) => {

    const demoEmail = 'demo@aa.io';
    const demoPassword = 'password'

    setEmail(demoEmail)
    setPassword(demoPassword)

    await dispatch(login('demo@aa.io', 'password'));

  };

  if (user) {
    return <Redirect to='/projects' />;
  }

  return (
    <form className='login-form' onSubmit={onLogin}>
      <div className='login-container'>
        <div className='login-header-container'>
          <h3 className='login-text'>Login</h3>
        </div>
        <div className='login-box'>
          <div className='errors-container'>
            {errors.map((error, ind) => (
              <div key={ind} className='ind-error'>{error}</div>
            ))}
          </div>
          <div className='email-input-container'>
            <label htmlFor='email' className='email-text'>Email</label>
            <input
              className='email-input'
              name='email'
              type='text'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='password-input-container'>
            <label htmlFor='password' className='password-text'>Password</label>
            <input
              className='password-input'
              name='password'
              type='password'
              value={password}
              onChange={updatePassword}
            />
          </div>
          <button type='submit' className='login-button'>LOGIN</button>
          </div>
          <div className='hyperlinks-container'>
            <NavLink to="/sign-up">
              <div className='signup-button'>
                Sign up
              </div>
            </NavLink>
            <button id="demoLoginButton" className="demo-button" onClick={demoLogin}>Demo Login</button>
          </div>
      </div>
    </form>
  );
};

export default LoginForm;
