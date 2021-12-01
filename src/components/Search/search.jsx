import React from "react";
import "./search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Searchbar(){

    return(

        <div>
              {/* <div  className="searchbox">
             
                  <span  class="my-paragraph"></span>
                  <span  class="close"></span>
                  <div className="text">Apple Macbook</div>
                  
                
              </div> */}
              
             <div className="sort">
                 
               <div className="text3"> Sort</div>
               <div className="button1">
                   <p className="button1-text"> Relevance</p>         
                </div>
               <div className="button2">
               <p className="button2-text"> Popular</p> 
                </div>
               <div className="button2">
               <p className="button2-text"> Newest</p> 
              </div>
               <div className="button2"> 
               <p className="button2-text"> Price</p> 
               </div>
             </div>
              
        </div>



    )

}

export default Searchbar