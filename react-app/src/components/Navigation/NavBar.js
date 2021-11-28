
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import './navigation.css';

const NavBar = () => {
  const [showCreateProject, setShowCreateProject] = useState(false)
  const sessionUser = useSelector(state => state.session.user);
  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <div className='create-logout'>
        <NavLink to='/projects/new' exact={true} className="create-project-link">
          <div className='create-project'>
                CREATE PROJECT
          </div>
        </NavLink>
          <LogoutButton/>
      </div>
    );

  } else {
    sessionLinks = (
      <div className='login-signup'>
        <NavLink to='/login' exact={true} className='login-url'>
          <div className='login-div'>
            LOGIN
          </div>
        </NavLink>
        <NavLink to="/sign-up">
          <div className='signup-div'>
            SIGN UP
          </div>
        </NavLink>
      </div>
    );

  }

  return (
    <nav>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet"></link>
        <div className='nav-container'>
            <div className='home-div'>
              <NavLink to='/' exact={true} className='ind-words'>
                    <div className='indie'>INDIE</div>
                    <div className='game'>GAME</div>
                    <div className='dev'>DEV</div>
              </NavLink>
            </div>
          <div className='right-nav'>
            <NavLink to='/projects' exact={true} activeClassName='active'>
              <div className='open-projects-div'>
                  OPEN PROJECTS
              </div>
            </NavLink>
            <div className='sessions-div'>
              {sessionLinks}
            </div>
          </div>
        </div>
        {/* <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
        <div>
          <NavLink to='/projects/new' exact={true} className="create-project-link">
            Create Project
          </NavLink>
        </div> */}
    </nav>
  );
}

export default NavBar;
