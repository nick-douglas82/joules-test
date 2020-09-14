import { SET_LAYOUT } from "../actions/layout";

let LAYOUT = [
  { id: 1, type: 'twowide', class: 'layout__2x2', active: false },
  { id: 2, type: 'threewide', class: 'layout__3x3', active: true },
];

const initialState = LAYOUT;

const state = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAYOUT:
      const layouts = initialState.map((layout) => {
          return {
            id: layout.id,
            type: layout.type,
            class: layout.class,
            active: layout.id === action.layout
          }
      })
      return layouts;
    default:
      return state;
  }
};

export default state;
