import React, { useEffect } from 'react';

import { Container, Rating } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faHeart } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hook/useAuth';
import {
    selectedProduct,
    removeSelectedProduct,
} from "./../../redux/actions/productsActions";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProductDetails = () => {
    const { user } = useAuth();
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId && productId !== "") {
            fetch(`https://damp-gorge-65015.herokuapp.com/shirt/${productId}`)
                .then(res => res.json())
                .then(data => {
                    dispatch(selectedProduct(data));
                });
        }
        return () => {
            dispatch(removeSelectedProduct());
        };

    }, [productId])

    const { image, name, description, price, category } = product;


    const updateCart = (e) => {
        product.email = user.email;
        fetch("https://damp-gorge-65015.herokuapp.com/cart", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product),
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

        console.log(product);
    }
    const updateWishList = (e) => {
        product.email = user.email;
        fetch("https://damp-gorge-65015.herokuapp.com/wishlist", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product),
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

        console.log(product);
    }

    return (
        <>
            <Navigation></Navigation>
            <Container className='mt-5'>
                <Row>
                    <Col className='col-lg-4 border'>
                        <img src={image} className="img-fluid" alt="" />
                    </Col>
                    <Col className='col-lg-4 border text-start'>
                        <h2 className='text-muted mt-5'> {name}                    </h2>
                        <h1 className='customFont mt-5'>PRICE : {price}Tk.</h1>
                        <p className='text-muted mt-5'>{description}</p>
                        <button type="button" onClick={() => updateCart()} className="btn btn-outline-success mt-5"><span className='me-2'>Add To Cart</span> <FontAwesomeIcon icon={faShoppingBag} /> </button>
                        <button type="button" onClick={() => updateWishList()} className="btn btn-outline-success mt-5"><span className='me-2'>Add to Wishlist</span> <FontAwesomeIcon icon={faHeart} /> </button>
                       
                    </Col>
                    <Col className='col-lg-4 border'>
                        <img src={image} className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProductDetails;