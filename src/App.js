import React, { useState } from 'react';
import Update24 from './components/Update24';
import Output from './components/Output';
import Step_1 from './components/Step-1';
import Step_2 from './components/Step-2';
import Step_3 from './components/Step-3';
import Step_4 from './components/Step-4';
import Step_5 from './components/Step-5';
import Step_6 from './components/Step-6';
import Step_7 from './components/Step-7';
import Step_8 from './components/Step-8';
import Step_9 from './components/Step-9';
import Step_10 from './components/Step-10';
import Step_11 from './components/Step-11';
import Step_12 from './components/Step-12';
import Step_13 from './components/Step-13';
import Step_14 from './components/Step-14';
import Progress from './components/Progress';

function App() {

  const [steps, setSteps] = useState([
    {name: "Step 1", component: (props) => {
      return <Step_1 {...props} />
    }},
    {name: "Step 2", component: (props) => {
      return <Step_2 {...props} />
    }},
    {name: "Step 3", component: (props) => {
      return <Step_3 {...props} />
    }},
    {name: "Step 4", component: (props) => {
      return <Step_4 {...props} />
    }},
    {name: "Step 5", component: (props) => {
      return <Step_5 {...props} />
    }},
    {name: "Step 6", component: (props) => {
      return <Step_6 {...props} />
    }},
    {name: "Step 7", component: (props) => {
      return <Step_7 {...props} />
    }},
    {name: "Step 8", component: (props) => {
      return <Step_8 {...props} />
    }},
    {name: "Step 9", component: (props) => {
      return <Step_9 {...props} />
    }},
    {name: "Step 10", component: (props) => {
      return <Step_10 {...props} />
    }},
    {name: "Step 11", component: (props) => {
      return <Step_11 {...props} />
    }},
    {name: "Step 12", component: (props) => {
      return <Step_12 {...props} />
    }},
    {name: "Step 13", component: (props) => {
      return <Step_13 {...props} />
    }},
    {name: "Step 14", component: (props) => {
      return <Step_14 {...props} />
    }}
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState({
    age: '',
    output: []
  });

  return (
      <div className="App">
        <div className="container p-5 mt-5">

          <Update24 />
          
          { steps.length > currentStep ? 
            <>
              <Progress currentStep={currentStep} steps={steps} setCurrentStep={setCurrentStep} setResult={setResult} result={result}/>
              {steps[currentStep].component({setCurrentStep, currentStep, result, setResult}) }
            </>
          : <Output result={result} />}
        </div>
      </div>
  );
}

export default App;
