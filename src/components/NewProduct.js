import React, { useState } from 'react';

//redux
import { createNewProductAction } from '../actions/productsActions';
import { validarFormularioAction, validacionExito, validacionError } from '../actions/validacionActions';
import { useDispatch, useSelector } from 'react-redux';

const NewProduct = () => {

    //state
    const [ name, getName ] = useState('');
    const [ price, getPrice ] = useState('');

    //crar nuevo producto
    const dispatch = useDispatch();
    const addProduct = (product) => dispatch(createNewProductAction(product) );
    const validarForm = () => dispatch( validarFormularioAction() );
    const exitoValidacion = () => dispatch( validacionExito() );
    const errorValidacion = () => dispatch( validacionError() );

    // addnew product
    const submitNewProduct = e => {
        e.preventDefault();

        validarForm();


        //validar el formulario
        if(name.trim() === '' || price.trim() === '') {
            errorValidacion();
            return;
        }
        //si todo sale bien
        exitoValidacion();

        //si pasa la validacion
        addProduct({
            name, price
        });
        //crear el nuevo producto
    }

    return ( 
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
                        <form onSubmit={submitNewProduct}>
                            <div className="form-group">
                                <label>Nombre Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control  " 
                                    placeholder="Nombre Libro" 
                                    valur={name}
                                    onChange={e => getName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control " 
                                    placeholder="Precio Libro" 
                                    value={price}
                                    onChange={e => getPrice(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-info rounded-pill font-weight-bold text-uppercase d-block w-100">Agregar</button>

                        </form>
        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewProduct;