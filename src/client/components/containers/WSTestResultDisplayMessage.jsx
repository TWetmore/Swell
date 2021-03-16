import React from 'react';

export default function WSTestResultDisplayMessage(props) {
  // console.log('props=>>>', props[recievedMessage])
  let time = (.0001 * props.connectionTime).toFixed(2)

  return(
    <div className="grid-container" style={{border: "solid",backgroundColor: "lightblue", padding: "5px", margin: "5px"}} >
      <div className="grid-item" >Message Sent: {props.sentMessage}</div>
      <div className="grid-item">Message Recieved: {props.recievedMessage}</div>
      <div className="grid-item">Strictly Equal: {props.history.toString()}</div>
      <div className="grid-item">Echo Lag Time: {time} Seconds</div>
    </div>
  )
}