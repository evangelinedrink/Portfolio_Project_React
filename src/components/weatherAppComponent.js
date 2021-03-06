import React, {Component} from "react"; //Importing React
import {Jumbotron, Navbar, NavbarBrand, NavBarToggler, Collapse, NavLink, Nav, NavItem, Button, Container, Card, CardText, CardBody} from "reactstrap";
import "weather-icons/css/weather-icons.css"; //Importing the Weather Icons
import NavbarJumbotron from "../components/NavbarJumbotronComponent.js"; //Importing the NavbarJumbotron constant

const Weather= (props) => { //Props are properties of the constructor's object in the WeatherAPICall class located in NavbarJumbotronComponent.js
    //We will return JSX
    return(
       //Creating a class container
       <div className="container">
           <div className="column">
                {/*In the code below, the city and country that the user typed in will be displayed. */}
                <h1>
                    {props.city} {/*When you call city and country in the App.js file, this values for the props will change. These values will change based on the data that we get from Open Weather API. */}
                </h1> 
           </div>
           
           <div className="column">
                <h5 className= "py-4"> {/*p stands for padding, y stands for top and bottom. 4 is the size. https://mdbootstrap.com/docs/react/utilities/spacing/ */}
                    {/*Using the Weather Icons. From this website: https://github.com/erikflowers/weather-icons */}
                    <i className={`wi ${props.weatherIcon} display-1`}/> {/*Display-1 tells about the size of the icon */}
                </h5>

                {/*Displays the description of the weather. */}
                <h4 className="py-3">{props.description}</h4>
           </div>


            <div className="column">
                <div className="row">
                    {/*Using the Ternary Operator (If/Else statement) to show the degrees F when there is someting in the {props.temp_fahrenheit} */}
                    {props.temp_fahrenheit? <h1 className= "py-2">Current temperature is: {props.temp_fahrenheit}&deg;F</h1>: null} {/*This means we are getting the data from Open Weather APi and placing it in this variable. This is why we use curly braces. &deg;F displays the degree in Fahrenheit.*/}
                </div>
                
                <div className="row">
                    {/*Creating a command that will show the min and max temperatures. First argument is the min temperature, second argument is the max temperature. */}
                    {minMaxTemp(props.temp_min, props.temp_max)}
                </div>

            </div>

       </div>
    );
};

//Function to determine the minimum and maximum temperature. Parameters are minimum (min) and maximum (max) values
function minMaxTemp(min,max) {
    if (min && max) {
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
}

//Exporting this Weather constant
export default Weather;