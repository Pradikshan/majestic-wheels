import { useEffect, useState } from "react";

const BookingForm = () => {
    // console.log(new Date());

    // console.log(document.querySelectorAll("input"));

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // const [selectedCategory, setSelectedCategory] = useState(null);
    // const [selectedModel, setSelectedModel] = useState(null);
 


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../fleetinfo.json');
                const data = await response.json();
                setData(data);
                // setSelectedCategory(data[0]?.categoryId || null);
                // setSelectedModel(data[0]?.vehicles[0]?.model || null);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);
    

    const formValidate = () => {
        const inputElements = document.querySelectorAll("input");
      
        inputElements.forEach((input) => {
          if (input.value === '') {
            input.classList.add('border-rose-500');
            input.classList.remove('border-green-500'); // Remove the other class if present
          } else {
            input.classList.remove('border-rose-500'); // Remove the error class if present
            input.classList.add('border-green-500');
          }
        });
    };

    // const handleCategoryChange = (e) => {
    //     setSelectedCategory(e.target.value);
    //     // Set the selectedModel to the first model in the new category
    //     setSelectedModel(data.find((category) => category.categoryId === e.target.value)?.vehicles[0]?.model || null);
    //   };
    
    //   const handleModelChange = (e) => {
    //     setSelectedModel(e.target.value);
    //   };
    
    if (loading) return <h1>Loading...</h1>;

    if (error)
        return <p>{JSON.stringify(error)}</p>;

    if(!data) return null;
      
    return (
        // <div className="rounded-lg shadow-lg mx-24 bg-slate-200">
        //     <form className="mx-10">
        //         <p className="text-3xl font-bold mt-10 mb-5">Book your ride</p>
        //         <div className="flex flex-row">
        //             <div className="flex flex-col">
        //                 <label for="first_name">First name:</label>
        //                 <input className="border-2 border-rose-500 rounded-lg" type="text" name="first_name"/>
        //             </div>

        //             <div className="flex flex-col ms-24">
        //                 <label for="last_name">Last name:</label>
        //                 <input className="border-2 border-rose-500 rounded-lg" type="text" name="last_name"/>
        //             </div>

        //             <div className="flex flex-col ms-24">
        //                 <label for="email">Email address:</label>
        //                 <input className="border-2 border-rose-500 rounded-lg" type="email" name="email"/>
        //             </div>

        //             <div className="flex flex-col ms-24">
        //                 <label for="phone_number">Phone number:</label>
        //                 <input className="border-2 border-rose-500 rounded-lg" type="email" name="phone_number"/>
        //             </div>
        //         </div>

        //         {/* <div className="flex flex-row">
        //             <div className="flex flex-col">
        //                 <label for="email">Email address:</label>
        //                 <input className="border-2 border-rose-500 rounded-lg" type="email" name="email"/>
        //             </div>
        //         </div>

        //         <div className="flex flex-row">
        //             <div className="flex flex-col">
        //                 <label for="phone_number">Phone number:</label>
        //                 <input className="border-2 border-rose-500 rounded-lg" type="email" name="phone_number"/>
        //             </div>
        //         </div> */}

        //         <div className="flex flex-row">
                    // <div className="flex flex-col">
                    //     <label for="pickup_date">Pick-up date:</label>
                    //     <input className="border-2 border-rose-500 rounded-lg" type="date" name="pickup_date"/>
                    // </div>

                    // <div className="flex flex-col ms-36">
                    //     <label for="dropoff_date">Drop-off date:</label>
                    //     <input className="border-2 border-rose-500 rounded-lg" type="date" name="dropoff_date"/>
                    // </div>
        //         </div>

        //         <div className="flex flex-row">
                    // <div className="flex flex-col">
                    //     <label for="inquires">Inquires:</label>
                    //     <textarea className="border-2 border-rose-500 rounded-lg" type="text" name="inquires" /> 
                    // </div>
        //         </div>

        //     </form>
        // </div>

        <div className="flex justify-center">
            <div className="rounded-3xl shadow-2xl my-16 w-3/4 py-4 bg-slate-50">
            {/* <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: 'url("../public/images/m5.jpg")' }}
            ></div> */}
                <form className="mx-10">
                    <p className="text-3xl font-bold">Book your ride</p>
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <div className="flex flex-col">
                                <label for="first_name">First name:</label>
                                <input type="text" name="first_name" required onChange={formValidate}/>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="flex flex-col">
                                <label for="last_name">Last name:</label>
                                <input type="text" name="last_name" required onChange={formValidate}/>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="flex flex-col">
                                <label for="Email">Email:</label>
                                <input type="email" name="email" required onChange={formValidate}/>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="flex flex-col">
                                <label for="phone_number">Phone number:</label>
                                <input type="number" name="phone_number" required onChange={formValidate}/>
                            </div>
                        </div>

                        {/* {data.map((category) => (
                            <div key={category.categoryId} className="col-span-1">
                            <div className="flex flex-col">
                                <label htmlFor="type">Select vehicle type:</label>
                                <select value={selectedCategory} onChange={handleCategoryChange}>
                                <option value={category.categoryId}>{category.category}</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="model">Select vehicle model:</label>
                                <select value={selectedModel} onChange={handleModelChange}>
                                {category.vehicles.map((vehicle) => (
                                    <option key={vehicle.id} value={vehicle.model}>
                                    {vehicle.model}
                                    </option>
                                ))}
                                </select>
                            </div>
                            </div>
                        ))} */}

                        <div className="col-span-1">
                            <div className="flex flex-col">
                                <label for="vehicle">Select vehicle:</label>
                                <select>
                                {data.flatMap((category) =>
                                    category.vehicles.map((vehicle) => (
                                        <option key={vehicle.id} value={vehicle.id}>
                                            {vehicle.model}
                                        </option>
                                    ))
                                )}
                                </select>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="flex flex-col">
                                <label for="pickup_date">Pick-up date:</label>
                                <input type="date" name="pickup_date" required onChange={formValidate}/>
                            </div>
                        </div>


                        <div className="col-span-1">
                            <div className="flex flex-col">
                                <label for="dropoff_date">Drop-off date:</label>
                                <input type="date" name="dropoff_date" required onChange={formValidate}/>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="flex flex-col">
                                <label for="inquires">Inquires:</label>
                                <textarea type="text" name="inquires"/> 
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>


    );

}

export default BookingForm;