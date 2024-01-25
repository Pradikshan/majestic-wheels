import { useState } from "react";

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const DropdownCard = ({ title, dropdown}) => {

    const [active, setActive] = useState(false);

    const handleTitleClick = () => {
        setActive(!active);
    }

    return (
        <div className={`border-t-2 border-black w-3/4 py-5 transition-all duration-150 ease-in-out overflow-hidden ${active ? 'text-white bg-blue-950' : ''}`} onClick={handleTitleClick}>
            <div className="flex flex-row justify-between px-3 cursor-pointer text-lg font-semibold">
                <p>{title}</p>
                {active ? <FaMinus /> : <FaPlus />}
            </div>
            {active ? 
            <p className={`px-3 pt-3 ${active ? 'h-auto' : 'overflow-hidden'} transition-all duration-150 ease-in-out`}>
                {dropdown}
            </p>
            : <></>
        }
        </div>

    );

}

export default DropdownCard;