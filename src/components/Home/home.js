import React from "react";
// import { Card } from "react-bootstrap";
import Cards from "../Card/card";
import Searchbar from "../Search/search.jsx";
import Sidebar from "../Sidebar/sidebar.jsx";
import Header from "../Header/header";

function Home() {

  return (

        <div>
          <h1>
          
           
            <Header></Header>
            <Searchbar></Searchbar>
            <Sidebar></Sidebar>
            <Cards></Cards>
          </h1>
        </div>
  )
  
  
}

export default Home