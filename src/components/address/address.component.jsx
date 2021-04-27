import React from "react";

const Address = ({ address }) => (
  <div className="details__item address-container">
    <h5>Address</h5>
    <div className="details__body">
      <span>{address.suite} </span>
      <span>{address.street}, </span>
      <span>{address.city}, </span>
      <span>{address.zipcode}</span>
    </div>
  </div>
);
export default Address;
