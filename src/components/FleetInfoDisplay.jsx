
const FleetInfoDisplay = () => {

    return (
        <div className="grid grid-cols-3 gap-4 mx-8">
            <div className="col-start-1 col-end-2">
                <div className="flex flex-row">
                    <p>Vehicle category</p>
                    <p>Vehicle category</p>
                    {/* <img src="../images/sideways.jpg" alt="vehicle-image"/> */}
                </div>
            </div>

            <div className="col-start-1 col-end-1 row-start-2">
                <div className="flex flex-col">
                    {/* <p>HEllo</p> */}
                    <button>Vehicle name</button>
                    <button>Vehicle name</button>
                    <button>Vehicle name</button>
                </div>
            </div>

            <div className="col-start-2 col-end-2 row-start-2">
                <img src="../images/sideways.jpg" alt="vehicle-image"/>
            </div>

            <div className="col-start-3 col-end-3 row-start-2">
                <table class="table-auto"> 
                    <tr>
                        <th>Manufacturer</th>
                        <td>Audi</td>
                    </tr>
                    
                    <tr>
                        <th>Model</th>
                        <td>A7</td>
                    </tr>

                    <tr>
                        <th>Engine size</th>
                        <td>2000cc</td>
                    </tr>

                    <tr>
                        <th>Year</th>
                        <td>2019</td>
                    </tr>

                    <tr>
                        <th>Doors</th>
                        <td>4</td>
                    </tr>

                    <tr>
                        <th>Transmission</th>
                        <td>Automatic</td>
                    </tr>

                    <tr>
                        <th>Fuel</th>
                        <td>Petrol</td>
                    </tr>
                </table>
            </div>
        </div>

    );

};

export default FleetInfoDisplay;