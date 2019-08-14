import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({descrip, type, link, className}) => {
    return (
    <Link to={link} className={className}>  
             {descrip}    
    </Link>
     );
}
 
export default Button;