import React from 'react';
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <header class="SideBar">
      <nav>
        <div class="NavWrapper">
          <ul class="Nav">
            <Link to="/"><img src="/images/Logo.png" alt="Logo" id="NavLogo"/></Link>
            <Link to="/" class="NavTitle">Home</Link>
            <Link to="/ProjectPage" class="NavTitle">Projects</Link>
            <Link to="/ContactPage" class="NavTitle">Contact</Link>
            <Link to="/PhotographyPage"><img src="/images/Shutter.png" alt="Logo" class="NavImage"/></Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default SideBar;