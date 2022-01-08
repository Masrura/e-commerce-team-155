import React from 'react';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Main.css'
import { textAlign } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import Offers from '../Offers/Offers';
const Main = () => {
    const maintext = {
        letterSpacing: "15px",
    }
    
   

    return (
       <>
        <Offers></Offers>
         <section className="container-fluid mt-5" >
            <div className="row">
                <Grid className="col-lg-7 mainbg m-4" sx={{boxShadow: 3 , borderRadius: 16 }}>
                        <Grid>
                            <h2 className="display-1 customFonts" style={maintext}><span className="text-danger">Pure</span> Coffe </h2>
                            <h2 className="display-5 customFonts" style={maintext}><span className="text-danger">Big</span> Discount </h2>
                            <Button variant="contained" color="success">Shop Now <FontAwesomeIcon icon={faArrowRight}/></Button>
                        </Grid>
                
                </Grid>
                <Grid className="col-lg-4 align-self-center banner12 m-4" sx={{boxShadow: 3 , borderRadius: 16 }}>
                        <Grid className='col-lg-6 d-inline'>
                            <Grid>
                            <h1 className="display-5 customFonts" style={maintext}><span className="text-danger">Delivered</span> to </h1>
                            <h1 className="display-5 customFonts" style={maintext}><span className="text-danger">your</span> home </h1>
                            </Grid>
                            <Grid>
                            <Button variant="contained" color="success">Shop now <FontAwesomeIcon icon={faArrowRight}/> </Button>
                            </Grid>
                        </Grid>
                
                </Grid>
            </div>

                <Row className='d-flex justify-content-center'>
                    <Grid className='col-lg-4 mini1 p-5 w-45' sx={{boxShadow: 3 , borderRadius: 16 }}>
                        <Col className='align-ele'>
                        <h3>Everyday Fresh &
                            Clean with Our
                            Products</h3>
                            <NavLink to='/food'>
                                                        <Button variant="contained" color="success">Shop now <FontAwesomeIcon icon={faArrowRight}/> </Button>
                            </NavLink>
                        </Col>

                    </Grid>
                    <Grid className='col-lg-4 mini2 p-5 w-45' sx={{boxShadow: 3 , borderRadius: 16 }}>
                        <Col className='align-ele'>

                        <h3>Make your BreakfastHealthy and Easy</h3>
                            <NavLink to='/wear'>
                                                            <Button variant="contained" color="success">Shop now <FontAwesomeIcon icon={faArrowRight}/> </Button>
                            </NavLink>
                        </Col>


                    </Grid>
                    <Grid className='col-lg-4 mini3 p-5 w-45' sx={{boxShadow: 3 , borderRadius: 16 }}>
                        <Col className='align-ele'>

                        <h3>Take a look in out tech products</h3>
                            <NavLink to='/tech'>
                                                            <Button variant="contained" color="success">Shop now <FontAwesomeIcon icon={faArrowRight}/> </Button>
                            </NavLink>
                        </Col>


                    </Grid>
                </Row>
        </section>
       </>
    );
};

export default Main;