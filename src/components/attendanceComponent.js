import React, {Component} from "react";
import {Table, Button} from "reactstrap";
import STUDENTS from "../shared/Students.js"; //Obtaining the student roster array (named STUDENTS) to this file
import StudentsAlphabetical from "../shared/Students.js" //Obtaining the student roster array (named STUDENTSAlphabetical) to this file


//Using an if statement to determine if the attendance value should be changed to absent or late
/*function AttendanceChange(props){
    if(idA ==="1"){
        this.setState({attendance: "Absent"})
    } else if(idA==="2"){
        this.setState({attendance: "Late"})
    } else {
        this.setState({attendance: "Present"})
    };
};*/

class Attendance extends Component {
    constructor(props) {
        super(props);
        this.state= {
            students: StudentsAlphabetical,
            list: [
                {id: "0", option: "Present"},
                {id: "1", option: "Absent"},
                {id:"2", option: "Late"},
            ],
            studentAttendance: {
                id: " ",
                FirstName: " ",
                LastName: " ",
                Attendance: " ",
            },
        };
    };

    //Need to use Object Destructuring Syntax to change the value of Attendance from the value object
    //in the constructor.  The student's first and last name are going to be in an array, so to change 
    //just the Attendance section, you will need to use an array method, but only change the value for the 
    //Attendance, not FirstName and LastName.
   

    //Creating an event handler when the user selects from the select option if the student was absent, late or present
    handleChange= (e, id) => {
        let studentAttendance= this.state.students.map((item)=> {
            if (item.id===id) {
                let newStudents= {...item, Attendance: e.target.value}
                console.log(newStudents)
                return {...item, Attendance: e.target.value};
            } else {
                return item;
            }
        });
        //The students array will then be changed to include the new information about each student's attendance for that day.
        this.setState({students:studentAttendance});
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <Table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Attendance</th>
                    </tr>
                </thead>

                <tbody>
                {/*Use the map array method to go through the STUDENTS array and create the table row for each student*/}
                {this.state.students.map((student=> 
                <tr key={student.id}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td> {/*Creating Dropdown Button that will show if student is Present, Absent or Late*/}
                        <select>
                            {this.state.list.map(item=> (
                                <option key={item.id} value={item.option} onChange={(e)=> this.handlechange(e, item.option)}>
                                    {item.option}
                                </option>
                            ))}
                        </select>
                    </td>
                </tr>))}
                </tbody>
            </Table>
            <Button color="secondary" size="lg" block onClick={this.changeAttendance}> {/*Submit button*/}
                Submit Attendance
            </Button> 
            </form>
        );
    };
}

export default Attendance;

//Creating a Simple React Dropdown Part 1: https://www.youtube.com/watch?v=AcOjmZrcxfM&t=32s
//Create a React Dropdown using Array (starts at 12 min): https://www.youtube.com/watch?v=HZGT9BS5aSQ