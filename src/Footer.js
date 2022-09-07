const Footer = () => {
    return (
        <footer className="Footer">   {/* component이름하고 똑같이 */}
           <div className="container">
                <div classNameName="left">
                    <div className="logo">
                        <a href="#!">
                            <img src="./img/logo.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <ul>
                            <li><a href="#!">개인정보취급방침</a></li>
                            <li><a href="#!">비급여수가안내</a></li>
                            <li><a href="#!">환자권리장전</a></li>
                            <li><a href="#!">이메일무단수집거부</a></li>
                        </ul>
                    </div>
                    <div className="middle">
                        <span>부산광역시 동래구 충렬대로 96 광혜병원</span>
                        <span>TEL : 051-503-2111</span>
                        <span>FAX : 051-501-1625</span>
                    </div>
                    <div className="bottom">
                        &copy; 2021 GWANGHYE GENERAL HOSPITAL All rights reserved. Designed by ITLEIFE
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;