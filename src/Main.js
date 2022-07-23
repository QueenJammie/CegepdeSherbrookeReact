import React, { useState } from "react"

import "./Main.css";

export default function Main()
{
    const [course, setCourse] = useState(null);

    function handleSubmit(event)
    {
        event.preventDefault();
        alert(`Searching for ${course}`);
    }

    function updateCourse(event)
    {
        setCourse(event.target.value);
    }

    return (
        <div className="Main">
            <form onSubmit={handleSubmit}>
            <input type="search" className="form-control" onChange={updateCourse} />
            <input type="submit" value="Search" className="mt-2 btn-primary" />
            </form>
        </div>
    )
}