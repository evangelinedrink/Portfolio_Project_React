import logo from './logo.svg';
import React, {Component} from "react";
import {Jumbotron, Navbar, NavbarBrand, NavBarToggler, Collapse, NavLink, Nav, NavItem, Button, Container, Card, CardText, CardBody} from "reactstrap";
import Icon from "./iconPic.jpg";
import {Switch, Route, Redirect, BrowserRouter, withRouter} from "react-router-dom"; //Setups the brains of our router so it knows where to send users when they click on buttons on the website
import Attendance from "./components/attendanceComponent.js";
import NavbarJumbotron from "./components/NavbarJumbotronComponent.js"
import './App.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <div>
        <NavbarJumbotron /> {/*Calls the NavbarJumbotron component. Navbar and Jumbotron will be shown on the web page.*/}
        <Switch> {/*This Switch component is like a Switch Statement in JavaScript. The Route components represent Case in the Switch statement. The Redirect component acts as a Default statement in a JavaScript Switch statement.*/}
          <Route path="/attendance" component={Attendance}/>
          <Route path="/grades" />
          <Route path="/assignments"/>
          <Route path="/announcements"/>
          <Route path= "/email"/>
          <Route path="/notes"/>
          <Redirect path="/home"/> { /*This Redirect component acts as a catch all, sort of like a Default statement in a JavaScript Switch statement.*/ }
        </Switch>
      </div>
      </BrowserRouter>
    )}
}
      /*<div>
        <Jumbotron fluid>
          <Container fluid>
            <div className="inlineJumbotron col-2">
            {/*Icon Image*/
            /*<img src={Icon} className="iconPicture" alt="Colored pencils arranged in a circle."/>
            </div>

            <div className="inlineJumbotron col-8">
            <Card>
              <CardBody>
                <CardText>Window displaying new email messages.
                  <p>Include the link for the weather app.</p>
                </CardText>
              </CardBody>
            </Card>
            </div>

            <div className="inlineJumbotron col-2">
              <Button color="secondary" block>Settings and Log Off</Button>
              <Button color="secondary" block>Emails</Button>
            </div>

          </Container>
        </Jumbotron>

        <Container className="ml-1">
          <Navbar color="light" className="col-3">
            <Nav className="mr-auto" className="bg-light" navbar>
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

          </Navbar>

        </Container>
      </div>
    );*/
  //}
//}
//Weather App:  https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/ 

{/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/}

export default App;
