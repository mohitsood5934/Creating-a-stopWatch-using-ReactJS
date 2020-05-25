import React from 'react';
const timerHandler = (props)=> {
  return (
    <div>
      {
      (props.status === 0)? 
        <button className="timer-btn timer-btn-gre"
        onClick={props.start}>Start</button> : ""
      }
      {
      (props.status === 1)? 
        <div>
          <button className="timer-btn timer-btn-red"
            onClick={props.stop}>Stop</button>&nbsp;

          <button className="timer-btn timer-btn-yel"
            onClick={props.reset}>Reset</button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button className="timer-btn timer-btn-gre"
            onClick={props.resume}>Resume</button>&nbsp;

          <button className="timer-btn timer-btn-yel"
            onClick={props.reset}>Reset</button>

        </div> : ""
      }
    </div>
  );
}

export default timerHandler;