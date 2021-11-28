import { FILTERS_REQUEST, FILTERS_SUCCESS, FILTERS_ERROR } from '../types/productsTypes'

const INITIAL_STATE = {
  filter: {},
  error: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FILTERS_REQUEST:
      return { ...state, loading: true }
    case FILTERS_SUCCESS:
      return { ...state, loading: false, filter: action.filter }
    case FILTERS_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
