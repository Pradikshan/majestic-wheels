import InfoCard from "./InfoCard";
import { PiContactlessPaymentThin } from "react-icons/pi";
import { PiCarProfileThin } from "react-icons/pi";
import { PiCallBellThin } from "react-icons/pi";

export const InfoSection = () => {
    const style = {fontSize: "65"};

    return(
        <div className="mt-32">
            <h1 className="text-center text-6xl font-medium">Why choose us?</h1>
            <div className="flex flex-row justify-center">
                <InfoCard 
                cardIcon={<PiCarProfileThin  style={style}/>} 
                cardTitle={"Arrive in Style"} 
                cardText={"Experience unmatched luxury as you make a grand entrance in our fleet of stylish and meticulously maintained vehicles."}/>
                <InfoCard 
                cardIcon={<PiCallBellThin style={style}/>} 
                cardTitle={"Exceptional Service"} 
                cardText={"Our commitment to excellence extends beyond our vehicles. Enjoy personalized and attentive service that caters to your every need."}/>
                <InfoCard 
                cardIcon={<PiContactlessPaymentThin style={style}/>}
                cardTitle={"Semaless Experience"} 
                cardText={"From reservation to drop-off, we ensure a seamless and stress-free experience, allowing you to focus on the moments that matter."}/>
                
            </div>
        </div>

    );
}