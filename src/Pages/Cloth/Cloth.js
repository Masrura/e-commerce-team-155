import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Cloth = ({wear}) => {
    const {name,image,id} = wear;
    return (
        
      <div class="col-lg-2 col-md-6">
        <Link to={`/product/${id}`}>
          <div class="card rounded" >
            <img class="card-img-top" src={image} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p>price:280Tk</p>
              <button type="button" class="btn btn-outline-success"><span className='me-2'>Shop Now</span> <FontAwesomeIcon icon={faShoppingBag} /> </button>
            </div>
          </div>
        </Link>
        </div>
    );
};

export default Cloth;