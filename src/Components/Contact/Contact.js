import React from "react";
import './Contact.css';


function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name}></img>
      <div className="name">
        {props.name}
        <div className="status">
          <div className="status-text">
            <div className={props.status ? "status-online" : "status-offline"}>
            </div>
            {props.status ? "online" : "offline"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;