import React from "react";
import logo from './logo.svg';

import "./App.css";

export default function Footer()
{
    return (
        <footer className="App-footer">
            <hr />
            <div className="col-11">
                <img src={logo} className="App-logo" alt="logo" />
                <a href="https://github.com/QueenJammie/CegepdeSherbrookeReact/tree/main/src" className="openSourceCode-link">OpenSource Code</a> by <a href="mailto: jammie.lacc@outlook.com" className="student-link">Student Jammie Lachance-Côté</a>
            </div> 
        </footer>
    )
}