export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_LAYOUT = 'SET_LAYOUT';

export const getProducts = () => {
  return async dispatch => {
    const response = await fetch('https://fakestoreapi.com/products');
    const resData = await response.json();
    let products = resData;
    dispatch({ type: SET_PRODUCTS, products: products });
  }
}
