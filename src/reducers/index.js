import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import validacionReducer from './validacionReducer';


export default combineReducers({
    products: productsReducer,
    error: validacionReducer
});