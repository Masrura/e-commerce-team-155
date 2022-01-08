import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Cloth = ({wear}) => {
    const {name,image,id} = wear;
    return (
        
      <div className="col-lg-3 col-md-6">
          <div className="card rounded" >
            <img className="card-img-top img-fluid"  src={image} alt="Card image cap"/>
            <div className="card-body">
              <p className="card-title">{name}</p>
              <p>price:280Tk</p>
        <Link to={`/product/${id}`}>
              <button type="button" className="btn btn-outline-success"><span className='me-2'>Shop Now</span> <FontAwesomeIcon icon={faShoppingBag} /> </button>
        </Link>
            </div>
          </div>
        </div>
    );
};

export default Cloth;