import React from 'react';
import Navigation from "./../Shared/Navigation/Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from 'react-bootstrap';
import './SignIn.css'
const SignIn = () => {
    const isLogin = false;
    return (
        <>
        <Navigation></Navigation>
        <Container className='mt-5 bx-shadw'>
        <Row>
          <Col className="col-lg-12 w-50 p-5">
            <form>
              <h3 className="txt-custom h-cust m-4">Please {isLogin ? 'Login' : 'Register'}</h3>
              {!isLogin && <div className="row mb-3">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputName" placeholder="Your Name" />
                </div>
              </div>}
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="inputEmail3" required />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword3" required />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                    <label className="form-check-label txt-custom" htmlFor="gridCheck1">
                      Already Registered?
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-dark m-1">
                {isLogin ? 'Login' : 'Register'}
              </button>
      
            </form>
          </Col>
          <Col className="col-lg-12 text-light w-50 p-5 singinbg">
            <h1 className='text-warning m-5'>OR</h1>
            <button className='btn btn-primary m-2'><FontAwesomeIcon className='text-warning' icon={faGoogle}/> Sign in with <span className='text-danger'>Google</span></button>
          </Col>
        </Row>
      </Container>
        </>
    );
};

export default SignIn;