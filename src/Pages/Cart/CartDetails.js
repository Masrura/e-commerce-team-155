import { Button } from '@mui/material';
import React from 'react';

const CartDetails = ({ product, handleDelete}) => {
    return (
        <div className='col-lg-12 d-flex align-items-center border justify-content-between'>
                        <img className='w-25' src={product.image} alt=""/>
                        <p>	{product.name}</p>
            <p>{product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <Button style={{ color: 'white' }}
                onClick={() => handleDelete(product._id)}
                className="btn bg-danger p-2"
            >
                Delete
            </Button>
        </div>
    );
};

export default CartDetails;