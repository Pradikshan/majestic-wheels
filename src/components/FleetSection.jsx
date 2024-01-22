import FleetInfoDisplay from "./FleetInfoDisplay";

const FleetSection = () => {

    return (
    <div className="mt-32">
        <h1 className="text-start text-4xl font-medium ms-8">Explore our fleet of luxurious vehicles...</h1>
        <div>
            <FleetInfoDisplay />
        </div>
    </div>
    );

    
}

export default FleetSection;