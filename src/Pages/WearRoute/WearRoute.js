import React from 'react';
import Cloths from '../Cloths/Cloths';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from "../Shared/Navigation/Footer/Footer"

const WearRoute = () => {
    return (
        <>
            <Navigation></Navigation>
            <Cloths></Cloths>
            <Footer></Footer>
        </>
    );
};

export default WearRoute;