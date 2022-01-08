import React from 'react';
import Cloths from '../Cloths/Cloths';
import Techs from '../Techs/Techs';
import Main from './Main'
import Navigation from "./../Shared/Navigation/Navigation";
import Foods from '../FoodsRoute/Foods';
import useAuth from '../../hook/useAuth';
import Footer from '../Shared/Navigation/Footer/Footer';

const Home = () => {
    const { admin } = useAuth();
   
    return (
        <div>
            <Navigation></Navigation>
            <Main></Main>
            <Cloths></Cloths>
            <Foods></Foods>
            <Techs></Techs>
            <Footer></Footer>
        </div>
    );
};

export default Home;