import React from 'react';

const Step_2 = (props) => {
    const { setCurrentStep,  currentStep} = props;
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    return (
        <div className="Step_2 text-center">
            <h1>অনুগ্রহ করে আপনার বয়স উল্লেখ করুন</h1>
            <p>আপনার বয়সঃ</p>
            <input onBlur={nextStep} style={{maxWidth: '100px', margin: '0 auto'}} type="number" className="form-control" />
        </div>
    )
}

export default Step_2;