import React from 'react';
import './App.css';
import Homepage from './components/Homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUpPage from './pages/Signup/signup.component';
import LoginPage from './pages/Login/login.component';
import UserPage from './pages/User/user.page';




class App extends React.Component {
  render() {
   return (
     <div>
     <Switch>
     <Route exact path='/' component={Homepage} />
     <Route exact path='/signup' component={SignUpPage} />
     <Route exact path='/login' component={LoginPage} />
     <Route exact path='/user' component={UserPage} />     
     </Switch>
     </div>
   )          
  }
}

export default App;
