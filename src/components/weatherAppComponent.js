import React, {Component} from "react"; //Importing React
import {Jumbotron, Navbar, NavbarBrand, NavBarToggler, Collapse, NavLink, Nav, NavItem, Button, Container, Card, CardText, CardBody} from "reactstrap";
import "weather-icons/css/weather-icons.css"; //Importing the Weather Icons
import NavbarJumbotron from "../components/NavbarJumbotronComponent.js"; //Importing the NavbarJumbotron constant

const Weather= (props) => { //Props are properties of the constructor's object in the WeatherAPICall class located in NavbarJumbotronComponent.js
    //We will return JSX
    return(
       //Creating a class container
       <div className="container">
           <div className= "cards">
                {/*In the code below, the city and country that the user typed in will be displayed. */}
                <h1>{props.city}, {props.country}</h1> 

                <h5 className= "py-4"> {/*p stands for padding, y stands for top and bottom. 4 is the size. https://mdbootstrap.com/docs/react/utilities/spacing/ */}
                    {/*Using the Weather Icons. From this website: https://github.com/erikflowers/weather-icons */}
                    <i className="wi wi-day-sunny display-1"/> {/*Display-1 tells about the size of the icon */}
                </h5>
                <h1 className="py-2">
                    77&deg;F {/*Displays the degree in Fahrenheit. */}
                </h1>

                {/*Creating a command that will show the min and max temperatures */}
                {minMaxTemp(61, 80)}

                {/*Displays the description of the weather. */}
                <h4 className="py-3">Sunny</h4>
           </div> 
       </div>

    );
};

//Function to determine the minimum and maximum temperature. Parameters are minimum (min) and maximum (max) values
function minMaxTemp(min,max) {
    return( /*Returning JSX code below */
        <h3>
            {/*Creating left and right padding for the minimum and maximum temperature */}
           <span className="px-4">
                {min}&deg;F {/*Binding the min value */}
            </span> 

            {/*Creating left and right padding for the minimum and maximum temperature */}
           <span className="px-4">
                {max}&deg;F {/*Binding the max value */}
            </span> 

        </h3>
    );
}

//Exporting this Weather constant
export default Weather;