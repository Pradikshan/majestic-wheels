import { FaStar } from "react-icons/fa6";

const TestimonialCard = ({ image, name, testimonial }) => {

    // const style = { color: "text-yellow-300"}
    
    return (
        <div className="flex flex-col sm:flex-row rounded-lg shadow-lg w-3/4 p-5 m-5 bg-slate-50">
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
                {window.innerWidth >= 600 ? (
                <p className="text-base mt-3">{testimonial}</p>
                ) : null}
            </div>
            {window.innerWidth <= 600 ? (
            <p className="text-base mt-3 sm:mt-0 sm:ml-3">{testimonial}</p>
            ) : null}
        </div>



    );

}

export default TestimonialCard;