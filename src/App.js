import React from 'react';
import {Navbar,NavbarBrand, Jumbotron, Button} from 'reactstrap';
import './App.css';
import Description from './Description'


function App() {
  return (
    <>
    <Navbar color="dark">
      <div className="container">
      <NavbarBrand className="navbar-brand abs" href="/">
          Cheat Sheet
      </NavbarBrand>
      </div>
    </Navbar>
    <Jumbotron>
      <p className="lead">Quick Review ,Revision And Mnemonic Are Always Good</p>
      <hr my-2/>
      <p className="lead">Page is still under Construction</p>
      <Button className="About"color="primary">About Us</Button>
    </Jumbotron>
    
        <div className="img-thumbnail">
           <Description/>
        </div>

      <div className="footer">
        &copy;Abhilekh Gautam all right reserved.
        <p>Follow<a rel="noopener noreferrer"href="https://www.quora.com/profile/Abhilekh-Gautam-1" target="_blank">Abhilekh Gautam</a> On quora</p>
      </div>

      
  
    </>
  )
}

export default App;
