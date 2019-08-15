import React, { useEffect, Fragment, useRef } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getProductAction , editProductAction } from '../actions/productsActions';
import { validarFormularioAction, validacionExito, validacionError } from '../actions/validacionActions';


const EditProduct = ( { history, match }) => {

    //crear los REF
    const nameRef = useRef('');
    const priceRef = useRef('');

    //Dispatch para ejecutar la acción
    const dispatch = useDispatch();
    //cuando se edite el producto
    const editProduct = (product) => dispatch(editProductAction(product));
    //validacion
    const validarForm = () => dispatch( validarFormularioAction() );
    const exitoValidacion = () => dispatch( validacionExito() );
    const errorValidacion = () => dispatch( validacionError() );


    //obtener el id
    const { id } = match.params;

    useEffect( () => {
        dispatch(getProductAction(id));
    }, [dispatch, id]);

    //Acceder al state
    const product = useSelector( state => state.products.product);
    const error = useSelector(state => state.products.error);

    //cuando carga la APi
    if(!product) return 'Cargando...';

    //funcion para el boton on submit
    const submitEditProduct = e => {
        e.preventDefault();

        //validar el formulario
        validarForm();
        if(nameRef.current.value.trim() === '' || priceRef.current.value.trim() === ''){
            errorValidacion();
            return;
        }
        
        //no hay error
        exitoValidacion();

        //guardar los cambios
        editProduct({ //pasar un objeto con los mismos datos
            id,
            name: nameRef.current.value,
            price: priceRef.current.value
        });

        

        //redireccionar
        history.push('/');
    }

    return ( 
        <Fragment>
             { error 
             ? 
                <div className="font-weight-bold alert alert-danger text-center mt-4">
                    Hubo un error, intenta de nuevo
                </div> 
             : 
             <div className="row justify-content-center mt-5">
                <dic className="col-md-8">
                    <div className="card px-4">
                        <div className="card-body">
                            <h2 className="text-center">Editar Producto</h2>
                        </div>

                        <form 
                            onSubmit={submitEditProduct}
                        >
                            <div className="form-group">
                                <label>Titulo</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Titulo"
                                    defaultValue={product.name}
                                    ref={nameRef}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Precio"
                                    defaultValue={product.price}
                                    ref={priceRef}
                                />
                            </div>

                            <button type="submit" className="btn btn-info rounded-pill font-weight text-uppercase d-block w-100 mb-4">
                                Guardar Cambios
                            </button>
                        </form>
                    
                    </div>
                </dic>
            </div>
            }
        
        </Fragment>
     );
}
 
export default EditProduct;