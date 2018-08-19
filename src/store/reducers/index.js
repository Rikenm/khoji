import {combineReducers} from "redux";
import currentUser from "./currentUser";
import errors from "./error";
import list from "./listing"
import firstStateReducer from "./firstState"
import post from "./post"

const rootReducer = combineReducers({

            currentUser,
            errors,
            firstStateReducer,
            post,
            list

})


export default rootReducer;

