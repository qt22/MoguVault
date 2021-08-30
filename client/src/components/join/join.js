import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

import "./join.css"

const Container = () => {
    return (
        <div className="container">
            <img src={ require('../../images/shiganshina-min.png')} alt={"background"}
                 style={{width:"100%"}}></img>
            <div className="centered">
                <h2>
                    My Password Manager
                </h2>
            </div>
        </div>
    );
}

export default Container
