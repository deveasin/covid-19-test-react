import React from 'react';

const Step_1 = (props) => {
    const { setCurrentStep,  currentStep} = props;
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    return (
        <div className="Step_1">
            <h1 className="mb-5">আপনি কি করোনা ভাইরাসে ( কোভিড-১৯) আক্রান্ত ?</h1>
            <button onClick={nextStep} className="btn btn-primary mr-auto ml-auto btn-lg">শুরু করুন</button>
        </div>
    )
}

export default Step_1;