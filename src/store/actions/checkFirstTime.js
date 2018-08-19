import {FIRST_STATE} from "../actionTypes";



export function State(whichState){
    return{
        type: FIRST_STATE,
        payload: whichState
    } 

}






export function firstState(whichState){ 

        
        return dispatch => {
            localStorage.setItem("first_visit",JSON.stringify(whichState))
            dispatch(State(whichState))
          }
       
    
}

