import React, { Component } from "react";

export default class addcontact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };
  static defaultProps = {
    name: "ramu",
    email: "ramu@gmail",
    phone: "333222"
  };
  render() {
    const { name, phone, email } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="enter the name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="enter the contact"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="enter the Email"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <input
              type="submit"
              value="Add contact"
              className="btn btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
