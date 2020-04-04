import React from 'react';

const Step_3 = (props) => {
    const { setCurrentStep,  currentStep} = props;
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }
    return (
        <div className="Step_3 text-center">
            <h1>আপনার কি জ্বর আছে ?</h1>
            <p>অর্থাৎ, শরীরের তাপমাত্রা ৩৭.৫°C অথবা, ৯৮.৪°F থেকে বেশি ?</p>
            <button onClick={nextStep} className="btn btn-primary mr-1">না</button>
            <button onClick={nextStep} className="btn btn-primary">হ্যাঁ</button>
        </div>
    )
}

export default Step_3;