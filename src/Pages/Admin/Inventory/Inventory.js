import React, { useEffect, useState } from 'react';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Inventory = () => {
    const [inventory, setInventory] = useState([])
    const [control, setConrol] = useState(false);
    const myStyle = {
        height: "200px"
    }
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data =>setInventory(data))
    }, [control])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setConrol(!control);
                    } else {
                        setConrol(false);
                    }
                });
            console.log(id);
        }
    };
    return (
        <div className="row gy-5 p-5">
            {
                inventory.map(int =>
                    <div className="col-lg-3 col-md-6">
                     
                            <div className="card rounded" >
                                <img className="card-img-top" style={myStyle} src={int.image} alt="Card_image_cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{int.name}</h5>
                                    <p>price:{int.price}</p>
                                    <button type="button" className="btn btn-outline-success" onClick={() => handleDelete(int._id)}><span className='me-2'>Delete</span> <FontAwesomeIcon icon={faShoppingBag} /> </button>
                                </div>
                            </div>
                       
                    </div>  
                    )
            }
        </div>
    );
};

export default Inventory;