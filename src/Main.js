import React, { useState } from "react";

import "./Main.css";

export default function Main()
{
  let [course, setCourse] = useState(null);
  let [display, setDisplay] = useState(null);

  function handleSubmit(event)
  {
    event.preventDefault();
    alert(`Searching for ${course}`);
    if (course === "420-PA1-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PA2-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PA3-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PA4-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PB1-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PB2-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PB3-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PB4-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PC1-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PC2-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PC3-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PC4-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PD1-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PD2-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PD3-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else if (course === "420-PES-SH")
    {
      setDisplay(
        <div className="display">
          <p>Notes pour {course}: </p>
        </div>
      )
    }
    else
    {
      setDisplay(
        <div className="display">
          <p>Entrez le nom d'une formation dans le formulaire</p>
        </div>
      )
    }
  }

  function updateCourse(event)
  {
    setCourse(event.target.value);
  }

  return (
    <div className="Main">
      <form onSubmit={handleSubmit}>
      <input type="search" className="form-control" onChange={updateCourse} placeholder="420-Pxx-SH" autofocus="on" />
      <input type="submit" value="Search for notes" className="mt-2 btn btn-success" />
      </form>
      <div className="display">
        {display}
      </div>
    </div>
  )
}