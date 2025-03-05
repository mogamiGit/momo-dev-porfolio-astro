import classNames from "classnames";
import React from "react";
import Tag from "./Tag";

interface Props {
      title: string;
      description?: string;
      tags?: string[];
}

const sectionDescription: React.FC<Props> = ({ title, description, tags=[] }) => {
      const titleClass = classNames('font-kalnia text-sm text-gray-500 capitalize');
      const containerClass = classNames('w-full flex flex-col',
            {
                 'gap-0' :tags.length === 0,
                 'gap-4' :tags.length > 0,
            }
      );

      return (
            <div className={containerClass}>
                  <div className="w-full flex flex-col gap-2">
                        <p className={titleClass}>{title}</p>
                        { description && <p className="whitespace-pre-line">{description}</p>}
                  </div>
                  { tags && 
                        <div className="flex flex-wrap gap-x-1 gap-y-4">
                              { tags.map(( tag, i ) => (
                                    <Tag key={i} text={tag} variant={"gray"} />
                              )) }
                        </div>
                  }
            </div> 
      );
}

export default sectionDescription;