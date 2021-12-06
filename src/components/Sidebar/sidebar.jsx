import React from 'react';
import SidebarCss from './sidebar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form , Button} from 'react-bootstrap';
import "./sidebar.css";


function Sidebar() {

    return(
            <div>
                
                                     
            <div className={SidebarCss.container}>
                   <div className={SidebarCss.filter} >
                        <div className={SidebarCss.category}>Categories</div>                           
                        <div >
                            <div className="form-check" >
                            <input type="checkbox" id="scales" name="scales" />
                            <label for="scales">Phones and Tablets</label>
                            </div>

                            <div className="form-check" >
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Laptops and Ultrabooks</label>
                            </div>

                            <div className="form-check" >
                            <input type="checkbox" id="horns" name="horns" checked  />
                            <label for="horns">Television</label>
                            </div>

                            <div className="form-check" >
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Home Theaters</label>
                            </div>

                            <div className="form-check" >
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Digital Cameras</label>
                            </div>

                            <div className="form-check" >
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Gaming Consoles</label>
                            </div>   
                         </div>                     
                       
                        
                    </div>
                    <div className={SidebarCss.filter2} >

                    <div className={SidebarCss.price}>Price range</div>

                    <div className={SidebarCss.buttons}>
                    <Button variant="light" size="sm" className="super-btn-xxl">Min</Button>{' '}
                    <Button variant="outline-dark"  className =' noHover'size="sm">$ 8000 </Button>{' '}
                    </div>
                    </div>


                    <div className={SidebarCss.filter3} >
                    <div className={SidebarCss.ratingtext}>Rating</div>
                    <fieldset class="rating">
                    <div className="check" >
                    <input  type="checkbox" id="stars" name="stars"  checked/>
                    </div>    
                           
                    <input type="radio" id="star5" name="rating" value="5" />
                        <label class = "full" for="star5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="star4half" name="rating" value="4 and a half" />
                        <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" />
                        <label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="star3half" name="rating" value="3 and a half" />
                        <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" />
                        <label class = "full" for="star3" title="Meh - 3 stars"></label>
                    <input type="radio" id="star2half" name="rating" value="2 and a half" />
                        <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" />
                        <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="star1half" name="rating" value="1 and a half" />
                        <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" />
                        <label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                    <input type="radio" id="starhalf" name="rating" value="half" />
                        <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                     </fieldset>
                    </div>

                   
            </div>

            <div className={SidebarCss.button1}>
                     <p className={SidebarCss.button1text}>Filter</p>         
             </div>
        </div>
    )
}

export default Sidebar