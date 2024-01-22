import React, { useEffect, useState } from "react";
// import FadeLoader from "react-spinners/ClipLoader";


const FleetInfoDisplay = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);

    // const [imgLoaded, setImgLoaded] = useState(false);

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
            // setSelectedCategory(data && data.length > 0 ? data[0].categoryId : null);
            // setSelectedModel(data && data.length > 0 && data[0].vehicles.length > 0 ? data[0].vehicles[0].id : null);
        })
        .then(() => setLoading(false))
        .catch(setError)
        

    }, []);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        setSelectedModel(data[0].vehicles[0].id);;
    };



    // const handleCategoryClick = (categoryId) => {
    //     setSelectedCategory(categoryId);
    
    //     // Find the first vehicle in the new category
    //     const category = data.find((cat) => cat.categoryId === categoryId);
    //     const firstVehicleInCategory = category && category.vehicles.length > 0 ? category.vehicles[0] : null;
    
    //     // Set the selectedModel to the id of the first vehicle in the new category
    //     setSelectedModel(firstVehicleInCategory ? firstVehicleInCategory.id : null);
    //   };
      

    const handleModelClick = (vehicleId) => {
        setSelectedModel(vehicleId);
    };

    // const handleImgLoad = () => {
    //     setImgLoaded(true);
    // }


    const style = {cursor: 'pointer'};

    // console.log(data);

    if (loading) return <h1>Loading...</h1>;

    if (error)
        return <p>{JSON.stringify(error)}</p>;

    if(!data) return null;



    

    return (
        <div className="grid grid-cols-3 mx-6 my-8 shadow-lg rounded-b-2xl border-2 border-t-black bg-slate-300">
          {data.map((category) => (
            <React.Fragment key={category.categoryId}>
              <button 
              className={`btn-category ${selectedCategory === category.categoryId ? 'bg-selected-category' : 'bg-slate-400'}`} 
              onClick={() => handleCategoryClick(category.categoryId)} 
              style={style}>
              {category.category}
                {/* <div className="flex flex-row">
                  <p onClick={() => handleCategoryClick(category.categoryId)} style={style}>
                    {category.category}
                  </p>
                </div> */}
              </button>
              {selectedCategory === category.categoryId && (
                <>
                  <div className="col-start-1 col-end-2 row-start-2 ">
                    <div className="flex flex-col">
                      {category.vehicles.map((vehicle) => (
                        <button
                          key={vehicle.id}
                          onClick={() => handleModelClick(vehicle.id)}
                          style={style}
                          id={selectedModel === vehicle.id ? 'active' : ''}
                          className={`btn-model ${selectedModel === vehicle.id ? 'bg-selected-model' : ''}`}
                        >
                          {vehicle.model}
                        </button>
                      ))}
                    </div>
                  </div>
                  {selectedModel && (
                    <>
                      <div className="col-start-2 col-end-3 row-start-2 ps-10 bg-white">
                        {category.vehicles
                          .filter((vehicle) => vehicle.id === selectedModel)
                          .map((vehicle) => (
                            <img 
                            key={vehicle.id} 
                            src={vehicle.img} 
                            alt="vehicle" 
                            className="w-96 h-82"/>
                          ))}
                      </div>
                      {/* <div className="col-start-2 col-end-3 row-start-2">
                        {category.vehicles
                          .filter((vehicle) => vehicle.id === selectedModel)
                          .map((vehicle) => (
                            <React.Fragment key={vehicle.id}>
                                {imgLoaded ? (
                                    <img 
                                    key={vehicle.id} 
                                    src={vehicle.img} 
                                    alt="vehicle" 
                                    className="transition-opacity"
                                    onLoad={handleImgLoad}
                                    />
                                ) : (
                                <div className="spinner-container">
                                    <FadeLoader size={50} color="#123abc" loading={!imgLoaded} />
                                    <img
                                      style={{ display: imgLoaded ? 'block' : 'none' }}
                                      key={vehicle.id}
                                      src={vehicle.img}
                                      alt="vehicle"
                                      className="transition-opacity"
                                      onLoad={handleImgLoad}
                                    />
                                  </div>
                                )}
                            </React.Fragment>
                          ))}
                      </div> */}

                      <div className="col-start-3 row-start-2 place-self-center pe-2 mb-1">
                        {category.vehicles
                          .filter((vehicle) => vehicle.id === selectedModel)
                          .map((vehicle) => (
                            <>
                                <table key={vehicle.id} className="table-fixed h-full w-full">
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
                                <div className="flex-col">
                                    <p className="px-3 py-3 flex flex-row text-2xl"><div className="text-2xl font-bold">${vehicle.price}</div>/ per day</p>
                                    <button className="btn-book ms-2">Book now</button>
                                </div>  
                            </>
                          ))}
                      </div>

                      {/* <div className="col-start-3 row-start-3">
                        {category.vehicles
                          .filter((vehicle) => vehicle.id === selectedModel)
                          .map((vehicle) => (
                            <p key={vehicle.id}>{vehicle.price}</p>
                          ))
                        }
                      </div> */}
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