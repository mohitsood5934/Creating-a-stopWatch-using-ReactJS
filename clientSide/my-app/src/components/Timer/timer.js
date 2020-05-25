import React from 'react';


const timer = (props) =>{
    const hours = () => {
        if(props.time.hours === 0){
          return <span>00</span>;
        }else {
          return <span>{(props.time.hours >= 10)? props.time.hours : "0"+ props.time.hours}</span>;
        }
     }
     return (
       <div>
          {hours()}:&nbsp;&nbsp;
          <span>{(props.time.minutes >= 10)? props.time.minutes : "0"+ props.time.minutes}</span>&nbsp;:&nbsp;
          <span>{(props.time.seconds >= 10)? props.time.seconds : "0"+ props.time.seconds}</span>&nbsp;&nbsp;
       </div>
     );


}

export default timer;