import React, {Component} from "react";
import {Card, CardBody, Button, CardTitle, CardText} from "reactstrap";
import ANNOUNCEMENTS from "../shared/Announcements.js";

class Announcements extends Component {
    constructor(props){
        super(props);
        this.state= {
            announcements: ANNOUNCEMENTS,
            selectedAnnouncement: null, //When the user selects an announcement, this value of null will change.
        }
    }

    //Method that will run when the user selects an announcement.
   // onAnnouncementSelect(announcements){
  //      this.setState({selectedAnnouncement: announcements}) //this.setState will change the value of the selected announcement's property of state. 
 //   }

    render(){
        return(
            <div>
                {/*Use the map array method to go through the ANNOUNCEMENTS array and create a card for each element in the array. If you don't do this map() method on each element of the array, the announcements will not show up.*/}
                {this.state.announcements.map(announcement=>
                    <Card key={announcement.id}> {/*Always have a key attribute (id) for any element in an array. This key will always be placed on the topmost element in each array item.*/}
                        <CardBody>
                            <CardTitle><b>{announcement.title}</b></CardTitle> {/*The <b> makes the text bolded. */}
                            <CardText>{announcement.body}</CardText>
                            <CardText>
                                <small className="text-muted">{announcement.date}</small>
                            </CardText>
                        </CardBody>
                    </Card>)}
            </div>
        )
    };
}

export default Announcements;