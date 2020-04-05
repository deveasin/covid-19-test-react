import React from 'react';

const Step_13 = (props) => {
    const { setCurrentStep,  currentStep, result, setResult} = props;
    const nextStep = (e) => {
        setCurrentStep(currentStep + 1);
        setResult({
            ...result,
            output: [...result.output, e.target.dataset.value === "true"]
        });
    }
    return (
        <div className="Step_13 text-center">
            <h1>আপনি কি কোনো ধরণের চিকিৎসা , স্বাস্থ্য সেবা অথবা রোগীর পরিচর্যায় নিয়োজিত আছেন?</h1>
            <button onClick={nextStep} className="btn btn-primary mr-1" data-value="false">না</button>
            <button onClick={nextStep} className="btn btn-primary" data-value="true">হ্যাঁ</button>
        </div>
    )
}

export default Step_13;