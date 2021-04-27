import React from "react";

const Company = ({ company }) => (
  <div className="details__item company-container">
    <h5>Company</h5>
    <div className="details__body">
      <p>{company.name}</p>
      <p>{company.bs}</p>
      <p className="font-italic">"{company.catchPhrase}"</p>
    </div>
  </div>
);
export default Company;
