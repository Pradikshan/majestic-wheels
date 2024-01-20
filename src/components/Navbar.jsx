import { IoCarSportOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <navbar className="">
            <div className="flex flex-row px-1 pb-5 mt-3 border-b-2 border-solid">
                <div className="flex flex-row basis-1/4 ps-8">
                    <IoCarSportOutline style={{fontSize: "30"}}  className="self-center me-2 mt-2"/>
                    {/* <img src="../images/cabrio-car.png" alt="logo" className="w-16 px-3"/> */}
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