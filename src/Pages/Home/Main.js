import React from 'react';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Main.css'
import { textAlign } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
const Main = () => {
    const maintext = {
        letterSpacing: "15px",
    }
    
   

    return (
       <>
         <section className="container-fluid mt-5" >
            <div className="row d-flex">
                <Grid className="col-lg-12 mainbg">
                        <Grid>
                            <h2 className="display-1" style={maintext}><span className="text-danger">Pure</span> Coffee </h2>
                            <h2 className="display-5" style={maintext}><span className="text-danger">Big</span> Discount </h2>
                            <Button variant="contained" color="success">Shop Now <FontAwesomeIcon icon={faArrowRight}/></Button>
                        </Grid>
                
                </Grid>
               
                
            </div>

              
        </section>
        
       </>
    );
};

export default Main;