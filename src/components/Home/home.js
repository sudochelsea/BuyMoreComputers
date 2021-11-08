import React from "react";
// import { Card } from "react-bootstrap";
import Cards from "../Card/card";
import Searchbar from "../Search/search.jsx";
import Sidebar from "../Sidebar/sidebar.jsx";

function Home() {

  return (

        <div>
          <h1>
            {/* <Cards></Cards> */}
            <Sidebar></Sidebar>
            {/* <Searchbar></Searchbar> */}
          </h1>
        </div>
  )
  
  
}

export default Home