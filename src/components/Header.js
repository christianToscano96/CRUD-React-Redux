import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';


const Header = () => {
    return ( 
            <nav className="navbar navbar-expand-lg navbar-dark justify-content-between">
                <div className="container">
                    <h1>
                        <Link to={'/'} className="text-secondary">
                            CRUD - React, Redux Hooks, Rest API & Axios
                        </Link>
                    </h1>

                    <Button 
                        descrip="Add Product &#43;" 
                        link='/products/new'
                        className="btn btn-info rounded-pill nuevo-post d-block d-md-inline-block"
                    />                     
                </div>          
            </nav>
     );
}
 
export default Header;