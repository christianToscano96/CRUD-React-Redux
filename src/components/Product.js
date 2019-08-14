import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

//redux
import { useDispatch } from 'react-redux';
import {deleteProductAction} from '../actions/productsActions';

const Product = ({product}) => {

    //dispatch para ejecutar las acciones
    const dispatch = useDispatch();
   
    const confirmProductDelete = id => {

        //preguntar al usuario
        Swal.fire({
            title: '¿Etás seguro?',
            text: "El elemento eliminado no se puede recuperar!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#8e44ad',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Eliminado',
                'El elemento fue eliminado exirtosamente.',
                'success'
              )
               console.log(id);
              dispatch(deleteProductAction() );
            }
          })
    }

    return ( 
        <tr className="pl-2">
            <td >{product.name}</td>
            <td><span className="font-weight">$ {product.price}</span></td>
            <td className="acciones ">
                <Link 
                    to={`/products/edit/${product.id}`}
                    className="btn btn-outline-info px-4"
                >
                    Editar
                </Link>

                <button
                   className="btn btn-outline-danger ml-2"
                   onClick={ () => confirmProductDelete(product.id)  }
                >
                    Eliminar
                </button>
            </td>
        </tr>
     );
}
 
export default Product;