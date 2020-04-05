import React, {useRef} from 'react';

const Step_2 = (props) => {
    const { setCurrentStep, currentStep, result, setResult} = props;
    const inputEl = useRef(null);
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
        setResult({
            ...result,
            age: inputEl.current.value
        });
    }

    return (
        <div className="Step_2 text-center">
            <h1>অনুগ্রহ করে আপনার বয়স উল্লেখ করুন</h1>
            <input ref={inputEl} style={{maxWidth: '100px', margin: '0 auto'}} type="number" className="form-control" /> 
            <button onClick={nextStep} className="btn btn-primary mt-4">পরবর্তী</button>
        </div>
    )
}

export default Step_2;