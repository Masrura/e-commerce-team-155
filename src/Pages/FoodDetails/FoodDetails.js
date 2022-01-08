import React, { useEffect } from 'react';
import { Container, Rating } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag,faHeart } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hook/useAuth';
import {
    selectedFood,
    removeSelectedProduct,
} from "./../../redux/actions/productsActions";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const FoodDetails = () => {
    const { foodId } = useParams();
    let food = useSelector((state) => state.food);
    const dispatch = useDispatch();
    useEffect(() => {
        if (foodId && foodId !== "") {
            fetch(`https://damp-gorge-65015.herokuapp.com/foods/${foodId}`)
                .then(res => res.json())
                .then(data => {
                    dispatch(selectedFood(data));
                });
        }
        return () => {
            dispatch(removeSelectedProduct());
        };

        }, [foodId])
        const {name,price,description,category } = food
        const updateCart = () => {

        }
    return (
        <>
        <Navigation></Navigation>
        <Container className='mt-5'>
            <Row>
                <Col className='col-lg-4 border'>
                     <img src={image} className="img-fluid"/>
                </Col>
                <Col className='col-lg-4 border text-start'>
                     <h2 className='text-muted mt-5'> {name}                    </h2>
                     <h1 className='customFont mt-5'>PRICE : {price}Tk.</h1>
                     <p className='text-muted mt-5'>{description}</p>
                     <button type="button" onClick={() => updateCart(food)} className="btn btn-outline-success mt-5"><span className='me-2'>Add To Cart</span> <FontAwesomeIcon icon={faShoppingBag} /> </button> 
                     <button type="button" className="btn btn-outline-success mt-5"><span className='me-2'>Add To Wishlist </span> <FontAwesomeIcon icon={faHeart} /> </button> 
                     <p className='m-2'>Cetagory : {category}</p>
                </Col>
                <Col className='col-lg-4 border'>
                     <img src={image} className="img-fluid"/>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default FoodDetails;