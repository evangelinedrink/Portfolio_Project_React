//This is the Reducer for the Students' Attendance
import * as ActionTypes from "./ActionTypes"; //We will be getting the STUDENTS array from an action.

export const Students= (state={
    isLoading: true,
    errMess: null,
    students: []
}, action) => {
    switch(action.type){
        case ActionTypes.STUDENT_ATTENDANCE:
            return{...state, }
    }
}

//This was in the attendanceComponent
    //studentAttendanceValue(item){
    //    this.setState(studentAttendance: )
    //}
    //handleChange(event) {
    //    this.setState({value: event.target.value}); //setState is when the value of a component will change
    //}

    //handleSubmit(event) {
    //    console.log("The attendance for today is the follow: " + this.state.value);
        //alert("The attendance for today is the follow: " + this.state.value);
        //event.preventDefault();
    //}