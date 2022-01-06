import React from 'react';
import Cloths from '../Cloths/Cloths';
import Techs from '../Techs/Techs';
import Main from './Main'
import Navigation from "./../Shared/Navigation/Navigation";
import Foods from '../FoodsRoute/Foods';
import useAuth from '../../hook/useAuth';
const Home = () => {
    const { admin } = useAuth();
    console.log('Admin is ', admin);
    return (
        <div>
            <Navigation></Navigation>
            <Main></Main>
            <Cloths></Cloths>
            <Techs></Techs>
            <Foods></Foods>
        </div>
    );
};

export default Home;