import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import React from 'react';

const Cloth = ({wear}) => {
    const {name,image} = wear;
    return (
        
        <div class="col-lg-2 col-md-6">
          <div class="card rounded" >
            <img class="card-img-top" src={image} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p>price:280Tk</p>
              <button type="button" class="btn btn-outline-success"><span className='me-2'>Shop Now</span> <FontAwesomeIcon icon={faShoppingBag} /> </button>
            </div>
          </div>
        </div>
    );
};

export default Cloth;