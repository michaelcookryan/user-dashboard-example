import React from "react";

const Contact = ({ contact }) => (
  <div className="details__item contact-container">
    <h5>Contact Info</h5>
    <div className="details__body">
      <p>Username: {contact.username}</p>
      <p>
        Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p>
        Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a>
      </p>
      <p>
        Website:{" "}
        <a href={`http://${contact.website}`} target="_blank" rel="noreferrer">
          {contact.website}
        </a>
      </p>
    </div>
  </div>
);
export default Contact;
