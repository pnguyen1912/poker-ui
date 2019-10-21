import React from 'react';

const Room = (props) => (
  <div className="ui segment" style={{ textAlign: "center", width: "50%", marginLeft: "25%" }}>
    <form onSubmit={e => e.preventDefault()} className="ui form">
      <div className="field">
        <label>Room code:</label>
        <input
          type="text"
          value={props.code}
          onChange={e => props.updateCode(e.target.value.toUpperCase())}
        />
        <button onClick={props.searchSucessful}>Join</button>
      </div>
    </form>
  </div>
)

export default Room;