import React from 'react';

const Step_12 = (props) => {
    const { setCurrentStep,  currentStep, result, setResult} = props;
    const nextStep = (e) => {
        setCurrentStep(currentStep + 1);
        setResult({
            ...result,
            output: [...result.output, e.target.dataset.value === "true"]
        });
    }
    return (
        <div className="Step_12 text-center">
            <h1>আপনি কি গত ১৪ দিনে কোনো কোনো ধর্মীয় উপাসনালয় ( মসজিদ , মন্দির , গির্জা ইত্যাদি ) অথবা জনসমাগমপূর্ণ অনুষ্ঠান ( বিয়ে , জন্মদিন , সেমিনার , মিটিং , মিছিল ইত্যাদি ) - এ অংশগ্রহণ করেছেন?</h1>
            <button onClick={nextStep} className="btn btn-primary mr-1" data-value="false">না</button>
            <button onClick={nextStep} className="btn btn-primary" data-value="true">হ্যাঁ</button>
        </div>
    )
}

export default Step_12;