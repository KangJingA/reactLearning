import { ActionTypes } from "../constants/actionTypes";

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
})