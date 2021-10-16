import React from "react";
// import logo from './../../images/software-girl.svg';
import loginCss from './login.module.css';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default function LogIn(){

    return(
    <div>
       <div className={loginCss.container}>
  
        <form >  
            <div className={loginCss.title}>
                 <p> Sign In to  your Buy More Account </p>   
            </div>
              
           
            <input 
            type="email" 
            className={loginCss.textbox3}
            placeholder="Email"
            />  <br></br>
            <input 
            type="password" 
            className="textbox3" 
            placeholder="Create a Password"
            />  
            <input 
            type="submit"
            className={loginCss.textbox4}
            placeholder="Create Account"           
            />
            <p className="other-text2">Don't have an account?</p>

            <input 
            type="submit"
            className={loginCss.textbox5}
            placeholder="Sign In"            
            />
        </form>
       </div>
        {/* <Button>test</Button> */}
        
    </div>
    )
}