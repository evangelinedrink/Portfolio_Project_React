import React, {Component} from "react"; //Importing React
import {Jumbotron, Navbar, NavbarBrand, NavBarToggler, Collapse, NavLink, Nav, NavItem, Button, Container, Card, CardText, CardBody} from "reactstrap";
import "weather-icons/css/weather-icons.css"; //Importing the Weather Icons

const Weather= () => {
    //We will return JSX
    return(
       //Creating a class container
       <div className="container">
           <div className= "cards">
                <h1>Weather App</h1>
                <h5 className= "py-4"> {/*p stands for padding, y stands for top and bottom. 4 is the size. https://mdbootstrap.com/docs/react/utilities/spacing/ */}
                    {/*Using the Weather Icons. From this website: https://github.com/erikflowers/weather-icons */}
                    <i className="wi wi-day-sunny"></i>
                </h5>
           </div> 
       </div>

    );
};

//Exporting this Weather constant
export default Weather;