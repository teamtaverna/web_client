import React from 'react';
import expandIcon from './expand.svg';

const ExpandIcon = () => (
  <svg
    className="tvn icon"
    {...expandIcon.attributes}
    dangerouslySetInnerHTML={{ __html: expandIcon.content }}
  />
);

export default ExpandIcon;
