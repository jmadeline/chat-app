import React from "react";
import './Contact.css';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.status
    };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name}></img>
        <div className="name">
          {this.props.name}
          <div className="status">
            <div className="status-text">
              <div className={this.state.online ? "status-online" : "status-offline"} onClick={event => {
                const newStatus = !this.state.online;
                this.setState({ online: newStatus });
              }}>
              </div>
              {this.state.online ? "online" : "offline"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Contact;