import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card.css";
import girl from './../../images/macbook-2.png';

function Cards() {

  return (

 <div>
        <Card  bsPrefix="customcard">
     
            <Card.Body >
                <img src={girl} className="customimg"/>
                {/* ?<Card.Title> A girl who codes </Card.Title> */}
                <Card.Title bsPrefix="customtitle"> 13 inch Apple Macbook Pro</Card.Title>
                <Card.Text bsPrefix="span"> hi </Card.Text>    
                {/* <span className="span"></span>  */}
                {/* <div className="pricetag">                      */}
                <p >$4.00</p>
                <Button bsPrefix="custombutton">Add to Cart</Button>
                {/* </div> */}
    
                {/* <Image src="./../../images/software-girl.svg" bsPrefix="customcard" rounded /> */}
            </Card.Body>
        </Card>
</div>
  )
    
}

export default Cards 