import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigatoin from "./../Shared/Navigation/Navigation";
const ErrorPage = () => {
    return (
        <>
            <Navigatoin></Navigatoin>
            <Container>
            <Row>
                <Col className="col-lg-6">
                    <img src="https://i.ibb.co/dG6VCmn/3804918.jpg" alt='' className="img-fluid"/>
                </Col>
                
                <Col className="col-lg-6">
                    <img src='https://i.ibb.co/RyDmybL/3804949.jpg' alt='' className="img-fluid"/>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default ErrorPage;