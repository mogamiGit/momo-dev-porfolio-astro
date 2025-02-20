import React from 'react';

interface Props {
    text: string;
    link: string;
    icon?: React.ReactNode;
}

const button: React.FC<Props> = ({ text, link, ...rest }) => {
    return (
        <a href={link} target="_blank">
            <button type="button" dir={link} className="gap-3 text-white bg-dark-blue hover:bg-dark-blue/80 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#415b69]/30 me-2 mb-2">
                {rest.icon && <span>{rest.icon}</span>}
                {text}
            </button>
        </a>
    );
}

export default button;




