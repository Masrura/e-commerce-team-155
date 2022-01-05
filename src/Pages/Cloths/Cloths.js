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
        <section class="container-fluid mt-5 bg-cont text-center bg-dark" id="tisharts">
               <h1 class="text-light p-2">Cheack Out Tisharts</h1>
            <hr/>
            <div class="row gy-5 p-5">
                {wears.map(wear=><Cloth key={wear.id} wear={wear}></Cloth>)}           
            </div>
        </section>
        </>
    );
};

export default Cloths;