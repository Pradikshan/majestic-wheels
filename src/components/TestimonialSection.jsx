import TestimonialCard from "./TestimonialCard";


export const TestimonialSection = () => {
    
    return(
        <>
            <div className="mt-32 flex flex-col items-center justify-center">
                <h1 className="text-center text-5xl font-extrabold">Customer testimonials</h1>
                <p className="text-lg">Discover what our satisfied customers have to say about their extraordinary experiences with us</p>
            </div>

            <div className="flex flex-row justify-center">
                <TestimonialCard image={"../images/portrait.jpg"} name={"Mary Ann"} testimonial={"Realy long tesimonial for testing purposes "} />
                <TestimonialCard image={"../images/portrait.jpg"} name={"Mary Ann"} testimonial={"Realy long tesimonial for testing purposes gadhshjajhkdajhsdhjahjsahjahasjkdhajsdhj jhadashdhsja"} />
                <TestimonialCard image={"../images/portrait.jpg"} name={"Mary Ann"} testimonial={"Realy long tesimonial for testing purposes gadhshjajhkdajhsdhjahjsahjahasjkdhajsdhj jhadashdhsja"} />
            </div>
        </>

    );
}