import { SET_PRODUCTS } from "../actions/products";

let PRODUCTS = [];

const initialState = {
  products: PRODUCTS,
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products };
    default:
      return state;
  }
};

export default state;
