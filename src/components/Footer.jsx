import { useState } from "react";
import { FaInstagram, FaTwitter, FaSquareFacebook, FaTiktok, FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmail('');

        
    }

    return (
        <div id="footer" className="bg-blue-950 text-white p-5 mt-20">
           <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="flex flex-col">
                <p className="font-bold">Get in touch</p>
                <div className="flex flex-row items-center">
                    <div className="pe-3">
                        <FaPhoneVolume />
                    </div>
                    <p>+11256712400</p>
                </div>

                <div className="flex flex-row items-center">
                    <div className="pe-2">
                        <MdOutlineMailOutline />
                    </div>
                    <p className="sm:truncate">majesticwheels@business.com</p>
                </div>

                <p className="font-bold mt-6">Follow us on</p>
                <div className="flex flex-row text-2xl">
                    <div className="pe-2">
                        <FaInstagram /> 
                    </div>

                    <div className="pe-3">
                    <FaTwitter /> 
                    </div>

                    <div className="pe-3">
                    <FaSquareFacebook /> 
                    </div>

                    <div className="pe-3">
                    <FaTiktok />
                    </div>
                </div>
                {window.innerWidth >= 600 ? (
                <p className="mt-8">&copy; 2024 Majestic Wheels, Inc. All Rights Reserved</p>

                ) : null}
            </div>

            <div className="sm:justify-self-center">
                <p className="font-bold">Working hours:</p>
                <p className="mt-1">Monday - Saturday <br/> 09:00 AM - 06:00 PM <br/>Saturday - Sunday <br/> 09:00AM - 02:00PM</p>
            </div>

            <div className="sm:justify-self-center">
                <p className="font-bold">Support</p>
                <p>FAQ</p>
                <p>Privacy Policy</p>
            </div>

            <div>
                <p className="font-bold">Newsletter</p>
                <p>Subscribe to our newsletter</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name="newsletter" 
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="btn-sub">Subscribe</button>
                </form>
            </div>

            {window.innerWidth <= 600 ? (
            <p className="mt-4">&copy; 2024 Majestic Wheels, Inc. All Rights Reserved</p>

            ) : null}
           </div>
        </div>
    );

}

export default Footer;