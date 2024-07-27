import React from "react";

const Alert = (props) => {
  return (
    <div style={{height:"50px"}}>
    {props.alert && (
      <div
        className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type==='danger'?'Error':'Sucess'}</strong> : {props.alert.message}
      </div>
    )}
    </div>
  );
};

export default Alert;