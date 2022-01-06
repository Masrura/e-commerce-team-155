import React, { useEffect, useState } from 'react';
import Food from './Food';

const Foods = () => {
    const [foods,setFoods] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/foods')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])
    return (
    <>
        <section class="container-fluid mt-5 bg-cont text-center bg-light" id="tisharts">
            <h1 class="text-dark text-start p-2">Frash and Healthy Food</h1>
            <hr/>
        <div class="row gy-5 p-5">
            {
                foods.map(food=><Food key={food.id} food={food}></Food>)
            }
          </div>
        </section>
        </>
    );
};

export default Foods;