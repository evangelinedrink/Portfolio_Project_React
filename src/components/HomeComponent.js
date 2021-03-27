import React, {Component, useState} from "react";
import Calendar from "react-calendar";

const ReactCalendar= () => {
    //React Hooks
    const [date, setDate] = useState(new Date()); //new Date will get the current date from the computer and it will be stored in the "date" variable.
    //setDate is the function name and the value before it "date" is where the data will be stored.
    const onChange= date => { //Variable is date that will be passed through this function
        setDate(date)
    };

    return(
        <div>
            <Calendar showWeekNumbers 
            onChange={onChange} value={date} /*Using React Hooks, don't need the this keywork.*/
            /> 
            <p>The date selected is: {date.toString()}.</p> {/*See the value of the date below the calendar. Since the date is not in an array, we have to convert it into a string.*/}
            
        </div>
    );
};



export default ReactCalendar;