import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const Sideshow = () => {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-sands-62770.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className='container mt-5'>
        <div className='row'>
            {
                product.slice(0,11).map(c =>
                    <div className='col-lg-12 d-flex align-items-center border justify-content-between'>
                        <img className='w-25' src={c.image} alt="" />
                        <p>{ c.name}</p>

                        <p>{c.price}</p>
                        <button className="dropbtn w-25"> <FontAwesomeIcon icon={faQrcode} /></button>
                    </div>
                    )
                
            }
        </div>

    </div>
    );
};

export default Sideshow;