import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { setCart } from '../../redux/actions/productsActions';
import Navigation from '../Shared/Navigation/Navigation';
import CartDetails from './CartDetails';

const Cart = () => {
    const [control, setControl] = useState(false);
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const { user } = useAuth();
   
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://afternoon-sands-62770.herokuapp.com/deleteCart/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        console.log('delete Successfull');
                        setControl(!control);
                    } else {
                        setControl(false);
                        console.log('delete UnSuccessfull');
                    }
                });
            console.log(id);
        }
    };
    useEffect(() => {
        fetch(`https://afternoon-sands-62770.herokuapp.com/cart/${user.email}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setCart(data));
            });
        // calc(cart);
    }, [user, control])


    return (
        <>
            <Navigation></Navigation>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='container mt-5'>
                            {
                                cart.length === 0 ?
                                   
                                    <h1>Cart is empty</h1>
                                    :
                                    <div className='row'>
                                        {cart.map(product => <CartDetails handleDelete={handleDelete} product={product} key={product._id} />)}
                                    </div>
                            }
                        </div>
                        <Link to={`/place-order`}>
                            <button type="button" className="btn btn-outline-success"><span className='me-2'>Check out</span> <FontAwesomeIcon icon={faSignInAlt} /> </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Cart;