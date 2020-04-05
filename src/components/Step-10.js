import React from 'react';

const Step_10 = (props) => {
    const { setCurrentStep,  currentStep, result, setResult} = props;
    const nextStep = (e) => {
        setCurrentStep(currentStep + 1);
        setResult({
            ...result,
            output: [...result.output, e.target.dataset.value === "true"]
        });
    }
    return (
        <div className="Step_10 text-center">
            <h1>আপনার কি অন্য কোন অসুখে ভুগছেন (যেমন : ডায়াবেটিস, এজমা বা হাঁপানি , দীর্ঘমেয়াদি শ্বাসকষ্টের রোগ বা সিওপিডি, কিডনি রোগ, ক্যান্সার বা ক্যান্সারের জন্য কোন চিকিৎসা নিচ্ছেন?</h1>
            <button onClick={nextStep} className="btn btn-primary mr-1" data-value="false">না</button>
            <button onClick={nextStep} className="btn btn-primary" data-value="true">হ্যাঁ</button>
        </div>
    )
}

export default Step_10;