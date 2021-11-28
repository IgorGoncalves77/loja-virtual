import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_ERROR } from '../types/productsTypes'

const INITIAL_STATE = {
  categories: [],
  error: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CATEGORIES_REQUEST:
      return { ...state, loading: true }
    case CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.categories }
    case CATEGORIES_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
