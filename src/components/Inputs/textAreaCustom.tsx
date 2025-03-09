import React, { type ChangeEventHandler } from "react";

interface Props {
      name?: string
      value?: string
      onChange?: ChangeEventHandler<HTMLTextAreaElement>
      required?: boolean;
      placeholder: string
      inputName: string
}

const textAreaCustom: React.FC <Props> = ({name, value, onChange, required, placeholder, inputName}) => {
      return(
            <div  className="w-full">
                  <p className="pl-3 font-semibold capitalize">{inputName}</p>
                  <textarea 
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        placeholder={placeholder}
                        className="w-full h-32 bg-transparent border-0 border-b border-gray-300 dark:border-gray-500 pb-8 pt-3 placeholder-gray-500 outline-none focus:ring-0 focus:border-blue-violet dark:focus:border-blue-violet"
                  />
            </div>
      );
}

export default textAreaCustom;