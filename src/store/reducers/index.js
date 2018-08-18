import {combineReducers} from "redux";
import currentUser from "./currentUser";
import errors from "./error";
import listingReducer from "./listing"
import firstStateReducer from "./firstState"
import post from "./post"

const rootReducer = combineReducers({

            currentUser,
            errors,
            firstStateReducer,
            post

})


export default rootReducer;

