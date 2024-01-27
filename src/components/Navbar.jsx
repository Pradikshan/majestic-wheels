import { useState } from "react";
import { IoCarSportOutline, IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <navbar className="lg:sticky lg:top-0 bg-slate-50">
            <div className="lg:flex flex-row px-1 py-5 bg-slate-50 hidden">
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
        
           
            <div className="lg:hidden bg-slate-50">
                {!isMenuOpen && (
                <div className="flex flex-row">
                    <div className="basis-1/4">
                    <button className="text-3xl p-2" onClick={toggleMenu}>
                        <RxHamburgerMenu />
                    </button>
                    </div>

                    <div className="flex flex-row justify-center basis-1/2">
                        <IoCarSportOutline style={{fontSize: "30"}}  className="me-2 mt-2"/>
                        {/* <img src="../images/cabrio-car.png" alt="logo" className="w-16 px-3"/> */}
                        <p className="pt-2 text-2xl font-extrabold"><a href="#home">Majestic Wheels</a></p>
                    </div>
                </div>
                )}
                {/* {isMenuOpen && (
                <div className="flex flex-col h-screen w-auto items-center">
                    <ul className="pt-2 basis-1/2 menu">
                        <li>
                            <a  href="#home">Home</a></li>
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
                </div>
                )} */}
                {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-white flex z-50">
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                            <button className="text-3xl p-2" onClick={toggleMenu}>
                                <IoClose />
                            </button>
                            <ul className="menu" onClick={toggleMenu}>
                                <li>
                                    <a href="#home">Home</a>
                                </li>
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
                            </div>
                        </div>   
                    </div>
                    
                )}

            </div>            
        </navbar>
    );
}

export default Navbar;