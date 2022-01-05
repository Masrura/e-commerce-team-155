import React from 'react';
import { Link } from 'react-router-dom';

const Cloth = ({wear}) => {
    const {name,image,id} = wear;
    return (
        
      <div className="col-lg-3 col-md-6">
        <Link to={`/product/${id}`}>
          <div className="card rounded" >
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p>price:280Tk</p>
              <a href="#" className="btn btn-danger">Ordar Now</a>
            </div>
          </div>
        </Link>
        </div>
    );
};

export default Cloth;