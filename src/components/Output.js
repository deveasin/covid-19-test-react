import React from 'react';

const Output = ({result}) => {
    console.log(result);

    const positive = result.output.length ? result.output.filter(item => item === true) : [];
    const finalResult = (positive.length / result.output.length) * 100;
    console.log(finalResult)
    return (<div className="output">
        {result.age ? <h1>আপনার বয়সঃ {result.age}</h1> : '' }
        {finalResult > 50 ? <p>আপনি ঝুঁকিতে আছেন। অতিসত্বর ডাক্তারের ডাক্তারের সাথে যোগাযোগ করুন</p> : <p>আপনি কম ঝুঁকিতে আছেন।</p>}
    </div>)
}

export default Output;