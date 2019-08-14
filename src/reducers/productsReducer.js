import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTO_EXITOSA,
    DESCARGA_PRODUCTO__ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCT_ERROR
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
        case COMENZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: true
            }    
        case DESCARGA_PRODUCTO_EXITOSA:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: false
            }  
        case DESCARGA_PRODUCTO__ERROR: 
            return {
                ...state,
                products: [],
                loading: false,
                error: true
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                error: null
            }
        case ELIMINAR_PRODUCTO_EXITO:
            return {
                ...state,
                error: null,
                products: state.products.filter(product => product.id !== action.payload)
            }
        case ELIMINAR_PRODUCT_ERROR:
            return{
                ...state,
                error: true
            }
        default: 
            return state;              
    }
}