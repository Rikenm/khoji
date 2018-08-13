import {LOAD_POST} from "../actionTypes"

const postReducer = (state =[], action) => {
    switch (action.type){
            case LOAD_POST:
                return [...action.payload]


            default:
                return state    

    }

}

export default postReducer