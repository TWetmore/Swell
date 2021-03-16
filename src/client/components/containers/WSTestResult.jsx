import React from 'react';
import { useSelector } from "react-redux";
import WSTestResultDisplayMessage from "./WSTestResultDisplayMessage";
import TestResult from './TestResult';




export default function WSTestResult(props) {
  const testColor = status === 'PASS' ? 'success'  : 'danger';
  let average;

  const wsTests = useSelector(
    (store) => store.business.wsTests
  );

  const currentResponse = useSelector(
    (store) => store.business.currentResponse
  );

  console.log('currentResponse WSTest===>', currentResponse)


  console.log('in wstests', wsTests.connectionTime); 
  (wsTests.connectionTime.length ? average = (.0001 * wsTests.connectionTime.reduce((acc, el) => acc + el)) / wsTests.connectionTime.length : average = 0);
  return (
    <div className="overflow-parent-container">
    <div style={{padding: '8px', display: 'flex', justifyContent: 'start'}}>
      <div 
        style={{minWidth: '50px', height: '30px', justifyItems: 'center'}}
        className={`has-background-${testColor} cards-titlebar has-text-centered`}
        >
        Average Response Time: {average.toFixed(2)} Seconds
      </div> 
    </div>
      <br></br>
      <div className="overflow-parent-container">
            <div className="websocket_message_container m-3">
              {wsTests.messages.map( el =>
                <WSTestResultDisplayMessage 
                history = {el.history}
                connectionTime = {el.connectionTime}
                recievedMessage = {el.recievedMessage}
                sentMessage = {el.sentMessage}
                />
              )}
            </div>
          </div>
        <br/>
      </div>
  );
}
