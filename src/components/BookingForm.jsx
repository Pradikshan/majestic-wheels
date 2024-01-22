const BookingForm = () => {
    console.log(new Date());
    return (
        <div className="rounded-lg shadow-lg mx-10">
            <form className="mx-10">
                <p>Book your ride now...</p>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <label for="first_name">First name:</label>
                        <input className="border-2 border-rose-500 rounded-lg" type="text" name="first_name"/>
                    </div>

                    <div className="flex flex-col">
                        <label for="last_name">Last name:</label>
                        <input className="border-2 border-rose-500 rounded-lg" type="text" name="last_name"/>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <label for="email">Email address:</label>
                        <input className="border-2 border-rose-500 rounded-lg" type="email" name="email"/>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <label for="phone_number">Phone number:</label>
                        <input className="border-2 border-rose-500 rounded-lg" type="email" name="phone_number"/>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <label for="pickup_date">Pick-up date:</label>
                        <input className="border-2 border-rose-500 rounded-lg" type="date" name="pickup_date"/>
                    </div>

                    <div className="flex flex-col">
                        <label for="dropoff_date">Drop-off date:</label>
                        <input className="border-2 border-rose-500 rounded-lg" type="date" name="dropoff_date"/>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <label for="inquires">Inquires:</label>
                        <textarea className="border-2 border-rose-500 rounded-lg" type="text" name="inquires" /> 
                    </div>
                </div>

            </form>
        </div>


    );

}

export default BookingForm;