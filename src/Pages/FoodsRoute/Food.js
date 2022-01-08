import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({food}) => {
  const {name,price,image,_id} = food;
  const myStyle = {
    height : "200px"
  }
    return (
     
      <div class="col-lg-3 col-md-6">
          <div class="card rounded" >
            <img class="card-img-top" style={myStyle} src={image} alt="Card_image_cap"/>
            <div class="card-body">
              <p class="card-title">{name}</p>
              <p>price:{price}</p>
          <Link to={`/food/${_id}`}>

              <button type="button" className="btn btn-outline-success"><span className='me-2'>Shop Now</span> <FontAwesomeIcon icon={faShoppingBag} /> </button>
          </Link>
            </div>
          </div>
        </div>

    );
};

export default Food;