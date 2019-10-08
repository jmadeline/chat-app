import React from "react";
import './Contact.css';

let online = true;


function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name}></img>
      <div class="name">
        {props.name}
        <div className="status">
          <div className="status-text">
            <div className={online ? "status-online" : "status-offline"}>
            </div>
            {props.status}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;