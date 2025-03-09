import React from 'react';
import classNames from 'classnames';

interface Props {
    type?: "submit" | "reset" | "button" | undefined;
    text: string;
    link?: string;
    icon?: React.ReactNode;
    className?: string;
}

const button: React.FC<Props> = ({ type, text, link, ...rest }) => {
    const containerClass = classNames("gap-3 text-white bg-medium-blue hover:bg-dark-blue/80 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#415b69]/30 me-2 mb-2", 
        rest.className
    )

    return (
        <a href={link} target="_blank">
            <button type={type} dir={link} className={containerClass} >
                {rest.icon && <span>{rest.icon}</span>}
                {text}
            </button>
        </a>
    );
}

export default button;
