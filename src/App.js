import React from 'react';
import './App.css';
import Homepage from './components/Homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUpPage from './pages/Signup/signup.component';





class App extends React.Component {
  render() {
   return (
     <div>
     <Route exact path='/' component={Homepage} />
     <Route path='/signup' component={SignUpPage} />
     </div>
   )          
  }
}

export default App;
