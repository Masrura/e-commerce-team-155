import React from 'react';
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 bg-dark text-light">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Pachmishali</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>
    
                <hr className="clearfix w-100 d-md-none pb-0"/>
    
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                    <Nav className="ms-auto">
                        <NavLink to='/home' className="m-1"><p>Home</p></NavLink>   
                        <NavLink to='/Wear' className="m-1"><p>Wear</p></NavLink>   
                        <NavLink to='/Tech' className="m-1"><p>Tech</p></NavLink>   
                        <NavLink to='/Food' className="m-1"><p>Food</p></NavLink>   
                    </Nav>
                    </ul>
                </div>
    
                
            </div>
        </div>
    
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
    
    </footer>
    );
};

export default Footer;