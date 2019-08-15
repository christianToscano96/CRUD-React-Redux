import React, { useEffect } from 'react';
import Spinner from './spinner/Spinner';
import  Product from './Product';

//axios
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../actions/productsActions';

const Products = () => {

    //mandar a llamar la accion principal para retornar los productos
    const dispatch = useDispatch();

    useEffect( () => {
        //productos cuando el componente este listo
        const loadProducts = () => dispatch(getProductsAction() );
        loadProducts();
    }, []);

    //acceder al state
    const loading = useSelector(state => state.products.loading);
    const error = useSelector( state => state.products.error);
    const products = useSelector( state => state.products.products);

    return (
        <React.Fragment>
            {error 
                ? 
                <div className="font-wight-bold alert alert-danger text-center mt-5">Hubo un error...</div>
                : null }
               
                    { loading ? <Spinner/> : null} 
                    <h2 className="text-center my-5">Listado de Productos</h2>

                    <table className="table table-striped .table-hover shadow text-center">
                        <thead className="bg-info table-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Acciones</th>
                            </tr>   
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <Product
                                key={product.id}
                                    product={product}
                                />
                            ))}
                        </tbody>
                    </table>                   
        </React.Fragment>    
    );
}
 
export default Products;