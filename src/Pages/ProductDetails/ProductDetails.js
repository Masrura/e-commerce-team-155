import React, { useEffect } from 'react';

import { Container, Rating } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag,faHeart } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hook/useAuth';
import {
    selectedProduct,
    removeSelectedProduct,
} from "./../../redux/actions/productsActions";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProductDetails = () => {
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

        const {image,name,description,price,category} = product;


        const updateCart = (e) => {
            // e.preventDefault();
            // const name = nameRef.current.value;
            // const price = priceRef.current.value;
            // const description = descriptionRef.current.value;
            // const image = urlRef.current.value;
            // const newJewelrie = { name,price,description,image };
    
            // fetch('https://quiet-island-22071.herokuapp.com/jewelries',{
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body : JSON.stringify(newJewelrie)
            // })
            // .then(res => res.json())
            //     .then(data => {
            //        console.log(data)
            //     })
            
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
                    <button type="button" onClick={() => updateCart(product)} className="btn btn-outline-success mt-5"><span className='me-2'>Add To Cart</span> <FontAwesomeIcon icon={faShoppingBag} /> </button> 
                    <p className='h5 mt-5'>Cetagory : {category} <span><FontAwesomeIcon icon={faHeart}/></span></p>
               </Col>
               <Col className='col-lg-4 border'>
                    <img src={image} className="img-fluid"/>
               </Col>
           </Row>
       </Container>
       </>
    );
};

export default ProductDetails;