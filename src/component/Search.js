const Search = () => {

    const CONTENT = [
        {id: 1, title: "진료과", decf:"원하시는 진료과를 선택하시면", decs:"소개 및 의료진정보를 보실 수 있습니다."},
        {id: 2, title: "전문센터", decf:"원하시는 전문센터를 선택하시면", decs:"소개 및 의료진정보를 보실 수 있습니다."},
        {id: 3, title: "특수클리닉", decf:"원하시는 특수클리닉을 선택하시면", decs:"소개 및 의료진정보를 보실 수 있습니다."},
        {id: 4, title: "외래진료안내", decf:"외래진료 예약부터 진료절차까지", decs:"외래진료의 모든 것을 알려드립니다."},
    ]

    return (
        <section className="Search">
            <h2>진료과/의료진</h2>
            <p>진료과/의료진을 검색하시면 더욱 쉽고 빠르게 서비스를 이용하실 수 있습니다.</p>
            <div className="search_box">
                <input type="text" placeholder="검색하실 진료과/의료진 명을 입력하세요." />
                <i className="xi-search"></i>
            </div>

            <div className="inner">
                {
                    CONTENT.map(content => { 

                        return (
                            <figure key={content.id}>
                                <div className="box">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/Sicon_0" + content.id +".png"} alt="" />
                                </div>
                                <div className="tit">{content.title}</div>
                                <div className="dec">
                                    {content.decf}<br/>
                                    {content.decs}
                                </div>
                            </figure>
                        )
                    })                
                }
            </div>
        </section>
    )
}

export default Search;