import React from "react";
import passwordCss from "./password.module.css";


export default function Password(){


    return(

        <div>
            <div className={passwordCss.container}>
                <form>
                    <div className={passwordCss.title}>
                        <span> Forgot your passsword? </span> <br></br> 
                         <span style={{marginLeft:30}}>   We can Help. </span>   
                    </div>

                    <p className={passwordCss.othertext}>
                        Enter the email address for your BuyMore account.<br></br>
                        We will send you a verification code for you to <br></br>
                        enter before logging in

                    </p>

                    <input 
                        type="email" 
                        className={passwordCss.textbox3}
                        placeholder="Email"
                    />  <br></br>

                    <input 
                     type="submit"
                     className={passwordCss.textbox4}
                     placeholder="Sign In"            
                    />

                    <span className={passwordCss.othertext} > Remember your password? </span>
                    <span className={passwordCss.othertext2}> Sign in</span>
                
                </form>
            </div>

        </div>
    )
}