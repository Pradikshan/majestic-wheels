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
    <div className="mt-24 mb-10" id="FAQ">
        <div className="flex flex-col ps-8 items-center justify-center">
            <p className="text-5xl font-extrabold my-2">Frequently Asked Questions</p>
            <p className="text-md font-medium mt-2 mb-10">Explore our frequently asked questions to make your luxury vehicle rental experience smooth and hassle-free.</p>
            {data.map((item) => (
                <DropdownCard key={item.id} title={item.question} dropdown={item.answer}/>
            ))}
        </div>
        
        <div>
            
        </div>
    </div>
    );

}

export default FAQSection;