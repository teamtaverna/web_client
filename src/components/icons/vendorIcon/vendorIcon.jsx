import React from 'react';
import vendorIcon from './vendor.svg';

const VendorIcon = () => (
  <svg
    className="tvn icon vendorIcon"
    {...vendorIcon.attributes}
     dangerouslySetInnerHTML={{ __html: vendorIcon.content }}
  />
);

export default VendorIcon;
