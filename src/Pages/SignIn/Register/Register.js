import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle } from "@fortawesome/free-brands-svg-icons";
import './../SignIn.css'
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink,useLocation,useNavigate } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from "./../../../hook/useAuth";
const Register = () => {
    const [loginData,setLoginData] = useState({});
    const {authError,user,registerUser,isLoading,siginWithGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const handleLoginOnSubmit = (e) => {
      if(loginData.password !== loginData.password2){
          
          return;
      }
      registerUser(loginData.email,loginData.password,location,navigate)
      e.preventDefault()
    };
    const handleOnChnage = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
      };
  const handleGoogleSignIn = (e) => {
    siginWithGoogle(location, navigate)
    e.preventDefault()
  }
    return (
        <>
        <Navigation></Navigation>

        <Container sx={{m : 10}} className='bx-shadw'>
            <Grid container spaci={2}>
              <Grid item xs={12} md={6}>
                <Typography sx={{m : 4}} variant='h4'>Register</Typography>
                
                {!isLoading && <form onSubmit={handleLoginOnSubmit}>
                  <TextField 
                      id="filled-basic"
                      sx={{m : 4}} 
                      label="Your Email" 
                      name='email'
                      type='email'
                      onChange={handleOnChnage}
                      variant="filled" /><br/>
                  <TextField 
                      id="filled-basic" 
                      sx={{m : 4}}
                      label="Your Password" 
                      name='password'
                      onChange={handleOnChnage}
                      type='password'
                      variant="filled" /><br/>
                  <TextField 
                      id="filled-basic"
                      sx={{m : 4}} 
                      label="Retype Password" 
                      name='password2'
                      onChange={handleOnChnage}
                      type='password2'
                      variant="filled" /><br/>
                  <Button variant='contained' sx={{m : 4}} type='submit'>Login</Button> <br/>
                  <NavLink to='/login'><a variant='contained' type='submit'>Already Registered ? Please Login.</a></NavLink>
                </form>}
               
              </Grid>
              <Grid item xs={12} md={6} className='singinbg'>
              <Typography variant="h4" sx={{m : 1}} gutterBottom component="div">
                  Or 
                </Typography>
              <Button onClick={handleGoogleSignIn} variant='contained' sx={{m : 4}} type='submit'><FontAwesomeIcon className='text-warning me-1' icon={faGoogle}/> SIGN IN WITH GOOGLE</Button><br/>
                {
                  isLoading && <CircularProgress />
                }
                {user?.email && <Alert severity='success'>You are Registered successfully .</Alert>}
                {authError && <Alert severity='error'>{authError}</Alert>}
              </Grid>

            </Grid>
        </Container>















          
          </>
    );
};

export default Register;