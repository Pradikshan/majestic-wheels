import { useState } from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <navbar className="sticky top-0 bg-slate-50">
            <div className="flex flex-row px-1 py-5 bg-slate-50">
                <div className="flex flex-row basis-1/4 ps-8">
                    <IoCarSportOutline style={{fontSize: "30"}}  className="self-center me-2 mt-2"/>
                    {/* <img src="../images/cabrio-car.png" alt="logo" className="w-16 px-3"/> */}
                    <p className="pt-2 text-2xl font-extrabold"><a href="#home">Majestic Wheels</a></p>
                </div>
                
                <ul className="flex pt-2 basis-1/2 justify-center">
                    <li>
                        <a href="#home">Home</a></li>
                    <li>
                        <a href="#vehicles">Vehicles</a>
                    </li>
                    <li>
                        <a href="#testimonial">Testimonials</a>
                    </li>
                    <li>
                        <a href="#FAQ">FAQ</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#footer">Contact us</a>
                    </li>
                </ul>

                {/* <div>
                    <button className="btn btn-login">Login</button>
                    <button className="btn btn-signup">Sign Up</button>
                </div> */}
            </div>

            
        </navbar>
    );
}

export default Navbar;