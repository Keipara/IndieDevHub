import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import { authenticate } from './store/session';
import MainContent from './components/mainContent/mainContent';
import CreateProject from './components/createProject/createProject';
import ProjectsPage from './components/projectPage/projectPage';
import EditProject from './components/projectPage/projectEdit';

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
          <h1>IndieDevHub Splash Page</h1>
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
          <MainContent/>
        </Route>
        <Route path={'/projects/:id'} exact={true}>
          <ProjectsPage/>
        </Route>
        <Route path={'/projects/:id/edit'} exact={true}>
          <EditProject/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
