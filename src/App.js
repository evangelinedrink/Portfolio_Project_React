import logo from './logo.svg';
import React, {Component} from "react";
import {Jumbotron, NavBar, Button, Container, Card, CardText, CardBody} from "reactstrap";
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
                <CardText>Window displaying new email messages.</CardText>
              </CardBody>
            </Card>
            </div>
          </Container>
        </Jumbotron>
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
