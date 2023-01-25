import React, { useEffect, useState } from 'react';
import Tech from '../Tech/Tech';
import { useDispatch, useSelector } from "react-redux";
import { setGadgets } from "../../redux/actions/productsActions";
const Techs = () => {
    const techs = useSelector((state) => state.gadgets.gadgets);
    const dispatch = useDispatch();
   
    useEffect(() => {
        fetch('https://e-commerce-site-9crn.onrender.com/gadgets')
            .then(res => res.json())
            .then(data => {
                dispatch(setGadgets(data));

            });
    }, [])
    return (
    <>
        <section className="container-fluid mt-5 text-center" id="tisharts">
            <h1 className="text-dark text-start p-2">Cheack Out Gedgets</h1>
            <hr/>
        <div className="row gy-5 p-5">
            {
                techs.map(tech=><Tech key={tech.id} tech={tech}></Tech>)
            }
          </div>
        </section>
        </>
    );
};

export default Techs;