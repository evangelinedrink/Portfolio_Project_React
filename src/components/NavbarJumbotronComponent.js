
import React, {Component} from "react";
import {Jumbotron, Navbar, NavbarBrand, NavBarToggler, Collapse, NavLink, Nav, NavItem, Button, Container, Card, CardText, CardBody} from "reactstrap";
import Icon from "../iconPic.jpg";
import ReactCalendar from "../components/HomeComponent.js";
import Weather from "../components/weatherAppComponent.js"; //Importing the Weather constant
import weatherAPIKey from "./weatherAPIKey"; //Importing the Weather API Key


//Need to make a request (API call) from OpenWeather to get data from the API
class weatherAPICall extends Component {
  constructor() {
    super();
    this.state= {
      city: undefined, //The city will be placed by the user.
      country: undefined, //The country will be placed by the user.
    };
    this.getWeather(); //Caling getWeather method/function in the constructor
  }

  //Creating a method to fetch data from the OpenWeather API
  getWeather= async ()=> {
    const APICall= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk@appid=${weatherAPIKey}`) //Fetch function will make the API call to get data from OpenWeather. The method to get data from OpenWeather is from this website: https://openweathermap.org/current
  
    //Converting all the data received from OpenWeather to .JSON format
    const response= await APICall.json();

    //Display this response in the console.
    console.log(response);

    //Being able to access the city and country that the user searched for, so it can be seen in the Weather app.
    this.setState({
      city: response.name, //Obtained from the response's json file that shows the city under the title name.
      country: response.sys.country, //Obtained from the response's json file that shows the country under the sys tab and then country label.
    })
  }
};


//Classes are syntax sugar for functions.
class NavbarJumbotron extends Component {
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
                <Card>
                  <CardBody>
                    
                    <Weather city={this.state.city} country={this.state.country}/> {/*Calling the Weather App to be displayed in the Card's Body. The city is defined by the user and is a state prop from the constructor in the WeatherAPICall class.*/}
                    
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