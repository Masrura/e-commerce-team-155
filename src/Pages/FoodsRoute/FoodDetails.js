import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faHeart } from '@fortawesome/free-solid-svg-icons';

const FoodDetails = () => {
    const [food, setFood] = useState({});
    const { foodId } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://e-commerce-site-9crn.onrender.com/food/${foodId}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [foodId]);
    const updateCart = (e) => {
        food.email = user.email;
        fetch("https://e-commerce-site-9crn.onrender.com/cart", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(food),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Added To Cart');

                }
                else if (result.modifiedCount) {
                    alert('One more product added');
                }
                else
                    alert('Something Went Wrong');
            });

        console.log(food);
    }
    const updateWishList = (e) => {
        food.email = user.email;
        fetch("https://e-commerce-site-9crn.onrender.com/wishlist", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(food),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Added To Wishlist');
                }
                else if (result === 11000) {
                    alert('Already Added');
                }
                else {
                    alert('Something Went Wrong. Please try again');
                }
            });

        console.log(food);
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container className='mt-5'>
                <Row>
                    <Col className='col-lg-4 border'>
                        <img src={food.image} className="img-fluid" alt="" />
                    </Col>
                    <Col className='col-lg-4 border text-start'>
                        <h2 className='text-muted mt-5'> {food.name}                    </h2>
                        <h1 className='customFont mt-5'>PRICE : {food.price}Tk.</h1>
                        <p className='text-muted mt-5'>{food.description}</p>
                        <button type="button" onClick={() => updateCart()} className="btn btn-outline-success mt-5"><span className='me-2'>Add To Cart</span> <FontAwesomeIcon icon={faShoppingBag} /> </button>
                        <button type="button" onClick={() => updateWishList()} className="btn btn-outline-success mt-5"><span className='me-2'>Add to Wishlist</span> <FontAwesomeIcon icon={faHeart} /> </button>

                    </Col>
                    <Col className='col-lg-4 border'>
                        <img src={food.image} className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodDetails;