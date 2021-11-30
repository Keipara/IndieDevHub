import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import { authenticate } from './store/session';
import CreateProject from './components/createProject/createProject';
import ProjectsPage from './components/projectPage/projectPage';
import EditProject from './components/projectPage/projectEdit';
import Footer from './components/auth/footer/footer';
import ProjectsContainer from './components/projects/projectContainer';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route path='/' exact={true} >
        <div className='splash'>
          <div className='splash-top'>
            <div className='splash-header'>Start your indie game dev journey here</div>
            <div>
            <NavLink to="/sign-up">
              <div className='join-div'>
                JOIN THE HUB
              </div>
            </NavLink>
            </div>
          </div>
          <div className='splash-bottom'>
            <img
              src='https://cdn.discordapp.com/attachments/370781138194530308/912422153377431552/unknown.png'
              className="splash-image"
              alt="project-img"

            ></img>
          </div>
        </div>
      </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/projects/new' exact={true}>
          <CreateProject/>
        </Route>
        <Route path={['/projects']} exact={true}>
          <ProjectsContainer/>
        </Route>
        <Route path={'/projects/:id'} exact={true}>
          <ProjectsPage/>
        </Route>
        <Route path={'/projects/:id/edit'} exact={true}>
          <EditProject/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
