import React, { useState } from 'react';
import Navigation from "./../Shared/Navigation/Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle } from "@fortawesome/free-brands-svg-icons";
import './SignIn.css'
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink,useLocation,useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
const SignIn = () => {
      const [loginData,setLoginData] = useState({});
      const {user,logInUser,isLoading,authError,siginWithGoogle} = useAuth();
      const location = useLocation();
      const navigate = useNavigate();

    const handleLoginOnSubmit = (e) => {
      logInUser(loginData.email,loginData.password,location,navigate)
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

        <Container sx={{mt : 10}}>
            <Grid container spaci={2} className='bx-shadw'>
              <Grid item xs={12} md={6}>
                <Typography sx={{m : 1}} variant='h4'>Login</Typography>
                
                <form  onSubmit={handleLoginOnSubmit}>
                  <TextField 
                      id="filled-basic" 
                      sx={{m : 2}}
                      label="Your Email" 
                      name='email'
                      onChange={handleOnChnage}
                      variant="filled" /><br/>
                  <TextField 
                      id="filled-basic" 
                      sx={{m : 2}}
                      label="Your Password" 
                      name='password'
                      onChange={handleOnChnage}
                      type='password'
                      variant="filled" /><br/>
                  <Button variant='contained' sx={{m : 4}} type='submit'>Login</Button><br/>
                  <NavLink to='/register'><a variant='contained' type='submit'>New user? register</a></NavLink>
                
                </form>
              </Grid>
              <Grid item xs={12} md={6} className='singinbg'>
              <Typography variant="h4" sx={{m : 1}} gutterBottom component="div">
                  Or 
                </Typography>
              <Button onClick={handleGoogleSignIn} variant='contained' sx={{m : 4}} type='submit'><FontAwesomeIcon className='text-warning' icon={faGoogle}/>SIGN IN WITH GOOGLE</Button><br/>
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

export default SignIn;