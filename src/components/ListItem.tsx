"use client"
import React from 'react';
import * as motion from "motion/react-client"

interface Props {
    year: string;
    title: string;
    subtitle: string;
}

const ListItem: React.FC<Props> = ({ year, title, subtitle }) => {
    const containerClass = "flex flex-1 flex-col md:flex-row items-top py-8 gap-5 border-solid border-b-light border-gray-300"

    const yearClass = "flex gap-2 items-center justify-center text-lg"

    return (
        <div className={containerClass}>
            <div className='basis-1/3 flex flex-start items-start'>
                <div className={yearClass}>
                    <p>[</p>
                    <motion.p
                        className="font-kalnia font-bold"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
                    >
                        {year}
                    </motion.p>
                    <p>]</p>
                </div>
            </div>
            <div className="basis-2/3 w-full">
                <p className="font-semibold uppercase text-lg pb-1">{title}</p>
                <p className="text-sm text-blue-violet">{subtitle}</p>
            </div>
        </div>
    );
};

export default ListItem;