import React from 'react';
import { Button, Grid } from '@mui/material';

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
        <section className="container-fluid mt-5" >
            <div className="row">
                <Grid className="col-lg-7 mainbg m-4" sx={{boxShadow: 3 , borderRadius: 16 }}>
                        <Grid>
                            <h1 className="display-1 let-spac" style={maintext}><span className="text-danger">Pure</span> Coffe </h1>
                            <h1 className="display-5 let-spac" style={maintext}><span className="text-danger">Big</span> Discount </h1>
                            <Button variant="contained" color="success">Shop Now <FontAwesomeIcon icon={faArrowRight}/></Button>
                        </Grid>
                
                </Grid>
                <Grid className="col-lg-4 align-self-center banner12 m-4" sx={{boxShadow: 3 , borderRadius: 16 }}>
                        <Grid className='col-lg-6 d-inline'>
                            <Grid>
                            <h1 className="display-5 let-spac" style={maintext}><span className="text-danger">Delivered</span> to </h1>
                            <h1 className="display-5 let-spac" style={maintext}><span className="text-danger">your</span> home </h1>
                            </Grid>
                            <Grid>
                            <Button variant="contained" color="success">Shop now <FontAwesomeIcon icon={faArrowRight}/> </Button>
                            </Grid>
                        </Grid>
                
                </Grid>
            </div>

                <Row className='d-flex justify-content-center'>
                    <Grid className='col-lg-4 mini1 p-5 m-2 w-45' sx={{boxShadow: 3 , borderRadius: 16 }}>
                        <Col className='align-ele'>
                        <h3>Everyday Fresh &
                            Clean with Our
                            Products</h3>
                        <Button variant="contained" color="success">Shop now <FontAwesomeIcon icon={faArrowRight}/> </Button>
                        </Col>

                    </Grid>
                    <Grid className='col-lg-4 mini2 p-5 m-2 w-45' sx={{boxShadow: 3 , borderRadius: 16 }}>
                        <Col className='align-ele'>

                        <h3>Make your BreakfastHealthy and Easy</h3>
                            <Button variant="contained" color="success">Shop now <FontAwesomeIcon icon={faArrowRight}/> </Button>
                        </Col>


                    </Grid>
                    <Grid className='col-lg-4 mini3 p-5 m-2 w-45' sx={{boxShadow: 3 , borderRadius: 16 }}>
                        <Col className='align-ele'>

                        <h3>The best OrganicProducts Online</h3>
                            <Button variant="contained" color="success">Shop now <FontAwesomeIcon icon={faArrowRight}/> </Button>
                        </Col>


                    </Grid>
                </Row>
        </section>
    );
};

export default Main;