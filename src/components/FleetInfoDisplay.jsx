import { useEffect, useState } from "react";

const FleetInfoDisplay = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(
            '../fleetinfo.json'
        )
        .then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, []);

    // console.log(data);

    if (loading) return <h1>Loading...</h1>;

    if (error)
        return <p>{JSON.stringify(error)}</p>;

    if(!data) return null;



    

    return (
        <div className="grid grid-cols-3 gap-4 mx-8">
            {data.map((category) => (
            <>
            <div key={category.categoryId} className="col-start-1 col-end-2">
                <div className="flex flex-row">
                    <p>{category.category}</p>
                    {/* <img src="../images/sideways.jpg" alt="vehicle-image"/> */}
                </div>
            </div>

            <div className="col-start-1 col-end-1 row-start-2">
                <div className="flex flex-col">
                    {category.vehicles.map((vehicle) => (
                        <button key={vehicle.id}>{vehicle.model}</button>
                    ))}
                </div>
            </div>

            <div className="col-start-2 col-end-2 row-start-2">
                {category.vehicles.map((vehicle) => (
                    <img key={vehicle.id} src={vehicle.img} alt="vehicle"/>
                ))}
            </div>

            <div className="col-start-3 col-end-3 row-start-2">
                {category.vehicles.map((vehicle) =>
                    <table class="table-auto"> 
                        <tbody>
                            <tr>
                                <th>Manufacturer</th>
                                <td>{vehicle.manufacturer}</td>
                            </tr>
                            
                            <tr>
                                <th>Model</th>
                                <td>{vehicle.model}</td>
                            </tr>

                            <tr>
                                <th>Engine size</th>
                                <td>{vehicle.engine_size}</td>
                            </tr>

                            <tr>
                                <th>Year</th>
                                <td>{vehicle.year}</td>
                            </tr>

                            <tr>
                                <th>Doors</th>
                                <td>{vehicle.doors}</td>
                            </tr>

                            <tr>
                                <th>Transmission</th>
                                <td>{vehicle.transmission}</td>
                            </tr>

                            <tr>
                                <th>Fuel</th>
                                <td>{vehicle.fuel}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>  
            </>
            ))}
            
        </div>

    );

};

export default FleetInfoDisplay;