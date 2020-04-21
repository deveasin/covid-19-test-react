import React, { useEffect, useState } from 'react';

const Update24 = () => {
    const [data, setData] = useState({});

    useEffect(() => {
       async function fetchData() {
            let fetchData = await fetch('https://corona-api.cramstack.com/');
            let output = await fetchData.json();

            setData(output);
       }
       fetchData();
    }, []);

    const { today_daily_count, today_daily_vs_confirmed_cases } = data;

    return (
        <div className="update_24">
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">গত ২৪ ঘণ্টায় আক্রান্ত</h5>
                            <p className="card-text">{today_daily_count ? today_daily_count[0].Confirmed_Cases_in_Last_24_Hour : 0}</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-3">
                    <div className="card" style={{backgroundColor: '#8DC63F'}}>
                        <div className="card-body">
                            <h5 className="card-title">গত ২৪ ঘণ্টায় সুস্থ</h5>
                            <p className="card-text">{today_daily_count ? today_daily_count[0].Recovery_in_Last_24_Hour : 0}</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-3">
                    <div className="card" style={{backgroundColor: '#ED1C24'}}>
                        <div className="card-body">
                            <h5 className="card-title">গত ২৪ ঘণ্টায় মৃত্যু</h5>
                            <p className="card-text">{today_daily_count ? today_daily_count[0].Death_in_Last_24_Hour : 0}</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-3">
                    <div className="card" style={{backgroundColor: '#398DD3'}}>
                        <div className="card-body">
                            <h5 className="card-title">গত ২৪ ঘণ্টায় পরীক্ষাকৃত নমুনার সংখ্যা</h5>
                            <p className="card-text">{today_daily_vs_confirmed_cases ? today_daily_vs_confirmed_cases[0].Daily_Tests_for_COVID19_ : 0}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Update24;