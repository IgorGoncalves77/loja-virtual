import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_ERROR } from '../types/productsTypes'

const INITIAL_STATE = {
  products: [],
  error: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PRODUCTS_REQUEST:
      return { ...state, loading: true }
    case PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.products }
    case PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
