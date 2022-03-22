import React, { useEffect, useState } from 'react';
import Food from './Food';
import Slideshow from './../Sideshow/Sideshow'
const Foods = () => {
    const [foods,setFoods] = useState([]);

    useEffect(()=>{
        fetch('https://afternoon-sands-62770.herokuapp.com/foods')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])
    return (
        <>
        <section className="container-fluid mt-5 bg-cont" id="tisharts">
              <h1 className="text-dark p-2 text-start">Popular Products</h1>
            <hr/>
            <div className="row d-flex">
                 <div className='col-lg-4'>
                 <Slideshow></Slideshow> 

                  </div>  
                <div className='col-lg-8'>
                    <div className='row'>
                                            {
                            foods.map(food=><Food key={food.id} food={food}></Food>)
                        }

                    </div>
                </div>           
                       
            </div>
        </section>
        </>
    );
};

export default Foods;



