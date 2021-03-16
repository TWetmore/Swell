import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import EmptyState from "../display/EmptyState";
import SingleTestContainer from './SingleTestContainer';
import WSTestResult from './WSTestResult';
import TestResult from './TestResult';


export default function TestsContainer() {

  const currentResponse = useSelector(
    (store) => store.business.currentResponse
  );


  return (
    currentResponse.request.network === "ws" ? 
      <WSTestResult currentResponse={currentResponse} /> 
      :
      currentResponse.response && 
      currentResponse.response.testResult && 
      currentResponse.response.testResult.length > 0 ? 
      <TestResult currentResponse={currentResponse} /> 
      : <EmptyState />
  );
}
