
import React, {Component} from "react";
import {Jumbotron, Navbar, NavbarBrand, NavBarToggler, Collapse, NavLink, Nav, NavItem, Button, Container, Card, CardTitle, CardText, CardBody} from "reactstrap";
import Icon from "../iconPic.jpg";
import ReactCalendar from "../components/HomeComponent.js";
import Weather from "../components/weatherAppComponent.js"; //Importing the Weather constant
import weatherAPIKey from "../bin/weatherAPIKey.js"; //Importing the Weather API Key
import Form from "./form.component"; //Importing the Form where user will type the name of the city and country. Includes the Get Weather button.
import cloudsImage from "../Clouds.jpg";

//https://www.robinwieruch.de/react-fetching-data
//https://medium.com/@joelazarz/using-concurrently-with-json-server-and-your-react-app-3d07487acc50 


//Calling the OpenWeather API Key
const API_key= weatherAPIKey;

//Classes are syntax sugar for functions.
class NavbarJumbotron extends Component {
  //Lines 128-228 are for the Weather App
  constructor() {
    super();
    this.state= {
      city: undefined,//Getting API information from the Open Weather app
      country: undefined,
      icon: undefined,
      main: undefined,
      fahrenheit: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description:"",
      error: false,
    };
    //this.getWeather(); //Calling getWeather method in the constructor <- This is not needed when the event handler called loadweather will start the getWeather() function once the user hits the Get Weather button on top of the weather app.
    this.weatherIcon= { //Specifying the weather icon property. These icons will be used based on the Weather's ID. Based on OpenWeather, ID between 200-232 corresponds to Thunderstorms. Weather Condition IDs are found on this website: https://openweathermap.org/weather-conditions  
      Thunderstorm: "wi-thunderstorm", //specifying the weather icon for Thunderstorm
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
  }
}

//Since the temperature in Open Weather is in Kelvin, we need to convert it to Fahrenheit.
calFahrenheit(temp) {
  let calculateToFahrenheit= Math.floor((temp-273.15)*(9/5)+32); //Math.floor() function returns the largest interger less than or equal to a given number
  return calculateToFahrenheit; //Returning this variable so it can be used in other parts of the code.
}

//Creating a method that will take the Weather Condition ID (found in the Weather property in the Console Log) and pair it with the correct Weather Icon. Weather Condition IDs are found on this website: https://openweathermap.org/weather-conditions  
get_WeatherIcon(icons, rangeID) {
  switch(true) {
    case rangeID >= 200 && rangeID<=232: //If the weather condition ID is between 200 and 232, then the weather icon will be a Thunderstorm
      this.setState({icon: this.weatherIcon.Thunderstorm}); //Weather Icon will be the Thunderstorm icon.
      break; //This will get out of the Switch statement if the weather condition ID is between 200 and 232.
    case rangeID >= 300 && rangeID<= 321:
      this.setState({icon: this.weatherIcon.Drizzle});
      break;
    case rangeID >= 500 && rangeID<= 531:
      this.setState({icon: this.weatherIcon.Rain});
    break;
    case rangeID >= 600 && rangeID<= 622:
      this.setState({icon: this.weatherIcon.Snow});
    break;
    case rangeID >= 701 && rangeID<= 781:
      this.setState({icon: this.weatherIcon.Atmosphere});
    break;
    case rangeID ===800 :
      this.setState({icon: this.weatherIcon.Clear});
    break;
    case rangeID >=801 && rangeID<= 804:
      this.setState({icon: this.weatherIcon.Clouds});
    break;
    default: //Default statement if none of the weather condition ID's are met
      this.setState({icon: this.weatherIcon.Clouds});
  }
}
  
//Creating a Method where we will get data from the API call from the OpenWeather Map
getWeather= async (event) => { //Specifying the event in the parameters because the loadweather event handler will make this function start running
  event.preventDefault(); //This will stop the weather app from reloading
  
  //User has defined what city they want to search for from filling in the City Form Input Component (located in the form.component.jsx file)
  //Event.target: The target property of an Event (like from an event handler) refers to an object which made the event happen. In this case, when user types in the city and country and hits the "Get Weather" button, their responses creates an event which trigger the getWeather() method to start working.
  const city= event.target.elements.city.value; //city corresponds to the name input in the city form input component

  //User has defined what country they want to search for from filling in the Country Form Input Component (located in the form.component.jsx file)
  const country= event.target.elements.country.value; //country corresponds to the name input in the country form input component
  

  //If the user leaves the city and country blank in the input fields, the API will not be called to get the weather
  if (city && country) { //If city and country have been typed in by the user, API call to OpenWeather will be called
    //Using the city and country variables above to replace London and UK (default values) in the API call: http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`) //We are going to make the API call in this Fetch function

    //Converting all the data received from OpenWeather to .JSON format
    const response= await api_call.json();

    //Display this response in the console.
    console.log(response);

    //Being able to access the city and country that the user searched for, so it can be seen in the Weather app.
    //This also updates the this.state data that is located in the Constructor
    this.setState({
      city: `${response.name}, ${response.sys.country}`, //Obtaining the city and country from the fetched file that was taken from OpenWeather and placing it under the title name.
      //country: response.sys.country, //Obtained from the response's json file that shows the country under the sys tab and then country label.
      fahrenheit: this.calFahrenheit(response.main.temp), //The temperature taken from the Open Weather data is in Kelvin, so we need to convert it to Fahrenheit.
      temp_max: this.calFahrenheit(response.main.temp_max), //Converting the maximum temperature from Kelvin to Fahrenheit
      temp_min: this.calFahrenheit(response.main.temp_min), //Converting the minimum temperature from Kelvin to Fahrenheit
      description: response.weather[0].description, //This gets the first value of the weather array, which is the description of the weather (this can be seen in the Object tab in the Console, which is gotten from the Open Weather app)
      error: false,  //When the city and country is specified, the error will be set as false. This will also reset the error message if initially the user didn't specify the city and country, the error message will disappear.
    });
    //Calling the get_WeatherIcon() method and specifying in the parameter the this.weatherIcon (which is obtained from OpenWeather for that city)
    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id) //First Parameter is what will be placed in the get_WeatherIcon() method.  The first parameter for get_WeatherIcon() is icon and the second parameter is rangeID (looking at the Console,the weather condition ID is found in weather array, index 0, and then id). We have to use response because this is what we get from fetching the data from Open Weather
  } else {
    this.setState({error: true}); //If the user doesn't type in a city and a country, then an error will be shown.
  }
  
};


    render() {
        return(
        <React.Fragment> {/*We are try to return 2 elements from a component, Jumbotron and NavBar.  
            Normally this is not allowed (React only lets you return one element per component), but with React Fragment we can do this. 
            React Fragment acts as a wrapper and doesn't create another DOM node like <div>*/}
            <Jumbotron fluid>
              <Container fluid>
                <div className="inlineJumbotron col-2">
                {/*Icon Image*/}
                <img src={Icon} className="iconPicture" alt="Colored pencils arranged in a circle."/>
                </div>
    
                <div className="inlineJumbotron col-8">
                <Card style={{backgroundImage: "url("+cloudsImage+")", backgroundSize: "fit"}}> {/*Setting the background image: https://holycoders.com/set-background-image-react-js/ */}
                  <CardTitle>
                    <Form loadweather= {this.getWeather} error={this.state.error}/> {/*Calling the Form Component from form.component.jsx. The event handler loadweather is being specified here. Once the loadweather event handler has been initiated (the user hits the Get Weather button for a city, country), the getWeather function in this App.js file will start running. Error message will show up if there is an error, that is why we speciy it in this line. */}
                  </CardTitle>

                  <CardBody>
                    <Weather
                    city={this.state.city} 
                    country={this.state.country} 
                    temp_fahrenheit= {this.state.fahrenheit}
                    temp_max= {this.state.temp_max}
                    temp_min={this.state.temp_min}
                    description={this.state.description}
                    weatherIcon={this.state.icon}//Specifying the Weather Icon property
                    />                    
                  </CardBody>
                </Card>
                </div>
    
                <div className="inlineJumbotron col-2">
                  <Button color="secondary" block>Settings and Log Off</Button>
                  <Button color="secondary" block>Emails</Button>
                </div>
    
              </Container>
            </Jumbotron>
    
            {/*<Container className="ml-1">*/}
              <Navbar color="dark" sticky="top" expand="md"> {/*className="col-3" */}
               <div className="container">
                <Nav className="mr-auto" className="bg-light" navbar>
                <NavItem>
                    <NavLink href="/home">Home Page</NavLink>
                  </NavItem>
                  
                  <NavItem>
                    <NavLink href="/attendance">Attendance Page</NavLink>
                  </NavItem>
    
                  <NavItem>
                    <NavLink href="/grades">Grades</NavLink>
                  </NavItem>
    
                  <NavItem>
                    <NavLink href="/assignments">Assignments and Tests</NavLink>
                  </NavItem>
    
                  <NavItem>
                    <NavLink href="/announcements">Announcements</NavLink>
                  </NavItem>
    
                  <NavItem>
                    <NavLink href="/email">Contact Parents and/or Students</NavLink>
                  </NavItem>
                
                  <NavItem>
                    <NavLink href="/notes">Notes and Contact Logs</NavLink>
                  </NavItem>

                </Nav>
                
                </div>
              </Navbar>
            {/*</Container>*/}
          </React.Fragment>
        );
      }
    }

export default NavbarJumbotron;