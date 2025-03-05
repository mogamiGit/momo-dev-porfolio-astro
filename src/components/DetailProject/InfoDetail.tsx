import React from "react";
import SectionDescription from "../SectionDescription";

interface Props {
      year: string;
      client?: string;
      description: string;
      highlights?: string[];
}

const infoDetail: React.FC<Props> = ({ year, client, description, highlights }) => {
      return(
            <div className="w-full grid grid-cols-3 gap-12">
                  <div className="flex flex-col gap-10 col-span-2">
                        <SectionDescription title="year" description={year} />
                        {client && <SectionDescription title="client" description={client} /> }
                        <SectionDescription title="description" description={description} />
                  </div>
                  <div>
                        <SectionDescription title="highlights" tags={highlights} />
                  </div>
            </div>
      );
} 

export default infoDetail;