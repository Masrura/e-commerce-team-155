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
import useAuth from '../../hook/useAuth';

const GadgetDetails = () => {
    const { gadgetId } = useParams();
    let gadget = useSelector((state) => state.gadget);
    //const { image, title, price, category, description } = product;
    const { user } = useAuth();
    const dispatch = useDispatch();
    useEffect(() => {
        if (gadgetId && gadgetId !== "") {
            fetch(`https://e-commerce-site-9crn.onrender.com/gadget/${gadgetId}`)
                .then(res => res.json())
                .then(data => {
                    dispatch(selectedGadget(data));
                });
        }
        return () => {
            dispatch(removeSelectedProduct());
        };

    }, [gadgetId])
    const updateCart = (e) => {
        gadget.email = user.email;
        fetch("https://e-commerce-site-9crn.onrender.com/cart", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(gadget),
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

        console.log(gadget);
    }
    const updateWishList = (e) => {
        gadget.email = user.email;
        fetch("https://e-commerce-site-9crn.onrender.com/wishlist", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(gadget),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Added To Wishlist');
                }
                else if (result === 11000) {
                    alert('Already Added');
                }
                else{
                    alert('Something Went Wrong. Please try again');
                }

                   
            });

        console.log(gadget);
    }
    return (
       <>
       <Navigation></Navigation>
       <Container className='mt-5'>
           <Row>
               <Col className='col-lg-4 border'>
                    <img src={gadget.image} className="img-fluid" alt=""/>
               </Col>
               <Col className='col-lg-4 border text-start'>
                    <h2 className='text-muted mt-5'> {gadget.name}                    </h2>
                    <h1 className='customFont mt-5'>PRICE : {gadget.price}Tk.</h1>
                    <p className='text-muted mt-5'>{gadget.description}</p>
                        <button type="button" className="btn btn-outline-success mt-5"><span className='me-2' onClick={() => updateCart()}>Add To Cart</span> <FontAwesomeIcon icon={faShoppingBag} /> </button> 
                    <button type="button" onClick={() => updateWishList()} className="btn btn-outline-success mt-5"><span className='me-2'>Add to Wishlist</span> <FontAwesomeIcon icon={faHeart} /> </button>
               </Col>
               <Col className='col-lg-4 border'>
                    <img src={gadget.image} className="img-fluid" alt=""/>
               </Col>
           </Row>
       </Container>
       </>
    );
};

export default GadgetDetails;