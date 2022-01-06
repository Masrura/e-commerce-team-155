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

const Navigation = () => {
  const {user,logOut} = useAuth()
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={navbg}
          width="300"
          height="90"
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
        <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
          <Nav.Link as={HashLink} to='/home'>Cart<FontAwesomeIcon icon={faShoppingCart}/></Nav.Link>
          <Nav.Link as={HashLink} to='/wear'>Wishlist<FontAwesomeIcon icon={faHeart}/></Nav.Link>
        </Nav>
        <Nav>
          {
                        user?.email ?
                           <li> 
                            <Button variant="contained" onClick={logOut} color="success">Log Out <FontAwesomeIcon icon={faArrowRight}/></Button>

                           <Link to="/Dashboard"><button className='btn btn-danger me-1'>Dashboard <FontAwesomeIcon icon={faSignInAlt} /></button></Link></li>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                  <Button variant="contained" color="success"> <FontAwesomeIcon icon={faUser}/><span className='ms-2'>Log In</span></Button>

                            </NavLink>
                    }
        </Nav>
      </Navbar.Collapse>
    </Navbar>


    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Button variant="contained" color="success"> <FontAwesomeIcon icon={faQrcode}/><span className='ms-2'>Browse All Categories</span></Button>
      

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-nav m-auto mb-2 mb-lg-0">
          <Nav.Link as={HashLink} className='me-5' to='/home'>HOME</Nav.Link>
          <Nav.Link as={HashLink} className='me-5' to='/wear'>WEAR</Nav.Link>
          <Nav.Link as={HashLink} className='me-5' to='/tech'>TECH</Nav.Link>
          <Nav.Link as={HashLink} className='me-5' to='/about'>ABOUT</Nav.Link>
          
        </Nav>
        <Nav>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    );
};

export default Navigation;