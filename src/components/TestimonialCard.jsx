import { FaStar } from "react-icons/fa6";

const TestimonialCard = ({ image, name, testimonial }) => {

    // const style = { color: "text-yellow-300"}
    
    return (
        <div className="flex flex-row rounded-lg shadow-lg w-3/4 p-5 m-5 bg-slate-50">
            {/* <div className="col-start-1 col-end-1 row-start-1">
                <img src={`${image}`} alt="customer" className="w-24 h-24 object-cover rounded-full "/>
            </div>

            <div className="col-start-2 col-end-2 row-start-1">
                <div className="flex flex-col">
                    <p>{name}</p>
                    <div className="flex flex-row">
                        <CiStar className="text-yellow-300" />
                        <CiStar className="text-yellow-300" />
                        <CiStar className="text-yellow-300" />
                        <CiStar className="text-yellow-300" />
                        <CiStar className="text-yellow-300" />
                    </div>
                    <p>{testimonial}</p>
                </div>
            </div> */}
            <img src={`${image}`} alt="customer" className="w-24 h-24 object-cover rounded-full "/>

            <div className="flex flex-col ps-3 text-wrap">
                <p className="font-bold text-lg">{name}</p>
                <div className="flex flex-row">
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                </div>
                {/* <p className="font-md ">{`"${testimonial}"`}</p> */}
                <p className="text-base mt-3">{testimonial}</p>
            </div>
        </div>



    );

}

export default TestimonialCard;