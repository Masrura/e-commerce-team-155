import React from 'react';
import Navigation from "./../Shared/Navigation/Navigation";
import Footer from "./../Shared/Navigation/Footer/Footer";
import Foods from './Foods';
const FoodsRoute = () => {
    return (
        <>
            <Navigation></Navigation>
            <Foods></Foods>
            <Footer></Footer>
        </>
    );
};

export default FoodsRoute;