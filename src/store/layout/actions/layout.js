export const SET_LAYOUT = 'SET_LAYOUT';

export const changeLayout = (layout) => {
  return dispatch => {
    dispatch({ type: SET_LAYOUT, layout: layout });
  }
}
