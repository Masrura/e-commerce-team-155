import React, { useEffect, useState } from 'react';
import axios from "axios";
import Cloth from '../Cloth/Cloth';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";


const Cloths = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://damp-gorge-65015.herokuapp.com/shirts')
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

  console.log("Products :", products);
    return (
        <>
        <section className="container-fluid mt-5 bg-cont text-center bg-dark" id="tisharts">
          <h1 className="text-light p-2">Cheack Out Tisharts</h1>
            <hr/>
          <div className="row gy-5 p-5">
            {products.map(product => <Cloth key={product.id} wear={product}></Cloth>)}           
            </div>
        </section>
        </>
    );
};

export default Cloths;