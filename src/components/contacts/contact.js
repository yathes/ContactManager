import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from 'react-router-dom'
import axios from "axios";

class contact extends Component {
  state = {
    showContactinfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, phone, email } = this.props.contact;
    const { showContactinfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                Name:
                {name}
                <i
                  onClick={() =>
                    this.setState({
                      showContactinfo: !this.setState.showContactinfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
                 <Link to= {`contact/edit/${id}`} >
                 <i className='fas fa-pencil-alt float-right pr-3 text-dark'></i>
                 </Link>
                 
                 
              </h4>
              {showContactinfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    contact:
                    {phone}
                  </li>
                  <li className="list-group-item">
                    Email:
                    {email}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default contact;
