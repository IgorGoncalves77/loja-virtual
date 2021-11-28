import { combineReducers } from 'redux';
import { reducer as categoriesReducer } from './showCategoriesReducer'
import { reducer as productsReducer } from './showProductsReducer'
import { reducer as filtersReducer } from './showFiltersReducer'

export default combineReducers({
  categoriesReducer,
  productsReducer,
  filtersReducer,
});