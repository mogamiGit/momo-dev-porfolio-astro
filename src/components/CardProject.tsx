import React, { type ReactElement } from 'react';
import classNames from 'classnames';
import * as motion from "motion/react-client";
import Check from "../components/Check"
import H4 from "../components/H4"

interface Props {
      title: string;
	description: string;
      buttons: React.ReactNode;
      checks: string[];
}

const cardProject: React.FC<Props> = ({title, description, ...rest}) => {
      return(
            <div>
                  <div>
                        <div>
                              <H4 text={title} />
                              <p>{description}</p>
                        </div>
                        <div>
                              {rest.checks.map((check, index) => (
                                    <Check text={check}/>
                              ))}
                        </div>
                        <div>
                              {rest.buttons}
                        </div>
                  </div>
            </div>
      );
}

export default cardProject;