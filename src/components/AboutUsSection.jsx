import InfoCard from "./InfoCard";
import { PiBuildingsThin } from "react-icons/pi";


export const AboutUsSection = () => {
    const style = {fontSize: "65"};

    return(
        <div className="mt-32">
            <h1 className="text-center text-5xl font-extrabold">Why choose us?</h1>
            <div className="flex flex-row justify-center">
                <InfoCard 
                cardIcon={<PiBuildingsThin  style={style}/>} 
                cardTitle={"Unparalleled Expertise"} 
                cardText={"Establishing excellence for over two decades, we've been at the forefront of providing exceptional services, setting the standard in the industry"}/>
                <InfoCard 
                cardIcon={<PiBuildingsThin  style={style}/>} 
                cardTitle={"Safety First, Always"} 
                cardText={"Our unwavering commitment to safety ensures your peace of mind throughout every moment of your travels"}/>
                <InfoCard 
                cardIcon={<PiBuildingsThin  style={style}/>} 
                cardTitle={"Green Travel Advocate"} 
                cardText={"Leading the way in sustainability, we're dedicated to eco-friendly practices, making your journey not only enjoyable but also environmentally conscious"}/>
            </div>
        </div>

    );
}