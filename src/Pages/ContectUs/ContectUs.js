import React from 'react';
import Navigation from "./../Shared/Navigation/Navigation";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow,faPhone,faMailBulk } from '@fortawesome/free-solid-svg-icons';

const ContectUs = () => {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
    return (
        <>
            <Navigation></Navigation>
            <div className='container mt-5'>
                <h2>Get In Touch</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis inventore, aut commodi eum veniam vel.</p>
                <div className='row'>
                    <div className='col-lg-4'>
                    <Card sx={{ minWidth: 275 }} className="shadow-lg border">
                        <CardContent>
                            <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
                                <FontAwesomeIcon icon={faLocationArrow}/>
                            </Typography>
                            <Typography>
                                Location : Monipur,Mirpur-2,Dhaka
                              
                            </Typography>
                            <Typography>
                                Location : Fatulla,Narayanganj
                            </Typography>
                            <Typography>
                                    Location : Monipur,Mirpur-2,Dhaka

                            </Typography>
                        </CardContent>
                        
                    </Card>
                    </div>
                    <div className='col-lg-4'>
                    <Card sx={{ minWidth: 275 }} className="shadow-lg border">
                        <CardContent>
                            <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
                            <FontAwesomeIcon icon={faPhone}/>

                            </Typography>
                            <Typography>
                                phone :0199xxxxxxxx
                              
                            </Typography>
                            <Typography>
                                phone : 0199xxxxxxxx
                            </Typography>
                            <Typography>
                                    phone : 0199xxxxxxxx

                            </Typography>
                        </CardContent>
                        
                    </Card>
                    </div>
                    <div className='col-lg-4'>
                    <Card sx={{ minWidth: 275 }} className="shadow-lg border">
                        <CardContent>
                            <Typography sx={{ fontSize:50 }} color="text.secondary" gutterBottom>
                                <FontAwesomeIcon icon={faMailBulk}/>

                            </Typography>
                            <Typography>
                                Gmail : pachmishali@gmail.com
                              
                            </Typography>
                            <Typography>
                                Gmail : pachmishali@gmail.com
                            </Typography>
                            <Typography>
                                    Gmail : pachmishali@gmail.com

                            </Typography>
                        </CardContent>
                        
                    </Card>
                    </div>
                </div>
            </div>
            <div className='container mt-5 border shadow-lg p-5'>
                <h1>Send Us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis inventore, aut commodi eum veniam vel.</p>
                <form>
                <div class="form-group text-start">
                    <label for="exampleInputEmail1">Your Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group text-start">
                    <label for="exampleInputPassword1">Your Gmail</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group text-start">
                    <label for="exampleFormControlTextarea1">Your Speach</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
};

export default ContectUs;