import React, {Component} from "react"; //Importing React and Component for React.
import {Switch, Route, Redirect, BrowserRouter, withRouter} from "react-router-dom"; //Setups the brains of our router so it knows where to send users when they click on buttons on the website
import Attendance from "./components/attendanceComponent.js";
import Announcements from "./components/announcementComponent.js";
import NavbarJumbotron from "./components/NavbarJumbotronComponent.js";
import ReactCalendar from "./components/HomeComponent.js";
import './App.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter> {/*Top-level parent component that wraps around all other React-Router components.*/}
      <div>
        <NavbarJumbotron /> {/*Calls the NavbarJumbotron component. Navbar and Jumbotron will be shown on the web page.*/}
        <Switch> {/*This Switch component is like a Switch Statement in JavaScript. The Route components represent Case in the Switch statement. The Redirect component acts as a Default statement in a JavaScript Switch statement.*/}
          <Route path="/home" component={ReactCalendar}/> {/*When the Attendance tab is clicked, the student roster and drop down menu to take attendance is shown.*/}
          <Route path="/attendance" component={Attendance}/> {/*When the Attendance tab is clicked, the student roster and drop down menu to take attendance is shown.*/}
          <Route path="/grades" />
          <Route path="/assignments"/>
          <Route path="/announcements" component={Announcements}/>
          <Route path= "/email"/>
          <Route path="/notes"/>
          <Redirect path="/home" component={ReactCalendar}/> { /*This Redirect component acts as a catch all, sort of like a Default statement in a JavaScript Switch statement.*/ }
        </Switch>
      </div>
      </BrowserRouter>
    )}
}

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

//Default Export. JavaScript Module is a JavaScript file that contains at least one export.
export default App;
