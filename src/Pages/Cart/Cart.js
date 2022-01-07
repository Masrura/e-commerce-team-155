import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField } from '@mui/material';
import React from 'react';
import useAuth from '../../hook/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import CartDetails from './CartDetails';

const Cart = () => {
    
    
    return (
        <>
            <Navigation></Navigation>
            
            <div className='container'>
               <div className='row'>
                    <div className='col-lg-6'>
                        <div className='container mt-5'>
                                <div className='row'>
                                    {/* {cart.map(product=><CartDetails product={product} key={product._id}/>)} */}
                                </div>
                               
                        </div>
                </div>

                  <div className='col-lg-6'>
                    <div className='container mt-5'>
                            <TextField
                                disabled
                                label="Subtotal"
                                defaultValue="$12.31"
                                sx={{m : 3}}
                                /><br/>
                            <TextField
                                disabled
                                label="Shipping"
                                defaultValue="Free"
                                sx={{m : 3}}
                                /><br/>
                            <TextField
                                disabled
                                label="Estimate for"
                                defaultValue="United Kingdom"
                                sx={{m : 3}}
                                /><br/>
                            <TextField
                                disabled
                                label="Total"
                                defaultValue="$12.31"
                                sx={{m : 3}}
                                /><br/>
                        <button type="button" className="btn btn-outline-success"><span className='me-2'>Check out</span> <FontAwesomeIcon icon={faSignInAlt} /> </button>
                            
                        </div>

                  </div>
                </div>
            </div>

        </>
    );
};

export default Cart;