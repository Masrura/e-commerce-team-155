import React from 'react';

const CartDetails = ({product}) => {
    return (
        <div className='col-lg-12 d-flex align-items-center border justify-content-between'>
                        <img className='w-25' src={product.image}/>
                        <p>	{product.name}</p>
                <p>$ 1000</p>
        </div>
    );
};

export default CartDetails;