import React, { useEffect, useState } from "react";


const FleetInfoDisplay = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [selectedModel, setSelectedModel] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(
            '../fleetinfo.json'
        )
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            setSelectedCategory(data[0].categoryId); 
            setSelectedModel(data[0].vehicles[0].id);;
        })
        .then(() => setLoading(false))
        .catch(setError)
        

    }, []);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        // selectedModel(null);
    };

    const handleModelClick = (vehicleId) => {
        setSelectedModel(vehicleId);
    };

    const style = {cursor: 'pointer'};

    // console.log(data);

    if (loading) return <h1>Loading...</h1>;

    if (error)
        return <p>{JSON.stringify(error)}</p>;

    if(!data) return null;



    

    return (
        <div className="grid grid-cols-3 gap-4 mx-8">
          {data.map((category) => (
            <React.Fragment key={category.categoryId}>
              <div className="col-start-1 col-end-2">
                <div className="flex flex-row">
                  <p onClick={() => handleCategoryClick(category.categoryId)} style={style}>
                    {category.category}
                  </p>
                </div>
              </div>
              {selectedCategory === category.categoryId && (
                <>
                  <div className="col-start-1 col-end-1 row-start-2">
                    <div className="flex flex-col">
                      {category.vehicles.map((vehicle) => (
                        <button key={vehicle.id} onClick={() => handleModelClick(vehicle.id)} style={style}>
                          {vehicle.model}
                        </button>
                      ))}
                    </div>
                  </div>
                  {selectedModel && (
                    <>
                      <div className="col-start-2 col-end-2 row-start-2">
                        {category.vehicles
                          .filter((vehicle) => vehicle.id === selectedModel)
                          .map((vehicle) => (
                            <img key={vehicle.id} src={vehicle.img} alt="vehicle" />
                          ))}
                      </div>
                      <div className="col-start-3 col-end-3 row-start-2">
                        {category.vehicles
                          .filter((vehicle) => vehicle.id === selectedModel)
                          .map((vehicle) => (
                            <table key={vehicle.id} className="table-auto">
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
                          ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      );
};

export default FleetInfoDisplay;