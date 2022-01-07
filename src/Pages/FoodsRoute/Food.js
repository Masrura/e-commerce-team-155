import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Food = ({food}) => {
  const {name,price,image} = food;
  const myStyle = {
    height : "200px"
  }
    return (
     
        <div className="col-lg-2 col-md-6">
          <div className="card rounded" >
            <img className="card-img-top" style={myStyle} src={image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p>price:{price}</p>
              <button type="button" className="btn btn-outline-success"><span className='me-2'>Shop Now</span> <FontAwesomeIcon icon={faShoppingBag} /> </button>

            </div>
          </div>
        </div>

    );
};

export default Food;