import { useState } from "react";

export default function Accordion({title,description}) {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleAccordionState = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="text-left border border-gray-200 rounded-md p-4 shadow-sm">
            <h3 
                className={`font-bold text-lg cursor-pointer`} 
                onClick={handleAccordionState}
            >
                {title}
            </h3>
            <div 
                className={`overflow-hidden transition-all duration-1000 ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
            >
                <p className="transition-opacity duration-1000 opacity-100 mt-5">
                   {description}
                </p>
            </div>
        </div>
    );
}
