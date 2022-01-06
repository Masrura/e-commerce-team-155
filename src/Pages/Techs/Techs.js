import React, { useEffect, useState } from 'react';
import Tech from '../Tech/Tech';
import { useDispatch, useSelector } from "react-redux";
import { setGadgets } from "../../redux/actions/productsActions";
const Techs = () => {
    const techs = useSelector((state) => state.gadgets.gadgets);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://damp-gorge-65015.herokuapp.com/gadgets')
            .then(res => res.json())
            .then(data => {
                dispatch(setGadgets(data));
            });
    }, [])
    return (
<<<<<<< HEAD
        <>
            <section className="container-fluid mt-5 bg-cont text-center bg-dark" id="tisharts">
                <h1 className="text-light p-2">Check Out T-Shirts</h1>
                <hr />
                <div className="row gy-5 p-5">
                    {
                        techs.map(tech => <Tech key={tech.id} tech={tech}></Tech>)
                    }
                </div>
            </section>
=======
    <>
        <section class="container-fluid mt-5 bg-cont text-center bg-dark" id="tisharts">
            <h1 class="text-light p-2">Cheack Out Gedgets</h1>
            <hr/>
        <div class="row gy-5 p-5">
            {
                techs.map(tech=><Tech key={tech.id} tech={tech}></Tech>)
            }
          </div>
        </section>
>>>>>>> 25dc0a4c560da8d5ec94b212adffb08737a0e876
        </>
    );
};

export default Techs;