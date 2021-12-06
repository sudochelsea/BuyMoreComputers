import React from "react";
import "./header.css"

export default function Header(){

    return(

        <div>
            <div  className="header-container">
                <div  className="searchbox">
                    
                  <span  class="my-paragraph"></span>
                  <span  class="close"></span>
                  <div className="text">Apple Macbook</div>

                </div>

                <div class="menu-items">    
                    <div>Hello, Chelsea</div>
                    <div>Your Orders</div>
                    <div>my cart</div>

                </div>

            </div>
        </div>
    )
}