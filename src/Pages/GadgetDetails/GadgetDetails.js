import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectedGadget,
    removeSelectedProduct,
} from "../../redux/actions/productsActions";

const GadgetDetails = () => {
    const { gadgetId } = useParams();
    let gadget = useSelector((state) => state.gadget);
    //const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    useEffect(() => {
        if (gadgetId && gadgetId !== "") {
            fetch(`https://damp-gorge-65015.herokuapp.com/gadget/${gadgetId}`)
                .then(res => res.json())
                .then(data => {
                    dispatch(selectedGadget(data));
                });
        }
        return () => {
            dispatch(removeSelectedProduct());
        };

    }, [gadgetId])

    return (
        <div>
            <img src={gadget.image} alt="" />
        </div>
    );
};

export default GadgetDetails;