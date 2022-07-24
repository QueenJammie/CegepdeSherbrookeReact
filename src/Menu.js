import React from "react";

import "./Menu.css";

export default function Menu()
{
  let now = new Date();
  let date = now.getDate();
  if (date < 10)
  {
    date = `0${date}`;
  }
  let month = now.getMonth();
  month = month + 1;
  if (month === 1)
  {
    month = `Janvier`;
  }
  else if (month === 2)
  {
    month = `Février`;
  }
  else if (month === 3)
  {
    month = `Mars`;
  }
  else if (month === 4)
  {
    month = `Avril`;
  }
  else if (month === 5)
  {
    month = `Mai`;
  }
  else if (month === 6)
  {
    month = `Juin`;
  }
  else if (month === 7)
  {
    month = `Juillet`;
  }
  else if (month === 8)
  {
    month = `Août`;
  }
  else if (month === 9)
  {
    month = `Septembre`;
  }
  else if (month === 10)
  {
    month = `Octobre`;
  }
  else if (month === 11)
  {
    month = `Novembre`;
  }
  else if (month === 12)
  {
    month = `Décembre`;
  }
  let year = now.getFullYear();

  return (
    <div className="Menu">
      <div className="row">
        <div className="menu-cell col-3">
          <a href="/" className="menu-link">Home</a>
        </div>
        <div className="menu-cell col-3">
          <a href="mailto: jammie.lacc@outlook.com" className="menu-link">Contact</a>
        </div>
        <div className="col-6 date">
          {date} {month} {year}
        </div>
      </div>
    </div>
  )
}