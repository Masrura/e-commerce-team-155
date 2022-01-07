import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../hook/useAuth';
import { setCart } from '../../redux/actions/productsActions';
import Navigation from '../Shared/Navigation/Navigation';
import CartDetails from './CartDetails';

const Cart = () => {
    const [control, setControl] = useState(false);
    const [s, setS] = useState(0);

    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const { user } = useAuth();
    let sum, delivery, total;
    const calc = (product) => {
        console.log('function called', product);
        sum = 0;
        delivery = 100;
        total = 0;
        product.map((pro) =>
            sum = sum + (pro.quantity * pro.price)
        )
        total = sum + delivery
        console.log('total', total, 'sum', sum);
    }
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteCart/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        console.log('delete Successfull');
                       // setControl(!control);
                        this.render();
                        
                    } else {
                        setControl(false);
                        console.log('delete UnSuccessfull');
                    }
                });
            console.log(id);
        }
    };
    useEffect(() => {
        fetch(`http://localhost:5000/cart/${user.email}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setCart(data));
            });
        calc(cart);
    }, [user,control])

    
    return (
        <>
            <Navigation></Navigation>
            <div className='container'>
               <div className='row'>
                    <div className='col-lg-6'>
                        <div className='container mt-5'>
                                <div className='row'>
                                {cart.map(product => <CartDetails handleDelete={handleDelete} product={product} key={product._id}/>)}
                                </div>
                        </div>
                </div>

                  <div className='col-lg-6'>
                        <div className='container mt-5'>
                            {calc(cart)}
                            <TextField
                                id="sum"
                                label="Subtotal"
                                defaultValue={sum.toString()}
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
                                /><br/>
                            <TextField
                                
                                label="Estimate for"
                                defaultValue="Bangladesh"
                                sx={{ m: 3 }}
                                InputProps={{
                                    readOnly: true,
                                }}
                                /><br/>
                            <TextField
                                
                                label="Total"
                                defaultValue={total.toString()}
                                sx={{ m: 3 }}
                                InputProps={{
                                    readOnly: true,
                                }}
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