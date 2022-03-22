import React, { useEffect, useState } from 'react';
import axios from "axios";
import Cloth from '../Cloth/Cloth';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import Ads from '../Ads/Ads';

const Cloths = () => {
  const wears = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch('https://afternoon-sands-62770.herokuapp.com/shirts')
      .then(res => res.json())
      .then(data => {
        dispatch(setProducts(data));
      });
  }, [])

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("http://localhost:5000/shirts")
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

    return (
        <>
        <section className="container-fluid mt-5 bg-cont" id="tisharts">
              <h1 className="text-dark p-2 text-start">Popular Products</h1>
            <hr/>
            <div className="row d-flex">
                 <div className='col-lg-4'>
                 <Ads></Ads> 

                  </div>  
                <div className='col-lg-8'>
                    <div className='row'>
                        {wears.map(wear=><Cloth key={wear.id} wear={wear}></Cloth>)}

                    </div>
                </div>           
                       
            </div>
        </section>
        </>
    );
};

export default Cloths;