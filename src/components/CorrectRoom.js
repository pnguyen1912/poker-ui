import React from 'react';

const CorrectRoom = (props) => {
  const pointArray = [3, 5, 8, 13, 21, 34];
  return (
    <div>
      <div className="ui segment" style={{ textAlign: "center", width: "50%", marginLeft: "25%" }}>
        <form onSubmit={e => e.preventDefault()} className="ui form" action="">
          <div className="field">
            <label>{props.code}</label>
          </div>
        </form>
      </div>
      <div className="ui segment" style={{ textAlign: "center", width: "50%", marginLeft: "25%" }}>
        <form onSubmit={e => e.preventDefault()} className="ui form" action="">
          <div className="field">
            <label>Please select your vote:</label>
            {pointArray.map(i =>
              <button onClick={() => props.updatePoint(i)} style={{ margin: '5px', width: '50px', height: '50px' }}>{i}</button>
            )}
            <br />
            <label>Your vote:</label>
            <h2>{props.point}</h2>
            <button onClick={props.updateSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default CorrectRoom;
