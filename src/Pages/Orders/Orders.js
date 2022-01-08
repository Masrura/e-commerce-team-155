import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import useAuth from '../../hook/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const Orders = (props) => {
    const cart = useSelector((state) => state.cart.cart);
    const [control, setControl] = useState(false);
    //const dispatch = useDispatch();
    const { user } = useAuth();
    let total = 0;
    let subtotal = 0;
    let orderedProducts = [];
    const navigate = useNavigate();
    for (const product of cart) {
        total = total + product.price * product.quantity;
        orderedProducts.push(product)
        //totalQuantity = totalQuantity + product.quantity;
    }
    subtotal = total + 100;
    const order = {
        orderedProducts: orderedProducts,
        amount: subtotal,
        orderedBy: user.email,
        status: 'Not Delivered'
    }
    const placeOrder = () => {

        fetch("http://damp-gorge-65015.herokuapp.com/order", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Ordered Placed');
                }
            });
        
        navigate('/Home');

    }

    //console.log('final order', order);
    return (
        <div>
            <Navigation></Navigation>
            <div className='container mt-5'>
                {/* {calc(cart)} */}
                <TextField
                    id="sum"
                    label="Subtotal"
                    defaultValue={total.toString()}
                    sx={{ m: 3 }}
                    InputProps={{
                        readOnly: true,
                    }}
                /><br />
                <TextField

                    label="Shipping"
                    defaultValue="100"
                    sx={{ m: 3 }}
                    InputProps={{
                        readOnly: true,
                    }}
                /><br />
                <TextField

                    label="Estimate for"
                    defaultValue="Bangladesh"
                    sx={{ m: 3 }}
                    InputProps={{
                        readOnly: true,
                    }}
                /><br />
                <TextField

                    label="Total"
                    defaultValue={subtotal.toString()}
                    sx={{ m: 3 }}
                    InputProps={{
                        readOnly: true,
                    }}
                /><br />
                <button type="button" className="btn btn-outline-success" onClick={placeOrder}><span className='me-2'>Place Order </span> <FontAwesomeIcon icon={faSignInAlt} /> </button>

            </div>
        </div>
    );
};

export default Orders;