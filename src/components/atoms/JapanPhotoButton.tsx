import React from 'react';
import Button from './Button';

const JapanPhotoButton: React.FC = () => {
      return (
            <Button
                  text="View Japan Photos"
                  link="https://www.flickr.com/photos/mogami"
                  icon={
                        <img
                              className="w-4 h-4"
                              src="/images/code-analysis.svg"
                              alt="magnifying glass code icon"
                        />
                  }
            />
      );
};

export default JapanPhotoButton;
