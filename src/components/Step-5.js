import React from 'react';

const Step_5 = (props) => {
    const { setCurrentStep,  currentStep, result, setResult} = props;
    const nextStep = (e) => {
        setCurrentStep(currentStep + 1);
        setResult({
            ...result,
            output: [...result.output, e.target.dataset.value === "true"]
        });
    }
    return (
        <div className="Step_5 text-center">
            <h1 className="mb-5">আপনার কি শ্বাসকষ্ট আছে বা শ্বাস নিতে বা ফেলতে কষ্ট হচ্ছে?</h1>
            <button onClick={nextStep} className="btn btn-primary mr-1 btn-lg" data-value="false">না</button>
            <button onClick={nextStep} className="btn btn-primary btn-lg" data-value="true">হ্যাঁ</button>
        </div>
    )
}

export default Step_5;