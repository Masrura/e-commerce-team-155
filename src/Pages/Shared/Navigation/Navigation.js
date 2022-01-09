import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import navbg from "./../../../images/site-logo.png";
import { faSignInAlt, faShoppingCart, faHeart, faArrowRight, faUser, faQrcode, faSearch, faDumpster } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from "./../../../hook/useAuth";
import { Button, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  const { user, logOut, admin } = useAuth()
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

       

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto">
            {
              user?.email && <>
            <Nav.Link as={HashLink} to='/cart' className='text-light font-weight-bold'>Cart<FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
            <Nav.Link as={HashLink} to='/wishlist' className='text-light font-weight-bold'>Wishlist<FontAwesomeIcon icon={faHeart} /></Nav.Link>
                <Nav.Link as={HashLink} to='/my-orders' className='text-light font-weight-bold'>Orders<FontAwesomeIcon icon={faDumpster} /></Nav.Link>
                </>
            }

            {
              user?.email ?
                <p>
                  {admin&&<Nav.Link as={HashLink} to='/Dashboard' className='text-light font-weight-bold'>Dashboard <FontAwesomeIcon icon={faSignInAlt} /></Nav.Link>}
                  <Nav.Link as={HashLink} to='/Dashboard' onClick={logOut} className='text-light font-weight-bold'>Log Out <FontAwesomeIcon icon={faArrowRight} /></Nav.Link>
                </p>


                :
                <Nav.Link as={HashLink} to='/login' className='text-light font-weight-bold'>Log in<FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>

            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* </NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}

      <Navbar collapseOnSelect expand="lg" variant="light">

      

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav m-auto mb-2 mb-lg-0">
              <Nav.Link as={HashLink} className='me-5 font-weight-bold' to='/home'>HOME</Nav.Link>
              <Nav.Link as={HashLink} className='me-5 font-weight-bold' to='/wear'>WEAR</Nav.Link>
              <Nav.Link as={HashLink} className='me-5 font-weight-bold' to='/tech'>TECH</Nav.Link>
              <Nav.Link as={HashLink} className='me-5 font-weight-bold' to='/food'>FOOD</Nav.Link>
              <Nav.Link as={HashLink} className='me-5 font-weight-bold' to='/contectus'>Contect Us</Nav.Link>

            </Nav>
            <Nav>

            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;