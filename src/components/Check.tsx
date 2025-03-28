import React from 'react';

interface Props {
    text: string;
}

const check: React.FC<Props> = ({ text }) => {
    return (
        <div>
            <div className="flex items-center pb-2">
                <img
                    className="w-6 h-6"
                    src="images/check-vector.svg"
                    alt="chack symbol"
                />
                <p className="font-light italic">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default check;

