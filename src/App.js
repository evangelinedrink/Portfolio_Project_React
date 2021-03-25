import logo from './logo.svg';
import React, {Component} from "react";
import {Jumbotron, NavBar, NavbarBrand, NavBarToggler, Collapse, Nav, NavItem, Button, Container, Card, CardText, CardBody} from "reactstrap";
import Icon from "./iconPic.jpg";
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <div className="inlineJumbotron">
            {/*Icon Image*/}
            <img src={Icon} className="iconPicture" alt="Colored pencils arranged in a circle."/>
            </div>

            <div className="inlineJumbotron">
            <Card>
              <CardBody>
                <CardText>Window displaying new email messages.
                  <p>Include the link for the weather app.</p>
                </CardText>
              </CardBody>
            </Card>
            </div>

            <div className="inlineJumbotron">
              <Button color="secondary" block>Settings and Log Off</Button>
              <Button color="secondary" block>Emails</Button>
            </div>

          </Container>
        </Jumbotron>

        <Container>
              <Button color="secondary" block>Attendance Page</Button>
              <Button color="dark" block>Grades</Button>
              <Button color="secondary" block>Assignments and Tests</Button>
              <Button color="dark" block>Announcements</Button>
              <Button color="secondary" block>Contact Parents and/or Students</Button>
              <Button color="dark" block>Notes and Contact Logs</Button>
        </Container>
      </div>
    );
  }
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

export default App;
