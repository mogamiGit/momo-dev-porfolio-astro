import classNames from "classnames";
import React from "react";
import Tag from "../atoms/Tag";
import ArrowDiagonalIcon from "../../../public/images/arrowDiagonalIcon";

interface Props {
  title: string;
  description?: string;
  tags?: string[];
  link?: string;
  className?: string;
}

const sectionDescription: React.FC<Props> = ({ title, description, tags = [], link, className }) => {
  const titleClass = classNames('font-kalnia text-sm text-gray-500 capitalize');
  const containerClass = classNames('w-full flex flex-col',
    {
      'gap-0': tags.length === 0,
      'gap-4': tags.length > 0,
    }
  );

  return (
    <div className={containerClass}>
      <div className="w-full flex flex-col gap-2">
        <p className={titleClass}>{title}</p>
        {description &&
          (link ? (
            <a href={link} target="_blank" className="group whitespace-pre-line hover:underline hover:underline-offset-3 hover:text-blue-violet">
              <div className="flex gap-0.5 items-center">
                <p>{description}</p>
                <ArrowDiagonalIcon className="translate-y-[1px] opacity-0 translate-x-[-5px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            </a>
          ) : (
            <p className={`whitespace-pre-line ${className}`}><span dangerouslySetInnerHTML={{ __html: description }} /></p>
          ))}
      </div>
      {tags &&
        <div className="flex flex-wrap gap-x-1 gap-y-4">
          {tags.map((tag, i) => (
            <Tag key={i} text={tag} variant={"gray"} />
          ))}
        </div>
      }
    </div>
  );
}

export default sectionDescription;
