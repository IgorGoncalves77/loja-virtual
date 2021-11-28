import { 
  CATEGORIES_REQUEST, 
  CATEGORIES_SUCCESS, 
  CATEGORIES_ERROR, 
  PRODUCTS_REQUEST, 
  PRODUCTS_SUCCESS, 
  PRODUCTS_ERROR, 
  FILTERS_REQUEST, 
  FILTERS_SUCCESS, 
  FILTERS_ERROR,
} from '../types/productsTypes'

import { getCategories, getProductsByCategory, getFiltersByCategory } from "../../api";


//CATEGORIAS
export const categoriesRequest = () => {
  return (dispatch) => {
    getCategories()
      .then(data => dispatch(categoriesSuccess(data)))
      .catch(error => dispatch(categoriesError(error)))

    return {type: CATEGORIES_REQUEST}
  }
}

export const categoriesSuccess = (categories) => ({
  type: CATEGORIES_SUCCESS,
  categories,
})

export const categoriesError = error => ({
  type: CATEGORIES_ERROR,
  error,
})


//PRODUTOS POR CATEGORIA
export const productsRequest = (category) => {
  return (dispatch) => {
    getProductsByCategory(category)
      .then(data => dispatch(productsSuccess(data)))
      .catch(error => dispatch(productsError(error)))

    return {type: PRODUCTS_REQUEST}
  }
}

export const productsSuccess = (products) => ({
  type:   PRODUCTS_SUCCESS, 
  products,
})

export const productsError = error => ({
  type: PRODUCTS_ERROR,
  error,
})


//FILTROS POR PRODUTOS
export const filterRequest = (category) => {
  return (dispatch) => {
    getFiltersByCategory(category)
      .then(data => dispatch(filterSuccess(data)))
      .catch(error => dispatch(filterError(error)))

    return {type: FILTERS_REQUEST}
  }
}

export const filterSuccess = (filter) => ({
  type: FILTERS_SUCCESS,
  filter,
})

export const filterError = error => ({
  type: FILTERS_ERROR,
  error,
})
