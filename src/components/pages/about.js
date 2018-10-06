import React from "react";

export default props => {
  return (
    <div>
      <h1 className="display-4">{props.match.params.id}</h1>
      <h1 className="display-4">About Contact Manager</h1>
      <p>Simple app to manage contacts</p>
      <p className='lead text-secondary'>  version 1.0.0</p>
    </div>
  );
};
