import React, { useEffect, useState } from 'react';
import Cloth from '../Cloth/Cloth';


const Cloths = () => {
  const [wears,setWears] = useState([]);


  useEffect(()=>{
    fetch('./wear.json')
    .then(res=>res.json())
    .then(data=>{
      setWears(data)
    });


  },[])
    return (
        <>
        <section className="container-fluid mt-5 bg-cont" id="tisharts">
               <h1 className="text-dark p-2 text-start">Popular Products</h1>
            <hr/>
            <div className="row gy-5 p-5">
                {wears.map(wear=><Cloth key={wear.id} wear={wear}></Cloth>)}           
            </div>
        </section>
        </>
    );
};

export default Cloths;