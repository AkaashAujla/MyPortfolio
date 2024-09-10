import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header class="Header">
            <div class="UpperHeader"><img src="/images/Logo.svg" alt="Logo" class="Logo" width ="20%" />
            </div>
            <nav>
                <ul class="Nav">
                    <Link to="/" class="NavTitle">Home</Link>
                    <Link to="/ProjectPage" class="NavTitle">Projects</Link>
                    <Link to="/ContactPage" class="NavTitle">Contact</Link>
                    <Link to="/PhotographyPage" class="NavImage">
                    <img src="/images/Shutter.png" alt="Logo" class="Logo" width ="20%" /></Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;