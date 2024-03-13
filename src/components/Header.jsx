import React from "react";

function Header() {
    return (
        <header className="container">
            <div class="nameContainer">
            <h1>Sean Brown</h1>
            <div class="darkerText">
                <p>Web Designer</p>
                <p>Software Developer</p>
            </div>
        </div>
        <div class="statsContainer">
            <div class="pfpContainer">
                <img src="/src/assets/img/pfp.jpeg" alt="Profile Picture of a handsome dude"/>
            </div>
            <div class="stats darkerText">
                <div><a class="linkText" href="https://github.com/SBSoftwareDev"><i class="fa-brands fa-github"></i></a></div>
                <div><a class="linkText" href="https://stackoverflow.com/users/3557315/"><i class="fa-brands fa-stack-overflow"></i></a></div>
                <div><a class="linkText" href="https://www.linkedin.com/in/sean-brown-a98a512b3/"><i class="fa-brands fa-linkedin"></i></a></div>
            </div>
        </div>   
        </header>
    );
}

export default Header;