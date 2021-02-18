import React, { useState,useEffect } from 'react';
import '../../styles/public.css';
import '../../styles/fff.css';

function ExchangeGoodsList2() {
    const [goodList, setGoodList] = useState([]);
    const getGoodList = () => {
        const url = 'http://localhost:4000/reward/getGooDList?good_type=2'
        fetch(url, {
            method: 'get',
        })
            //then 是會接前方拋出的結果
            .then((r) => r.json())
            .then((obj) => {
                setGoodList(obj);
                ;
            })
    }

    useEffect(() => {
        getGoodList()
    }, []);

    return (
        <>
            {/* <!-- 整個成就清單區 --> */}
            <div className="row fff-no-mr-and-pad">
                {/* <!--保留空格 --> */}
                <div className="col fff-no-mr-and-pad"></div>
                {/* <!-- 左翻按鍵 --> */}
                <div className="fff-ms-web col-1 col-xl-1 d-flex align-items-center fff-no-mr-and-pad">
                    <i className="fas fa-chevron-circle-left fff-stone-item-forword"></i>
                </div>
                {/* <!-- 獎勵display4個 --> */}
                <div className="col-10 col-sm-8 col-xl-10 fff-no-mr-and-pad" style={{ height: "210px" }}>
                    {/* <!-- 獎勵項目 --> */}
                    <div className="row fff-no-mr-and-pad d-flex align-items-center justify-content-space-between ">
                        {goodList.map((value, index) => (
                            <div className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center" key={index}>
                                <div className="exchange">
                                    <img className="fff-reward-pic" src={"http://localhost:3015/img/rewarditems/" + value.good_pic} alt="" />
                                    <span className="d-flex justify-content-center">{value.good_name}</span>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
                {/* <!-- 右翻按鍵 --> */}
                <div className=" fff-ms-web col-1 col-xl-1 d-flex align-items-center flex-row-reverse fff-no-mr-and-pad">
                    <i className="fas fa-chevron-circle-right fff-stone-item-forword"></i>
                </div>
                {/* <!--保留空格 --> */}
                <div className="col fff-no-mr-and-pad"></div>
            </div>
        </>
    )
}

export default ExchangeGoodsList2