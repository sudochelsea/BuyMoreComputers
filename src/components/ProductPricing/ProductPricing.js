import React from "react"
import "./ProductPricing.css";

function ProductPricing(){


    return (

        <div> 

            <div class ="pricingcard">
                     <div   >
                     <div class= "pricecon"><p>Price</p><p>GHC 689.99</p></div>
                     <div class= "pricecon2"><p>Shipping</p><p>GHC 1200.00</p></div>
                     <div class= "pricecon3"><p>Delivery</p><p>GHC 1598.00</p></div>   
                     <div  class= "pricecon4"> <p>Estimated Arrival:</p><p>October 21st - November 6th</p></div>
                     <div class= "pricecon5"><p>In Stock</p></div>
                     <div class= "pricecon6"><p>Quantity</p></div>
                     <div class="pricebutton1"><p class="button1text">Add to Cart</p></div>
                     <div class="pricebutton2"><p class="button2text">Buy Now</p></div>
                         
                    </div> 
            </div>
        </div>
    )
}

export default ProductPricing