import React from 'react';
import { Button, Grid } from '@mui/material';

import './Main.css'
import { textAlign } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Main = () => {
    const maintext = {
        letterSpacing: "15px",
    }
    
    return (
        <section className="container-fluid mt-5" >
            <div className="row">
                <Grid className="col-lg-8 mainbg " sx={{boxShadow: 3 , borderRadius: 16 }}>
                        <Grid>
                            <h1 className="display-1 let-spac" style={maintext}><span className="text-danger">Pure</span> Coffe </h1>
                            <h1 className="display-5 let-spac" style={maintext}><span className="text-danger">Big</span> Discount </h1>
                            <Button variant="contained" color="success">Shop Now</Button>
                        </Grid>
                
                </Grid>
                <Grid className="col-lg-4 align-self-center banner12 " sx={{boxShadow: 3 , borderRadius: 16 }}>
                        <Grid className='col-lg-6'>
                            <h1 className="display-5 let-spac" style={maintext}><span className="text-danger">Delivered</span> to </h1>
                            <h1 className="display-5 let-spac" style={maintext}><span className="text-danger">your</span> home </h1>
                            <Button variant="contained" color="success">Shop now <FontAwesomeIcon icon={faArrowRight}/> </Button>
                        </Grid>
                
                </Grid>
            </div>
        </section>
    );
};

export default Main;