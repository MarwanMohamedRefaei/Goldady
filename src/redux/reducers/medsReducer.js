import { ActionTypes } from "../constants/actionTypes"


const initialState = {
    Products: [],
    Categories: []
};




export const medsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS:
            return { ...state, Products: action.payload };
        case ActionTypes.CATEGORIES:
            return { ...state, Categories: action.payload };
        default:
            return state;
    }
}