import React from 'react';

const Progress = ({currentStep, steps, setCurrentStep, setResult, result}) => {

    const prevStep = () => {
        let modifiedOutput = [...result.output];
        modifiedOutput.pop();
        setCurrentStep(currentStep - 1);
        setResult({
            ...result,
            output: [...modifiedOutput]
        })
    }

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    return (
        <div className="my-progress mb-5">
            <div className="progress-count mb-3">
               <h5>{`${currentStep}/${steps.length}`}</h5>
            </div>

            {currentStep > 0 ? 
            <svg onClick={prevStep} style={{cursor: 'pointer'}} className="custom-icon prev-icon bi bi-chevron-left" width="18px" height="18px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" />
            </svg> : '' }
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: ((currentStep/steps.length) * 100) + '%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
             {(steps.length > currentStep) ? 
                <svg onClick={nextStep} style={{cursor: 'pointer'}} className="custom-icon next-icon bi bi-chevron-right" width="18px" height="18px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" /> 
                </svg>
            : '' }
        </div>
    )
}

export default Progress;