import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Calendar.css";
export default function Calendar()
{
  return (
    <div className="Calendar">
      <h1><a href="https://www.cegepsherbrooke.qc.ca/" target="_blank" rel="noreferrer">Cégep de Sherbrooke</a> <small><a href="https://www.cegepsherbrooke.qc.ca/fr/formation-continue/formation-pour-adultes/aec-temps-plein/programmation-d-applications" target="_blank" rel="noreferrer">Programmation d'applications</a></small></h1>
      <div className="calendar">
      <div className="row">
        <h4>Phase 1:</h4>
        <ul className="cellule col-3">
          <li className="course-code">420-PA1-SH</li>
          <li className="course-title">Création de pages Web</li>
          <li className="studyTime">60h</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PA2-SH</li>
          <li className="course-title">Introduction à la programmation</li>
          <li className="studyTime">75h</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PA3-SH</li>
          <li className="course-title">Exploitation d'une base de données</li>
          <li className="studyTime">60h</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PA4-SH</li>
          <li className="course-title">Mathématiques appliquées à la programmation</li>
          <li className="studyTime">60h</li>
        </ul>
      </div>
      <div className="row">
        <h4>Phase 2:</h4>
        <ul className="cellule col-3">
          <li className="course-code">420-PB1-SH</li>
          <li className="course-title">Programmation d'applications réseau</li>
          <li className="studyTime">60h</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PB2-SH</li>
          <li className="course-title">Programmation Orienté Objet (POO)</li>
          <li className="studyTime">90h</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PB3-SH</li>
          <li className="course-title">Développement de sites Web dynamiques</li>
          <li className="studyTime">75h</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PB4-SH</li>
          <li className="course-title">Documentation technique</li>
          <li className="studyTime">45h</li>
        </ul>
      </div>
      <div className="row">
        <h4>Phase 3:</h4>
        <ul className="cellule col-3">
          <li className="course-code">420-PC1-SH</li>
          <li className="course-title">Conbtrôle de la qualité</li>
          <li className="studyTime">60h</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PC2-SH</li>
          <li className="course-title">Développement d'applications natives</li>
          <li className="studyTime">90h</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PC3-SH</li>
          <li className="course-title">Conception d'applications</li>
          <li className="studyTime">60h</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PC4-SH</li>
          <li className="course-title">Développement d'applications Web</li>
          <li className="studyTime">90h</li>
        </ul>
      </div>
      <div className="row">
        <h4>Phase 4:</h4>
        <ul className="cellule col-3">
          <li className="course-code">420-PD1-SH</li>
          <li className="course-title">Projet intégrateur</li>
          <li className="studyTime">120h</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PD2-SH</li>
          <li className="course-title">Modification d'un système</li>
          <li className="studyTime">60h</li>
        </ul>
        <ul className="cellule col-3">
          <li className="course-code">420-PD3-SH</li>
          <li className="course-title">Nouvelles technologies</li>
          <li className="studyTime">60h</li>
        </ul>
      </div>
      <div className="row">
        <h4>Phase 5:</h4>
        <ul className="cellule col-9">
          <li className="course-code">420-PES-SH</li>
          <li className="course-title">Stage en entreprise</li>
          <li className="studyTime">315h</li>
        </ul>
      </div>
      </div>
    </div>
  )
}