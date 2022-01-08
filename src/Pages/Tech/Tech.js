import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Tech = ({tech}) => {
  const {name,price,image,id} = tech;
  const myStyle = {
    height : "200px"
  }
    return (
     
      <div className="col-lg-3 col-md-6">
          <div className="card rounded" >
            <img className="card-img-top" style={myStyle} src={image} alt="Card image cap"/>
            <div className="card-body">
              <p className="card-title">{name}</p>
              <p>price:{price}</p>
        <Link to={`/gadget/${id}`}>
              <button type="button" className="btn btn-outline-success"><span className='me-2'>Shop Now</span> <FontAwesomeIcon icon={faShoppingBag} /> </button>
          </Link>

            </div>
          </div>
        </div>

    );
};

export default Tech;