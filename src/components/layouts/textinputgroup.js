import React from 'react'
import classnames from "classnames";
  const  textInputGroup = ({
      label,
      name,
      type,
      placeholder,
      value,
        error,
      onChange
  }) => {
  return (
    <div className="form-group">
    <label htmlFor={name}>{label}</label>
      <input type={type}
      name = {name}
      className={classnames('form-control form-control-lg is-invalid',{
          'is-invalid':error})}
      placeholder= {placeholder}
      value={value}
      onChange={onChange} 
      />
        {error && <div className="invalid-feedback">this is wrong</div>}
   
        </div>
  )
}
export default textInputGroup