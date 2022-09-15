const Convenient = () => {
    
    return (
        <section className="Convenient">
            <div className="inner">
                <div className="firstVisit">
                    <div className="top">
                        <img src={process.env.PUBLIC_URL + "/assets/images/icon_01.png"} alt="" />
                        <h3>첫방문고객 예약상담신청</h3>
                        <div className="txt">
                            <span>전문상담사가 빠른 예약을 도와드립니다.</span>
                            <span>상담시간 : 평일08:00 ~ 17:00</span>
                            <span>토요일, 일요일, 공휴일 제외</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="reserForm">
                            <div className="form">
                                <div><input type="text" name="c_name" id="c_name" placeholder="성함" size="15" /></div>
                                <div><input type="text" name="p_number" id="p_number" placeholder="연락처" size="15" /></div>
                            </div>
                            <div className="application">
                                <input type="submit" value="예약신청" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="certificate">
                    <div className="top">
                        <img src={process.env.PUBLIC_URL + "/assets/images/icon_02.png"} alt="" />
                            <h3>증명서 발급</h3>
                            <div className="txt">
                                <span>온라인으로 증명서를</span>
                                <span>발급받으실 수 있습니다.</span>
                            </div>
                    </div>
                    <div className="bottom">
                        <div className="inner_btn">
                            <a href="#!">발급서비스 안내</a>
                            <a href="#!">온라인증명서발급</a>
                        </div>
                    </div>
                </div>
                <div className="reserConfirm">
                    <div className="top">
                        <img src={process.env.PUBLIC_URL + "/assets/images/icon_03.png"} alt="" />
                            <h3>온라인 진료예약/확인</h3>
                            <div className="txt">
                                <span>온라인으로 쉽고 빠르게</span>
                                <span>진료예약 및 조회를 하실 수 있습니다.</span>
                            </div>
                    </div>
                    <div className="bottom">
                        <div className="inner_btn">
                            <a href="#!">외래진료 예약</a>
                            <a href="#!">건강검진 예약</a>
                            <a href="#!">진료예약 확인</a>
                        </div>
                    </div>
                </div>
                <div className="infm">
                    <div className="top">
                        <img src={process.env.PUBLIC_URL + "/assets/images/icon_04.png"} alt="" />
                            <h3>진료안내</h3>
                            <div className="txt">
                                <span>사정에 따라 변경될 수 있으며,</span>
                                <span>당일예약은 불가합니다.</span>
                                <p>대표전화 : 1544-8900</p>
                            </div>
                    </div>
                    <div className="bottom">
                        <div className="inner_btn">
                            <a href="#!">외래안내</a>
                            <a href="#!">진료시간표</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default Convenient;
