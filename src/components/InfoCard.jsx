
const InfoCard = ({ 
    cardTitle, 
    cardIcon, 
    cardText
}) => {
    return (
        <div className="shadow-lg rounded-lg w-1/4 mx-10 my-16 px-3 py-3">
            <div className="flex flex-col items-center">
                {cardIcon}
                <p className="text-2xl">{cardTitle}</p>
                <p className="text-md text-center pt-5 pb-3 italic">{cardText}</p>
            </div>
        </div>
    );

}

export default InfoCard;