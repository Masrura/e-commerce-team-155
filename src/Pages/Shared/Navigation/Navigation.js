import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import navbg from "./../../../images/site-logo.png";
import { faSignInAlt,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from "./../../../hook/useAuth";
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const {user,logOut} = useAuth()
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={navbg}
          width="300"
          height="90"
          className="d-inline-block align-top"
        />
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-nav m-auto mb-2 mb-lg-0">
          <Nav.Link as={HashLink} to='/home'>HOME</Nav.Link>
          <Nav.Link as={HashLink} to='/wear'>WEAR</Nav.Link>
          <Nav.Link as={HashLink} to='/tech'>TECH</Nav.Link>
          
        </Nav>
        <Nav>
          {
                        user?.email ?
                           <li> <Button style={{ textDecoration: 'none', color: 'white' }} onClick={logOut} color="inherit">Logout</Button>
                           <Link to="/Dashboard"><button className='btn btn-danger me-1'>Dashboard <FontAwesomeIcon icon={faSignInAlt} /></button></Link></li>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
};

export default Navigation;