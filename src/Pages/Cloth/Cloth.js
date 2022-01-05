import React from 'react';

const Cloth = ({wear}) => {
    const {name,image} = wear;
    return (
        
        <div class="col-lg-3 col-md-6">
          <div class="card rounded" >
            <img class="card-img-top" src={image} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p>price:280Tk</p>
              <a href="#" class="btn btn-danger">Ordar Now</a>
            </div>
          </div>
        </div>
    );
};

export default Cloth;