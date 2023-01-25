import React, { useEffect, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import CartDetails from '../Cart/CartDetails';
import Navigation from '../Shared/Navigation/Navigation';
const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const [show, setShow] = useState(false);
    let AllahPLease;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://e-commerce-site-9crn.onrender.com/order/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    //console.log(orders);
    const changeColor = (product) => {
        console.log('clicked', product);
        setSingleProduct(product);
       console.log('dcsc', singleProduct);
        handleShow();
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className='container mt-5'>
                {
                    orders.length === 0 ?
                        <h1>List is Empty</h1>
                        :
                        <div className='row'>
                            {orders.map(order => 
                                <div className='col-lg-12 d-flex align-items-center border justify-content-between' style={{ cursor: 'pointer'}} onClick={()=>changeColor(order)}
>
                                    {/* <img className='w-25' src={product.image} alt="" /> */}
                                    <p>Number of Item:	{order.orderedProducts.length}</p>
                                    <p>Amount: {order.amount}</p>
                                    <p>Status: {order.status}</p>
                                </div>
                                )}
                        </div>
                }


            </div>
            <Modal show={show} onHide={handleClose}>
                
                <Modal.Header closeButton>
                    <Modal.Title style={{fontSize:'18px'}}>Order no: {singleProduct._id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        
                        singleProduct?.orderedProducts?.map(product => <CartDetails product={product} key={product._id} />)
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MyOrders;