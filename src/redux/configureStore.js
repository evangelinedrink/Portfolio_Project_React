import {createStore, combineReducers, applyMiddleware} from "redux"; //Combining all the Reducers
import {Students} from "./students"; //Only need ./ because this students.js file is located in the redux folder.

export const ConfigureStore= () => {
    const store= createStore(
        combineReducers({
            students: Students,
        })
    ),
    return store; //Function will return the store variable.
};