import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

//cada reducer tiene su propio state
const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                error: null
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                error: null,
                products: [...state.products, action.payload]
            } 
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                error:true              
            } 
        default: return state;              
    }
}