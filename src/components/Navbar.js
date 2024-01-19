import React from "react";

const Navbar = () => {
    return (
        <navbar>
            <div className="flex flex-row px-1 mt-3">
                <div className="flex flex-row basis-1/4">
                    <img src="../images/cabrio-car.png" alt="logo" className="w-16 px-3"/>
                    <p className="pt-2 text-2xl font-extrabold"><a href="#">Majestic Wheels</a></p>
                </div>
                
                <ul className="flex pt-2 basis-1/2 justify-center">
                    <li>
                        <a href="#">Home</a></li>
                    <li>
                        <a href="#">Vehicles</a>
                    </li>
                    <li>
                        <a href="#">Testimonials</a>
                    </li>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                </ul>

                <div>
                    <button className="btn btn-login">Login</button>
                    <button className="btn btn-signup">Sign Up</button>
                </div>


                
            </div>
        </navbar>
    );
}

export default Navbar;