import React, { useEffect, useState } from 'react';
import Tech from '../Tech/Tech';

const Techs = () => {
    const [techs,setTechs] = useState([]);

    useEffect(()=>{
        fetch('./tech.json')
        .then(res=>res.json())
        .then(data=>setTechs(data))
    },[])
    return (
    <>
        <section class="container-fluid mt-5 bg-cont text-center bg-dark" id="tisharts">
            <h1 class="text-light p-2">Cheack Out Tisharts</h1>
            <hr/>
        <div class="row gy-5 p-5">
            {
                techs.map(tech=><Tech key={tech.id} tech={tech}></Tech>)
            }
          </div>
        </section>
        </>
    );
};

export default Techs;