import React from "react";
import SignUp from "./components/SignUp/signup";
import './App.css'; 
import LogIn from "./components/LogIn/login";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/home";
import Error from "./components/Error/error";
import Password from "./components/password/password"

function App() {
  return (
   <div>
     <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={LogIn} />
        <Route path='/forgotpassword' component={Password}/>
        <Route component={Error} /> 
      </Switch>
   </div> 
   

  );
}

export default App;
