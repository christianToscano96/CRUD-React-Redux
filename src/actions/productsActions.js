import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
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
})