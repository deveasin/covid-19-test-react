import React, { useState } from 'react';
import Step_1 from './components/Step-1';
import Step_2 from './components/Step-2';
import Step_3 from './components/Step-3';

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
    }}
  ]);

  const [currentStep, setCurrentStep] = useState(0);

  return (
      <div className="App">
        <div className="container p-5 mt-5">
          {steps[currentStep].component({setCurrentStep, currentStep})}
        </div>
      </div>
  );
}

export default App;
