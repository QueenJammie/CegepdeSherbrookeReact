import React from "react"

import "./Main.css";

export default function Main()
{
    return (
        <div className="Main">
            <form>
            <input type="text" className="form-control" />
            <input type="submit" className="mt-2 btn-primary" />
            </form>
        </div>
    )
}