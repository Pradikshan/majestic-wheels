import InfoCard from "./InfoCard";
import { PiContactlessPayment } from "react-icons/pi";
import { PiCarProfile } from "react-icons/pi";
import { PiCallBell } from "react-icons/pi";


export const InfoSection = () => {
    const style = {fontSize: "65"};

    return(
        
        <div id="info" className="mt-36">
            <p className="text-center text-5xl font-extrabold">Effortlessly arrange your ride</p>
            <div className="flex flex-row justify-center">
                <InfoCard 
                cardIcon={<PiCallBell style={style}/>} 
                cardTitle={"Exceptional Service"} 
                cardText={"Our commitment to excellence extends beyond our vehicles. Enjoy personalized and attentive service that caters to your every need"}/>
                <InfoCard 
                cardIcon={<PiContactlessPayment style={style}/>}
                cardTitle={"Semaless Experience"} 
                cardText={"From reservation to drop-off, we ensure a seamless and stress-free experience, allowing you to focus on the moments that matter"}/>
                <InfoCard 
                cardIcon={<PiCarProfile  style={style}/>} 
                cardTitle={"Arrive in Style"} 
                cardText={"Experience unmatched luxury as you make a grand entrance in our fleet of stylish and meticulously maintained vehicles"}/>            
            </div>
        </div>
        
    );
}