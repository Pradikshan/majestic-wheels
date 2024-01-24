import { CiStar } from "react-icons/ci";

const TestimonialCard = ({ image, name, testimonial }) => {

    // const style = { color: "text-yellow-300"}
    
    return (
        <div className="rounded-lg shadow-lg border-2 border-black w-max">
            <div className="flex flex-col">
                <div className="flex flex-row overflow-hidden">
                    <img src={`${image}`} alt="customer" className="w-24 h-24 object-cover rounded-full "/>
                    <div className="flex flex-col">
                        <p>{name}</p>
                        <div className="flex flex-row">
                            <CiStar className="text-yellow-300" />
                            <CiStar className="text-yellow-300" />
                            <CiStar className="text-yellow-300" />
                            <CiStar className="text-yellow-300" />
                            <CiStar className="text-yellow-300" />
                        </div>

                    </div>

                </div>
                <p>{testimonial}</p>
            </div>
        </div>



    );

}

export default TestimonialCard;