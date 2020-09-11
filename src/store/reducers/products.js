import { SET_PRODUCTS, SET_LAYOUT } from "../actions/products";

let PRODUCTS = [];
let LAYOUT = [
  { type: 'threewide', active: true },
  { type: 'twowide', active: false },
];

const initialState = {
  products: PRODUCTS,
  layout: LAYOUT
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products };
    case SET_LAYOUT:
      return { ...state, layout: action.layout };
    default:
      return state;
  }
};

export default state;
