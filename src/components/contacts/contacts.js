import React, { Component } from "react";
import Contact from "./contact";
import { Consumer } from "../../context";

class contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                 
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default contacts;
