import React from 'react';

const Successed = (props) => {
  return (
    <div className="ui segment" style={{ textAlign: "center", width: "50%", marginLeft: "25%" }}>
      <form onSubmit={e => e.preventDefault()} className="ui form">
        <div className="field">
          <label>You have successedfully vote {props.point} for {props.code}</label>
        </div>
      </form>
    </div>
  )
}

export default Successed;
