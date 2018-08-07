import {LOAD_LISTINGS, REMOVE_LISTING} from "../actionTypes"

const listingReducer = (state =[], action) => {
    switch (action.type){
            case LOAD_LISTINGS:
                return [...action.listings]


            default:
                return state    

    }

}

export default listingReducer