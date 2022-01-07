import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectedGadget,
    removeSelectedProduct,
} from "../../redux/actions/productsActions";
import "./../Details/Details.css";
import { Container, Rating } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag,faHeart } from '@fortawesome/free-solid-svg-icons';

const GadgetDetails = () => {
    const { gadgetId } = useParams();
    let gadget = useSelector((state) => state.gadget);
    //const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    useEffect(() => {
        if (gadgetId && gadgetId !== "") {
            fetch(`https://damp-gorge-65015.herokuapp.com/gadget/${gadgetId}`)
                .then(res => res.json())
                .then(data => {
                    dispatch(selectedGadget(data));
                });
        }
        return () => {
            dispatch(removeSelectedProduct());
        };

    }, [gadgetId])
    const updateCart = () => {

    }
    return (
       <>
       <Navigation></Navigation>
       <Container className='mt-5'>
           <Row>
               <Col className='col-lg-4 border'>
                    <img src={gadget.image} className="img-fluid"/>
               </Col>
               <Col className='col-lg-4 border text-start'>
                    <h2 className='text-muted mt-5'> {gadget.name}                    </h2>
                    <h1 className='customFont mt-5'>PRICE : {gadget.price}Tk.</h1>
                    <p className='text-muted mt-5'>{gadget.description}</p>
                    <button type="button" className="btn btn-outline-success mt-5"><span className='me-2'>Add To Cart</span> <FontAwesomeIcon icon={faShoppingBag} /> </button> 
                    <button type="button" className="btn btn-outline-success mt-5"><span className='me-2'>Add To Wishlist </span> <FontAwesomeIcon icon={faHeart} /> </button> 
                    <p className='m-2'>Cetagory : {gadget.category}</p>
               </Col>
               <Col className='col-lg-4 border'>
                    <img src={gadget.image} className="img-fluid"/>
               </Col>
           </Row>
       </Container>
       </>
    );
};

export default GadgetDetails;