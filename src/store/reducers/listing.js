import {LOAD_LISTINGS, REMOVE_LISTING} from "../actionTypes"

const listingReducer = (state =[], action) => {
    switch (action.type){
            case LOAD_LISTINGS:
              console.log("truth",typeof (action.listings) != "undefined",action.listings)
             if  (typeof (action.listings) != "undefined"){
                return [action.listings]
             }else{
                return []
             }


            default:
                return state    

    }

}

export default listingReducer