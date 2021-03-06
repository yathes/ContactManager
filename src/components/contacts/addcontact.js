import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layouts/textinputgroup";
import axios from "axios";

export default class addcontact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "name is empty" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { name: "name is empty" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { name: "name is empty" } });
      return;
    }
    const newContact = {
      name,
      email,
      phone
    };

    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  render() {
    const { name, phone, email, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="name"
                    name="name"
                    placeholder="enter the name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="email"
                    name="email"
                    placeholder="enter the email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="phone"
                    name="phone"
                    placeholder="enter the phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add contact"
                    className="btn btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
