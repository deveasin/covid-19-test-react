import React from 'react';

const Step_14 = (props) => {
    const { setCurrentStep,  currentStep, result, setResult} = props;
    const nextStep = (e) => {
        setCurrentStep(currentStep + 1);
        setResult({
            ...result,
            output: [...result.output, e.target.dataset.value === "true"]
        });
    }
    return (
        <div className="Step_14 text-center">
            <h1>আপনার এলাকায় কি করোনা ভাইরাসে ( কোভিড-১৯) আক্রান্ত কোন রোগী রয়েছে?</h1>
            <button onClick={nextStep} className="btn btn-primary mr-1" data-value="false">না</button>
            <button onClick={nextStep} className="btn btn-primary" data-value="true">হ্যাঁ</button>
        </div>
    )
}

export default Step_14;