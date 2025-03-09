import React, { type ChangeEventHandler } from "react";

interface Props {
      type: string
      name?: string
      value?: string
      onChange?: ChangeEventHandler<HTMLInputElement>
      required?: boolean;
      placeholder: string
      inputName: string
}

const inputCustom: React.FC <Props> = ({type, name, value, onChange, required, placeholder, inputName}) => {
      return(
            <div  className="w-full">
                  <p className="pl-3 font-semibold capitalize">{inputName}</p>
                  <input 
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        placeholder={placeholder}
                        className="w-full bg-transparent border-0 border-b border-gray-300 dark:border-gray-500 pb-8 pt-3 placeholder-gray-500 outline-none focus:ring-0 focus:border-blue-violet dark:focus:border-blue-violet"
                  />
            </div>
      );
}

export default inputCustom;