import React from 'react';
import { Link } from 'react-router-dom';

const Tech = ({tech}) => {
  const {name,price,image,id} = tech;
  const myStyle = {
    height : "290px"
  }
    return (
     
      <div className="col-lg-3 col-md-6">
        <Link to={`/gadget/${id}`}>
          <div className="card rounded" >
            <img className="card-img-top" style={myStyle} src={image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p>price:{price}</p>
              <a href="#" className="btn btn-danger">Ordar Now</a>
            </div>
          </div>
          </Link>
        </div>

    );
};

export default Tech;