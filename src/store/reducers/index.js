import {combineReducers} from "redux";
import currentUser from "./currentUser";
import errors from "./error";
import listingReducer from "./listing"
import firstStateReducer from "./firstState"

const rootReducer = combineReducers({

            currentUser,
            errors,
            
            firstStateReducer

})


export default rootReducer;

