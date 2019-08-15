import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTO_EXITOSA,
    DESCARGA_PRODUCTO__ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCT_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_EXITO,
    PRODUCTO_EDITAR_ERROR,
    COMENZAR_EDICION_PRODUCTO,
    EDICION_PRODUCTO_EXITO,
    EDICION_PRODUCTO_ERROR
} from '../types';
import Swal from 'sweetalert2';

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

        //Eliminar desde la api
        clienteAxios.delete(`/books/${id}`)
            .then(resp => {
                //console.log(resp);
                dispatch(deleteProductExito(id));
            })
            .catch(error => {
                //console.log(error);
                dispatch(deleteProductError());
            })
    }
}

export const getProductDelete = () => ({
    type: OBTENER_PRODUCTO_ELIMINAR
});

export const deleteProductExito = id => ({
    type: ELIMINAR_PRODUCTO_EXITO,
    payload: id
});

export const deleteProductError = () => ({
    type: ELIMINAR_PRODUCT_ERROR
});


//funcion para obtener el producto a editar
export function getProductAction(id) {
    return(dispatch) => {
        dispatch(getEditProductsAction() );

        //obtener el producto de la API
        clienteAxios.get(`/books/${id}`)
            .then(resp => {
                console.log(resp.data);
                dispatch(getProductEditExito(resp.data) );
            })
            .catch(error => {
                console.log(error);
                dispatch(getProductEditError() );
            })
    }
}

export const getEditProductsAction = (id) => ({
    type: OBTENER_PRODUCTO_EDITAR
});

export const getProductEditExito = product => ({
    type: PRODUCTO_EDITAR_EXITO,
    payload: product
});

export const getProductEditError = () => ({
    type: PRODUCTO_EDITAR_ERROR
});


//MODIFICA UN PRODUCTO EN LA API Y STATE
export function editProductAction(product) {
    return(dispatch) => {
        dispatch(startEditProduct() );

        //consultar la api y enviar un metodo put para actualizar
        clienteAxios.put(`/books/${product.id}`, product) 
            .then(resp => {
                //console.log(resp);
                dispatch(editProductExito(resp.data) );
                Swal.fire(
                    'Almacenado',
                    'El Producto se actualizó correctamente',
                    'success'
                )
            })
            .catch(error => {
                //console.log(error);
                dispatch(editProductError() );
            })
    }
}

export const startEditProduct = () => ({
    type: COMENZAR_EDICION_PRODUCTO
});

export const editProductExito = product => ({
    type: EDICION_PRODUCTO_EXITO,
    payload: product
});

export const editProductError = () => ({
    type: EDICION_PRODUCTO_ERROR
});