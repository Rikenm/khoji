import {FIRST_STATE} from "../actionTypes";


export default (state = {whichState: ""}, action) => {


    switch (action.type){
        case FIRST_STATE:
            
            return {
                whichState: action.payload
            }
        default:
      
           return state;
    }


}