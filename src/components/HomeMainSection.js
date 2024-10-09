import React from 'react';
import { Link } from "react-router-dom";


function HomeMainSection() {
  return (
    <div>
      <div className="MainCard">
        <h2>Hi, Welcome to my Portfolio</h2>
        <p>About me goes here.</p>
        <div className="TinyCardsWrapper">
          <div className="TinyCard"> My Projects </div>
          <div className="TinyCard"> Contact Me </div>
        </div>
      </div>

      <div className="MediumCardsWrapper">
        <div className="MediumCard"> My Skills </div>
        <div className="MediumCard"> BMERIT </div>
      </div>

    </div>
  )
}

export default HomeMainSection
