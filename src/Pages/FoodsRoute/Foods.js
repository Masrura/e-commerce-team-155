import React, { useEffect, useState } from 'react';
import Food from './Food';

const Foods = () => {
    const [foods,setFoods] = useState([]);

    useEffect(()=>{
        fetch('./foods.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])
    return (
    <>
        <section className="container-fluid mt-5 bg-cont text-center bg-light" id="tisharts">
            <h1 className="text-dark text-start p-2">Frash and Healthy Food</h1>
            <hr/>
        <div className="row gy-5 p-5">
            {
                foods.map(food=><Food key={food.id} food={food}></Food>)
            }
          </div>
        </section>
        </>
    );
};

export default Foods;