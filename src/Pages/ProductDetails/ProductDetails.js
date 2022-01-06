import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectedProduct,
    removeSelectedProduct,
} from "../../redux/actions/productsActions";
const ProductDetails = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
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

    return (
        <div>
            <img src={product.image} alt="" />
        </div>
    );
};

export default ProductDetails;