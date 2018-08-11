import {ADD_ERROR, REMOVE_ERROR} from "../actionTypes";

export const addError = error => ({
type: ADD_ERROR,
error

})

export const removeError = () => ({
    type: REMOVE_ERROR
})


export function facebookError() {

    return dispatch => {


        dispatch(addError("Facebook Error"))
    }


}

export function facebookremoveError() {

    return dispatch => {


        dispatch(removeError())
    }


}