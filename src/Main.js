import React, { useState } from "react"

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
      <input type="submit" value="Search for notes" className="mt-2 btn-primary" />
      </form>
      {display}
    </div>
  )
}