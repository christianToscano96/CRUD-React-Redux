import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';


const Header = () => {
    return ( 
            <nav className="navbar navbar-expand-lg navbar-dark justify-content-between">
                <div className="container">
                    <div className="col-8 ">
                        <h1>
                            <Link to={'/'} className="text-secondary">
                                CRUD - React, Redux Hooks, Rest API & Axios
                            </Link>
                        </h1>
                    </div>

                    <div className=" d-flex  ">
                        <Button 
                            descrip="Add Product &#43;" 
                            link='/products/new'
                            className="btn btn-info rounded-pill nuevo-post d-block "
                        />
                        <Button 
                            descrip="Products" 
                            link='/'
                            className="btn btn-info rounded-pill nuevo-post d-block  ml-2 px-4"
                        /> 
                    </div>                    
                </div>          
            </nav>
     );
}
 
export default Header;