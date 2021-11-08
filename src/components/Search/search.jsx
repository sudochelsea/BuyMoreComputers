import React from "react";
import "./search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Searchbar(){

    return(

        <div>
              <div  className="searchbox">
             
                  <span  class="my-paragraph"></span>
                  <span  class="close"></span>
                  <div className="text">Apple Macbook</div>
                  <p className="text2"> search results for <b>"Apple Macbook"</b></p>
                
              </div>
              
             <div className="sort">
               < p className="text3"> Sort</p>
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