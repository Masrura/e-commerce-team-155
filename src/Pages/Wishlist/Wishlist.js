import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';

const Wishlist = () => {
    return (
        <div>
            <Navigation></Navigation>
              <div className='col-lg-12 mt-5'>
                  <h2>Your Wishlist</h2>
                  <p>There are 0 items in your list</p>
                        <div className='container mt-5'>
                                <div className='row'>
                                    <div className='col-lg-12 d-flex align-items-center border justify-content-between'>
                                            <img className='w-25' src='http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg'/>
                                            <p>	Yummy Yummy</p>

                                            <p>$ 1000</p>
                                            <button class="dropbtn">Delete <FontAwesomeIcon icon={faQrcode}/></button>
                            </div>
                                </div>
                               
                        </div>
                </div>
        </div>
    );
};

export default Wishlist;