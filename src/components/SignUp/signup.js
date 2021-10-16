import React from "react";
// import logo from './../../images/software-girl.svg';
import './signup.css';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default function SignUp(){

    return(
    <div>
       <div className="container">
  
        <form >  
            <div className="title">
                 <p> Create your Buy More Account </p>   
            </div>
              
            <input 
            type="text" 
            className="textbox1" 
            placeholder="Firstname"
            /><br></br>    
            <input 
            type="text" 
            className="textbox2" 
            placeholder="Lastname"
            /><br></br>
            <input 
            type="email" 
            className="textbox3" 
            placeholder="Email"
            />  <br></br>
            <input 
            type="password" 
            className="textbox3" 
            placeholder="Create a Password"
            />  
            <p className="other-text">By clicking Create Account, you acknowledge you <br></br>have read and agreed to our Terms of Use and Privacy Policy</p>  
            <input 
            type="submit"
            className="textbox4"
            placeholder="Create Account"
            
            />
            <p  className="other-text2">Already have an account?</p>
            <input 
            type="submit"
            className="textbox5"
            placeholder="Sign In"
            
            />
        </form>
       </div>
        {/* <Button>test</Button> */}
        
    </div>
    )
}