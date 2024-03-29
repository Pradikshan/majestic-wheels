
const InfoCard = ({ 
    cardTitle, 
    cardIcon, 
    cardText
}) => {
    return (
        <div className="shadow-lg rounded-lg lg:w-1/4 sm:w-1/2 mx-10 my-10 px-3 py-3 bg-slate-50 transition ease-in-out delay-100 hover:scale-110">
            <div className="flex flex-col items-center">
                {cardIcon}
                <p className="text-2xl cursor-default font-semibold">{cardTitle}</p>
                <p className="text-md text-center pt-5 pb-3 cursor-default">{cardText}</p>
            </div>
        </div>
    );

}

export default InfoCard;