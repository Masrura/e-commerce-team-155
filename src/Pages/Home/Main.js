import React from 'react';
import mainbg from "./../../images/header.jpg";

const Main = () => {
    const maintext = {
        letterSpacing: "15px"
        
    }
    return (
        <section className="container">
        <div className="row">
            <div className="col-lg-6 align-self-center">
                <h1 className="display-1 let-spac" style={maintext}><span className="text-danger">ready</span> to <span className="text-danger">wear</span></h1>
                <p className="border-danger border-bottom w-25">shop now</p>
            </div>
            <div className="col-lg-6">
                <img src={mainbg} className="img-fluid"/>
            </div>
        </div>
    </section>
    );
};

export default Main;