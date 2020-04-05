import React from 'react';

const Step_9 = (props) => {
    const { setCurrentStep,  currentStep, result, setResult} = props;
    const nextStep = (e) => {
        setCurrentStep(currentStep + 1);
        setResult({
            ...result,
            output: [...result.output, e.target.dataset.value === "true"]
        });
    }
    return (
        <div className="Step_9 text-center">
            <h1>বিগত ১৪ দিনে -জর ,কাশি ,শ্বাসকষ্ট আছে - এমন কারো র সংস্পর্শে কি আপনি এসেছিলেন (পরিবার সদস্য / অফিস কলিগ)?</h1>
            <button onClick={nextStep} className="btn btn-primary mr-1" data-value="false">না</button>
            <button onClick={nextStep} className="btn btn-primary" data-value="true">হ্যাঁ</button>
        </div>
    )
}

export default Step_9;