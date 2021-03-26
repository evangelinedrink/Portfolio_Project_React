import React, {Component} from "react";
import {Table} from "reactstrap";
import STUDENTS from "../shared/Students.js"; //Obtaining the student roster array (named STUDENTS) to this file
import StudentsAlphabetical from "../shared/Students.js" //Obtaining the student roster array (named STUDENTSAlphabetical) to this file

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
            value: [" "],
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value}); //setState is when the value of a component will change
    }

    handleSubmit(event) {
        alert("The attendance for today is the follow: " + this.state.value);
        event.preventDefault();
    }

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
                                <option key={item.id} value={item.option}>
                                    {item.option}
                                </option>
                            ))}
                        </select>
                    </td>
                </tr>))}
                </tbody>
            </Table>
            <input type="submit" value="Submit"/> {/*Submit button*/}
            </form>
        );
    };
}

export default Attendance;

//Creating a Simple React Dropdown Part 1: https://www.youtube.com/watch?v=AcOjmZrcxfM&t=32s
//Create a React Dropdown using Array (starts at 12 min): https://www.youtube.com/watch?v=HZGT9BS5aSQ