import React from "react";
import { Link } from "react-router-dom"
// import { a } from "react-router-dom";
function Nav() {
    return (
        // <div>
        //     <ul class="nav justify-content-center  bg-dark">
        //         <li class="nav-item">
        //            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        //         </li>
        //         <li class="nav-item">
        //            <Link class="nav-link" to="/listofproduct">Products</Link>
        //         </li>
        //         <li class="nav-item">
        //            <Link class="nav-link" to="/about">About us</Link>
        //         </li>
        //         <li class="nav-item">
        //            <Link class="nav-link" to="/contact">Contact us</Link>
        //         </li>
        //     </ul>
        // </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">BABAL SITE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link class="nav-link" to="/listofproduct">Products</Link>
                        <Link class="nav-link" to="/about">About us</Link>
                        <Link class="nav-link" to="/contact">Contact us</Link>
                        
                    </div>
                </div>
            </div>
        </nav>

    );
}
export default Nav