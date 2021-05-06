import React, {Component} from "react";
import {Card, CardBody, Button, CardTitle, CardText} from "reactstrap";

class Announcements extends Component {
    constructor(props){
        super(props);
        this.state= {
            selectedAnnouncement: null, //When the user selects an announcement, this value of null will change.
        }
    }

    //Method that will run when the user selects an announcement.
    onAnnouncementSelect(announcements){
        this.setState({selectedAnnouncement: announcements}) //this.setState will change the value of the selected announcement's property of state. 
    }
    render(){
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>May 5, 2021: This is the first announcement for Chemistry class.</CardTitle>
                        <CardText>Make sure to finish the Balancing Chemical Equations activity before Friday, May 7. We will be going over the answers in class.</CardText>
                        <CardText>
                            <small className="text-muted">Date this announcement was posted: {Date()} </small>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    };
}

export default Announcements;