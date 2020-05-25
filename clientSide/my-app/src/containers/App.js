import React, { useState } from 'react';
import './App.css';
import Timer from '../components/Timer/timer'
import TimerHandler from '../components/TimerHandler/timerHandler'

const App = () => {
  const [time, setTime] = useState({ seconds: 0, minutes: 0, hours: 0 })
  const [interv, setInterv] = useState();
  const [status, setTimerStatus] = useState(0);
  // stopWatch not started = 0
  // stopWatch started = 1
  // stopWatch stopped = 2
  const startTimer = () => {
    runTimer();
    setTimerStatus(1);
    setInterv(setInterval(runTimer, 1000));
  };

  var updatedSeconds = time.seconds;
  var updatedMinutes = time.minutes;
  var updatedHours = time.hours;

  const runTimer = () => {
    if (updatedMinutes === 60) {
      updatedHours++;
      updatedMinutes = 0;
    }
    if (updatedSeconds === 60) {
      updatedMinutes++;
      updatedSeconds = 0;
    }
    updatedSeconds++;
    return setTime({ seconds: updatedSeconds, minutes: updatedMinutes, hours: updatedHours });
  };
  // stop the timer
  const stopTimer = () => {
    clearInterval(interv);
    setTimerStatus(2);
  };
  // reset the timer 
  const resetTimer = () => {
    clearInterval(interv);
    setTimerStatus(0);
    setTime({ seconds: 0, minutes: 0, hours: 0 })
  };
  // resume the timer
  const resumeTimer = () => startTimer();

  return (
    <div className="main">
      <div className="timer-holder">
        <div className="timer">
        <h1>Assignment - Stop Watch</h1>
          <Timer time={time}></Timer><br></br>
          <TimerHandler status={status} resume={resumeTimer} reset={resetTimer} stop={stopTimer} start={startTimer}></TimerHandler>
        </div>
      </div>
    </div>
  );

}
export default App;
