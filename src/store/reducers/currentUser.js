import {SET_CURRENT_USER} from "../actionTypes";

const DEFAULT_STATE ={
    isAuthenticated: false,
    user:{} // id of the user
};


export default (state = DEFAULT_STATE,action) => {
    switch (action.type){
        case SET_CURRENT_USER:
          console.log("changing the login state")
            return {

                    isAuthenticated: Boolean(Object.keys(action.user).length),
                    user: action.user
            }
         
        default:
           
           return state;
    }

}