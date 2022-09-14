import TopBanner from "./TopBanner";

const Header = () => {
    return (
        <header className="Header">   {/* component이름하고 똑같이 */}
            <TopBanner />
            <div className="inner">
                <div className="top">
                    <a href="#!"><i className="xi-profile"></i></a>
                    <a href="#!"><i className="xi-paper"></i></a>
                    <select name="lang" id="lang">
                        <option value="lang">Ko</option>
                        <option value="lang">En</option>
                        <option value="lang">Jp</option>
                    </select>
                </div>
                <div className="bottom">
                    <h1>
                        <a href="/">
                            <img src={process.env.PUBLIC_URL + "/assets/images/mo_logo.png"} alt="" />
                        </a>
                    </h1>
                    <nav className="gnb">
                        <ul>
                            <li><a href="#!">진료과/의료진</a></li>
                            <li><a href="#!">진료안내</a></li>
                            <li><a href="#!">진료 예약/발급</a></li>
                            <li><a href="#!">병원안내</a></li>
                            <li><a href="#!">건강정보</a></li>
                        </ul>
                    </nav>
                    <div className="menu_bar">
                        <i className="xi-bars"></i>
                        <i className="xi-search"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;