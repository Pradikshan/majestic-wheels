import { Link, animateScroll as scroll } from 'react-scroll';

export const HeroText = () => {
    return(
        <div className="basis-1/2 px-3 ms-3 content-center">
            <p class="text-4xl font-bold pt-40">
                Elevate Your Journey in Unrivaled Luxury
            </p>
            <p class="text-lg font-medium mt-4">
                Experience the epitome of style and performance with our exclusive fleet of luxury vehicles. Whether it's a sleek sports car, a luxurious sedan, or a commanding SUV, each ride promises an unforgettable journey.
            </p>
            <button className="btn btn-hero mt-14 w-max px-3 py-3 -ms-1">
                <Link to="vehicles" smooth={true} duration={500}>
                    Explore Our Fleet
                </Link>
            </button>

        </div>

    );
}