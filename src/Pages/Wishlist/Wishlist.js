import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import Cart from '../Cart/Cart';
import Navigation from '../Shared/Navigation/Navigation';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [control, setControl] = useState(0);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://afternoon-sands-62770.herokuapp.com/wishlist/${user.email}`)
            .then(res => res.json())
            .then(data => setWishlist(data))
    }, [control])
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://afternoon-sands-62770.herokuapp.com/delete-wishlist/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        console.log('delete Successfull');
                        setControl(!control);
                        //this.render();

                    } else {
                        setControl(false);
                        console.log('delete UnSuccessfull');
                    }
                });
            console.log(id);
        }
    };
    return (
        <div>
            <Navigation></Navigation>
            <div className='col-lg-12 mt-5'>
                <h2>Your Wishlist</h2>
                <p>There are {wishlist.length} items in your list</p>
                <div className='container mt-5'>
                    <div className='row'>
                        {
                            wishlist.map(c =>
                                <div className='col-lg-12 d-flex align-items-center border justify-content-between'>
                                    <img className='w-25' src={c.image} alt="" />
                                    <p>{ c.name}</p>

                                    <p>{c.price}</p>
                                    <button class="dropbtn" onClick={() => handleDelete(c._id)}>Delete <FontAwesomeIcon icon={faQrcode} /></button>
                                </div>
                                )
                            
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Wishlist;