import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import navbg from "./../../../images/site-logo.png";
import { faSignInAlt,faShoppingCart,faHeart, faArrowRight, faUser, faQrcode,faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from "./../../../hook/useAuth";
import { Button, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  const {user,logOut} = useAuth()
    return (
      <>
      <Navbar collapseOnSelect expand="lg" className='navbg'>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={navbg}
          width="250"
          height="70"
          className="d-inline-block align-top"
        />
      
      </Navbar.Brand>
     
          <div className="input-group w-50 mb-3">
            <div className="input-group-prepend">
              <span className="h2" ><FontAwesomeIcon icon={faSearch}/></span>
            </div>
            <input type="text" className="form-control" placeholder="Search something" aria-describedby="basic-addon1"/>
          </div>
     
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-nav ms-auto">
                     <Nav.Link as={HashLink} to='/cart' className='text-dark'>Cart<FontAwesomeIcon icon={faShoppingCart}/></Nav.Link>
                      <Nav.Link as={HashLink} to='/wishlist' className='text-dark'>Wishlist<FontAwesomeIcon icon={faHeart}/></Nav.Link>
        
          {
                        user?.email ?
                            <p>
                               <Nav.Link as={HashLink} to='/Dashboard' className='text-dark'>Dashboard <FontAwesomeIcon icon={faSignInAlt} /></Nav.Link>
                              <Nav.Link as={HashLink} to='/Dashboard' onClick={logOut} className='text-dark'>Log Out <FontAwesomeIcon icon={faArrowRight}/></Nav.Link>
                            </p>


                            :
                            <Nav.Link as={HashLink} to='/login' className='text-light'>Log in<FontAwesomeIcon icon={faShoppingCart}/></Nav.Link>

                    }
        </Nav>
      </Navbar.Collapse>
    </Navbar>


    <Navbar collapseOnSelect expand="lg"  variant="light">
      
      <div className="dropdown">
        <button className="dropbtn">Browse All Collection <FontAwesomeIcon icon={faQrcode}/></button>
        <div className="dropdown-content">
          <NavLink to='/wear'><p className="font-weight-bold">Wear</p></NavLink>
          <NavLink to='/tech'><p className="font-weight-bold">Tech</p></NavLink>
          <NavLink to='/food'><p className="font-weight-bold">Food</p></NavLink>
        </div>
    </div>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-nav m-auto mb-2 mb-lg-0">
          <Nav.Link as={HashLink} className='me-5 font-weight-bold text-dark' to='/home'>HOME</Nav.Link>
          <Nav.Link as={HashLink} className='me-5 font-weight-bold text-dark' to='/wear'>WEAR</Nav.Link>
          <Nav.Link as={HashLink} className='me-5 font-weight-bold text-dark' to='/tech'>TECH</Nav.Link>
          <Nav.Link as={HashLink} className='me-5 font-weight-bold text-dark' to='/food'>FOOD</Nav.Link>
          <Nav.Link as={HashLink} className='me-5 font-weight-bold text-dark' to='/contectus'>Contect Us</Nav.Link>
          
        </Nav>
        <Nav>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    );
};

export default Navigation;