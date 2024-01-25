import { useEffect, useState } from "react";
import DropdownCard from "./DropdownCard";

const FAQSection = () => {

    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('../faq.json')
        .then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    }, []);

    if (loading) return <h1>Loading...</h1>;

    if (error)
        return <p>{JSON.stringify(error)}</p>;

    if(!data) return null;


    // console.log(data);

    return (
    
    );

}

export default FAQSection;