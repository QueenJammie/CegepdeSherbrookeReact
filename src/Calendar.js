import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Calendar.css";
export default function Calendar()
{
  return (
    <div className="Calendar">
      <h1>Cégep de Sherbrooke <small>Programmation d'applications</small></h1>
      <div className="calendar">
      <div className="row">
        <h4>Session 1:</h4>
        <ul className="cellule col-3">
          <a href="420PA1SH.js" target="_self" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PA1-SH</li>
          <li className="course-title">Création de pages Web</li>
          </a>
        </ul>
        <ul className="cellule col-3">
          <a href="420PA2SH.html" target="_self" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PA2-SH</li>
          <li className="course-title">Introduction à la programmation</li>
          </a>
        </ul>
        <ul className="cellule col-3">
          <a href="420PA3SH.html" target="_self" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PA3-SH</li>
          <li className="course-title">Exploitation d'une base de données</li>
          </a>
        </ul>
        <ul className="cellule col-3">
          <a href="420PA4SH.html" target="_self" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PA4-SH</li>
          <li className="course-title">Mathématiques appliquées à la programmation</li>
          </a>
        </ul>
      </div>
      <div className="row">
        <h4>Session 2:</h4>
        <ul className="cellule col-3">
          <a href="420PB1SH.js" target="_blank" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PB1-SH</li>
          <li className="course-title">Programmation d'applications</li>
          </a>
        </ul>
        <ul className="cellule col-3">
          <a href="420PB2SH.js" target="_blank" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PB2-SH</li>
          <li className="course-title">Programmation Orienté Objet (POO)</li>
          </a>
        </ul>
        <ul className="cellule col-3">
          <a href="420PB3SH.js" target="_blank" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PB3-SH</li>
          <li className="course-title">Développement de sites Web</li>
          </a>
        </ul>
        <ul className="cellule col-3">
          <a href="420PB4SH.js" target="_blank" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PB4-SH</li>
          <li className="course-title">Documentation technique</li>
          </a>
        </ul>
      </div>
      <div className="row">
        <h4>Session 3:</h4>
        <ul className="cellule col-3">
          <a href="420PC1SH.js" target="_blank" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PC1-SH</li>
          <li className="course-title">Conbtrôle de la qualité</li>
          </a>
        </ul>
        <ul className="cellule col-3">
          <a href="420PC2SH.js" target="_blank" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PC2-SH</li>
          <li className="course-title">Développement d'applications</li>
          </a>
        </ul>
        <ul className="cellule col-3">
          <a href="420PC3SH.js" target="_blank" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PC3-SH</li>
          <li className="course-title">Conception d'applications</li>
          </a>
        </ul>
        <ul className="cellule col-3">
          <a href="420PC4SH.js" target="_blank" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PC4-SH</li>
          <li className="course-title">Développement d'applications</li>
          </a>
        </ul>
      </div>
      <div className="row">
        <h4>Session 4:</h4>
        <ul className="cellule col-3">
          <a href="420PD1SH.js" target="_blank" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PD1-SH</li>
          <li className="course-title">Projet intégrateur</li>
          </a>
        </ul>
        <ul className="cellule col-3">
          <a href="420PD2SH.js" target="_blank" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PD2-SH</li>
          <li className="course-title">Modification d'un système</li>
          </a>
        </ul>
        <ul className="cellule col-3">
          <a href="420PD3SH.js" target="_blank" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PD3-SH</li>
          <li className="course-title">Nouvelles technologies</li>
          </a>
        </ul>
      </div>
      <div className="row">
        <h4>Session 5:</h4>
        <ul className="cellule col-9">
          <a href="420PESSH.js" target="_blank" rel="noreferrer" className="cellule-link">
          <li className="course-code">420-PES-SH</li>
          <li className="course-title">Stage en entreprise</li>
          </a>
        </ul>
      </div>
      </div>
    </div>
  )
}