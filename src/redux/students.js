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