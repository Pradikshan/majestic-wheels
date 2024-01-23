const BookingForm = () => {
    console.log(new Date());
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

        <div className="rounded-lg shadow-xl mx-21 border border-b-gray-950 my-16">
            <form className="mx-10">
                <p className="text-3xl font-bold mt-10 mb-5">Book your ride</p>
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label for="first_name">First name:</label>
                            <input className="border-2 border-rose-500 rounded-lg" type="text" name="first_name"/>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label for="last_name">Last name:</label>
                            <input className="border-2 border-rose-500 rounded-lg" type="text" name="last_name"/>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label for="Email">Email:</label>
                            <input className="border-2 border-rose-500 rounded-lg" type="email" name="email"/>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label for="phone_number">Phone number:</label>
                            <input className="border-2 border-rose-500 rounded-lg" type="number" name="phone_number"/>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label for="pickup_date">Pick-up date:</label>
                            <input className="border-2 border-rose-500 rounded-lg" type="date" name="pickup_date"/>
                        </div>
                    </div>


                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label for="dropoff_date">Drop-off date:</label>
                            <input className="border-2 border-rose-500 rounded-lg" type="date" name="dropoff_date"/>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <label for="inquires">Inquires:</label>
                            <textarea className="border-2 border-rose-500 rounded-lg" type="text" name="inquires"/> 
                        </div>
                    </div>
                </div>

            </form>
        </div>


    );

}

export default BookingForm;