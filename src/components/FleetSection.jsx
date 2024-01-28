import FleetInfoDisplay from "./FleetInfoDisplay";

const FleetSection = () => {

    return (
    <div className="mt-20" id="vehicles">
        <div className="flex flex-col ps-8 items-center justify-center">
            <p className="text-5xl font-extrabold my-2 text-center">Explore our fleet of luxurious vehicles</p>
            <p className="text-3xl font-bold my-2">Diverse Vehicle Models</p>
            <p className="text-md font-medium my-2">Discover an array of exceptional vehicle models in our rental fleet. Whether you're embarking on an adventure or heading out for a business trip, we offer a wide selection to suit your needs.</p>
        </div>
        
        <div>
            <FleetInfoDisplay />
        </div>
    </div>
    );

    
}

export default FleetSection;