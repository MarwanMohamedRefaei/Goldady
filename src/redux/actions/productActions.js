import axiosApi from "../../api/items";
import { ActionTypes } from "../constants/actionTypes";

export const fetchProducts = () => {

    return async (dispatch, getState) => {
        const response = await axiosApi.get('/products')
        dispatch({ type: ActionTypes.GET_PRODUCTS, payload: response.data.products })

        let categories = [`All`];
        for (let i = 1; i < response.data.products.length; i++){
            categories[i] = response.data.products[i]["category"];
        }
        categories = [...new Set(categories)]
        
        dispatch({ type: ActionTypes.CATEGORIES, payload: categories })
    }
};