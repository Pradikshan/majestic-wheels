import TestimonialCard from "./TestimonialCard";


export const TestimonialSection = () => {
    
    return(
        <>
            <div id="testimonial" className="mt-24 flex flex-col items-center justify-center">
                <p className="text-center text-4xl sm:text-5xl font-extrabold">Customer testimonials</p>
                <p className="text-lg">Discover what our satisfied customers have to say about their extraordinary experiences with us</p>
            </div>

            <div className="flex lg:flex-row justify-center sm:flex-col sm:items-center">
                <TestimonialCard image={"../images/aldo.jpg"} name={"Aldo Raine"} testimonial={"Outstanding service, just like taking down the enemy. These folks know their stuff, and my travel experience with them was as precise as a Basterd's mission. Highly recommend for a journey that's a true knockout!"} />
                <TestimonialCard image={"../images/hans.jpg"} name={"Hans Landa"} testimonial={"An impeccable journey with meticulous attention to detail. This establishment, much like a Shosanna Dreyfus plot, ensures every aspect is flawlessly executed. For those who appreciate nothing less than perfection."} />
                <TestimonialCard image={"../images/shosanna3.jpg"} name={"Shosanna"} testimonial={"Indulgence redefined. From the moment you step in, it's a journey of elegance and refinement. Choose this service for a taste of luxury that rivals the grandeur of the silver screen."} />
            </div>
        </>

    );
}