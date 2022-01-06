import React from 'react';
import Cloths from '../Cloths/Cloths';
import Techs from '../Techs/Techs';
import Main from './Main'
import Navigation from "./../Shared/Navigation/Navigation";
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Main></Main>
            <Cloths></Cloths>
            <Techs></Techs>
        </div>
    );
};

export default Home;