const Footer = () => {
    return (
        <footer className="Footer">
            <div class="inner">
                <div className="left">
                    <div class="logo">
                        <a href="#!">
                            <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
                        </a>
                    </div>
                </div>
                <div className="center">
                    <div class="top">
                        <ul>
                            <li><a href="#!">개인정보취급방침</a></li>
                            <li><a href="#!">비급여수가안내</a></li>
                            <li><a href="#!">환자권리장전</a></li>
                            <li><a href="#!">이메일무단수집거부</a></li>
                        </ul>
                    </div>
                    <div class="middle">
                        <span>부산광역시 동래구 충렬대로 96 광혜병원</span>
                        <span>TEL : 051-503-2111</span>
                        <span>FAX : 051-501-1625</span>
                    </div>
                    <div class="bottom">
                        &copy; 2021 GWANGHYE GENERAL HOSPITAL All rights reserved. Designed by ITLEIFE
                    </div>
                </div>
                <div className="right">
                    <a href="https://www.kakaocorp.com/">
                        <i className="xi-kakaotalk"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                        <i className="xi-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/">
                        <i className="xi-facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;