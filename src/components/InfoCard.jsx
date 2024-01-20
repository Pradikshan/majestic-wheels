
const InfoCard = ({ 
    cardTitle, 
    cardIcon, 
    cardText
}) => {
    return (
        <div className="shadow-lg rounded-lg w-96 mx-10 my-16 px-3 py-3">
            <div className="flex flex-col items-center">
                {cardIcon}
                <p className="text-3xl">{cardTitle}</p>
                <p className="text-lg text-center pt-5 italic">{cardText}</p>
            </div>
        </div>
    );

}

export default InfoCard;