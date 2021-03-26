
import React, {Component} from "react";
import {Jumbotron, Navbar, NavbarBrand, NavBarToggler, Collapse, NavLink, Nav, NavItem, Button, Container, Card, CardText, CardBody} from "reactstrap";
import Icon from "../iconPic.jpg";

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
          </React.Fragment>
        );
      }
    }

export default NavbarJumbotron;