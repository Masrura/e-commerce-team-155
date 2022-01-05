import React from 'react';

const Tech = ({tech}) => {
  const {name,price,image} = tech;
  const myStyle = {
    height : "290px"
  }
    return (
     
        <div class="col-lg-3 col-md-6">
          <div class="card rounded" >
            <img class="card-img-top" style={myStyle} src={image} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p>price:{price}</p>
              <a href="#" class="btn btn-danger">Ordar Now</a>
            </div>
          </div>
        </div>

    );
};

export default Tech;