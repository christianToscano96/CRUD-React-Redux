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

import clienteAxios from '../config/axios';

//crar un nuevo producto - funcion principal
export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch( newProduct() );

        //insertar a la API
        clienteAxios.post('/books', product)
            .then(res => {
                console.log(res);
                //si se inserta correctamente
                dispatch( addNewProductExito(product) );
            })
            .catch(error => {
                console.log(error);
                //si hay un error
                dispatch( addNewProductError() );
            })

    }
}

export const newProduct = () => ({
    type: AGREGAR_PRODUCTO
})

export const  addNewProductExito = product => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: product
});

export const addNewProductError = error => ({
    type: AGREGAR_PRODUCTO_ERROR
});

//obtener listado de productos de productosReducer (consultar API)
export function getProductsAction() {
    return(dispatch) => {
        dispatch( getProductsStart() );

        //consultar a la api
        clienteAxios.get('/books')
            .then(resp => {
                //console.log(resp);
                dispatch( descargaProductosExitosa(resp.data));
            })
            .catch(error => {
                //console.log(error);
                dispatch(descargaProductosError ());
            })

    }
}

export const getProductsStart = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS
});

//consultar api
export const descargaProductosExitosa = products => ({
    type: DESCARGA_PRODUCTO_EXITOSA,
    payload: products
})

export const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTO__ERROR
})


//funcion que elemina un producto en especifico
export function deleteProductAction( id ) {
    return(dispatch) => {
        dispatch( getProductDelete() )
    }
}

export const getProductDelete = () => ({
    type: OBTENER_PRODUCTO_ELIMINAR
})