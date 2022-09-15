import { useState } from "react"

const News = () => { 
    const tab_content = [
        {
            id: 1,
            title: "병원소식",
            infomation01: "이정호 소화기내과 교수, 고난이도 대장협착 내시경수술 의료계",
            date01: "2022-09-05",
            infomation02: "수술·약물 필요 없는 알츠하이머 치료시대 열린다. 앞으로 향후",
            date02: "2022-09-01",
            infomation03: "부산 광혜병원, 부산광역시장상 수상. 환자가 먼저인 의료진의",
            date03: "2022-08-25",
            infomation04: "광혜병원 응급센터, 보건소와 손잡고 취약계층 의료 지원과 건",
            date04: "2022-08-13",
            infomation05: "뇌사자 장기기증센터 개설및 기증시스템 마련을 위한 사례 연구",
            date05:"2022-08-06",
            link: "/a",
        },
        {
            id: 2, 
            title: "입찰공고", 
            infomation01: "소화기전문 병동 추가개설로 인한 공사",
            date01: "2022-09-03",
            infomation02: ">의료기기 C-Arm_재활치료과 구매",
            date02: "2022-08-11",
            infomation03: "치료기기 ESWT_재활치료과 구매",
            date03: "2022-07-23",
            infomation04: "골밀도측정기_정형외과 추가 구매",
            date04: "2022-06-15",
            infomation05: "의료기기 경피혈중가스분석기_호흡기내과 구매",
            date05:"2022-04-03",
            link: "/a",
        },
        {
            id: 3, 
            title: "언론보도", 
            infomation01: "소화기전문 병동 추가개설로 인한 공사",
            date01: "2022-09-03",
            infomation02: ">의료기기 C-Arm_재활치료과 구매",
            date02: "2022-08-11",
            infomation03: "치료기기 ESWT_재활치료과 구매",
            date03: "2022-07-23",
            infomation04: "골밀도측정기_정형외과 추가 구매",
            date04: "2022-06-15",
            infomation05: "의료기기 경피혈중가스분석기_호흡기내과 구매",
            date05:"2022-04-03",
            link: "/a",
        },
        {
            id: 4, 
            title: "채용정보", 
            infomation01: "소화기전문 병동 추가개설로 인한 공사",
            date01: "2022-09-03",
            infomation02: ">의료기기 C-Arm_재활치료과 구매",
            date02: "2022-08-11",
            infomation03: "치료기기 ESWT_재활치료과 구매",
            date03: "2022-07-23",
            infomation04: "골밀도측정기_정형외과 추가 구매",
            date04: "2022-06-15",
            infomation05: "의료기기 경피혈중가스분석기_호흡기내과 구매",
            date05:"2022-04-03",
            link: "/a",
        },
    ]

    return (
        <section className="News">
            <div className="inner">
                
            </div>

        </section>
    
    
        
        /*
        <section className="News">
            <div className="inner">
                <div className="left">
                    <ul className="tab_menu">
                        <li className="on"><a href="#!" className="pd">병원소식</a></li>
                        <li><a href="#!">입찰공고</a></li>
                    </ul>

                    <div className="tab_content">
                        <div className="on">
                            <ul className="notice">
                                <li>
                                    <a href="#!">
                                        <strong>이정호 소화기내과 교수, 고난이도 대장협착 내시경수술 의료계 </strong>
                                        <span>2022-09-05</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>수술·약물 필요 없는 알츠하이머 치료시대 열린다. 앞으로 향후</strong>
                                        <span>2022-09-01</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>부산 광혜병원, 부산광역시장상 수상. 환자가 먼저인 의료진의</strong>
                                        <span>2022-08-25</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>광혜병원 응급센터, 보건소와 손잡고 취약계층 의료 지원과 건</strong>
                                        <span>2022-08-13</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>뇌사자 장기기증센터 개설및 기증시스템 마련을 위한 사례 연구</strong>
                                        <span>2022-08-06</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="notice">
                                <li>
                                    <a href="#!">
                                        <strong>소화기전문 병동 추가개설로 인한 공사 </strong>
                                        <span>2022-09-03</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>의료기기 C-Arm_재활치료과 구매 </strong>
                                        <span>2022-08-11</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>치료기기 ESWT_재활치료과 구매</strong>
                                        <span>2022-07-23</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>골밀도측정기_정형외과 추가 구매</strong>
                                        <span>2022-06-15</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>의료기기 경피혈중가스분석기_호흡기내과 구매</strong>
                                        <span>2022-04-03</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <ul className="tab_menu">
                        <li className="on"><a href="#!" className="pd">언론보도</a></li>
                        <li><a href="#!">채용정보</a></li>
                    </ul>

                    <div className="tab_content">
                        <div className="on">
                            <ul className="notice">
                                <li>
                                    <a href="#!">
                                        <strong>"월경 과다, 골반 통증" 35세 이상 여성 40~50% 알고보니 자궁</strong>
                                        <span>2022-09-06</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>당뇨병 예방과 치료에 도움되는 식습관 및 생활습관 및 운동을</strong>
                                        <span>2022-09-04</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>"우리아이가 비만이라고요?" 소아비만 세미나 in 광혜병원 3층</strong>
                                        <span>2022-08-29</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>"규칙적인 식습관의 중요성" 명의 광혜병원 김철수 교수, 위장 튼튼</strong>
                                        <span>2022-08-21</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>부산 광혜병원, 6개월동안 임시선별진료소 대상으로 지정되어 운영 </strong>
                                        <span>2022-08-18</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="notice">
                                <li>
                                    <a href="#!">
                                        <strong>2022 재활치료부 작업치료사 채용공고</strong>
                                        <span>2022-09-08</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>2022 신규간호사 채용공고</strong>
                                        <span>2022-08-02</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>2022 재활치료부 물리치료사 채용공고</strong>
                                        <span>2022-07-23</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>2022 방사선사 채용공고</strong>
                                        <span>2022-07-10</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <strong>2022 의료지원부 원무과 채용공고</strong>
                                        <span>2022-04-03</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        */
    )
}

export default News;