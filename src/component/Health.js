const PIC = [
    { id: 1, title: "혈소판 이상 등 출혈이 잘 되는 질환", date: "2022-08-27", link: "/a" },
    { id: 2, title: "손 떨림(수전증) 원인과 수술 치료", date: "2022-07-19", link: "/a" },
    { id: 3, title: "대사증후군을 꼭 관리해야 하는 이유", date: "2022-06-13", link: "/a" },
]


const Health = () => {
    return (
        <section className="Health">            
            <h2>건강정보</h2>            
            <div className="inner">
                {
                    PIC.map(pic => { 
                        return (
                            <figure key={pic.id}>
                                <div className="box">
                                     <img src={process.env.PUBLIC_URL + "/assets/images/health_0" + pic.id + ".png"} alt="" />                                    
                                </div>            
                                <div className="tit">{pic.title}</div>
                                <div className="date">{pic.date}</div>
                            </figure>
                        )
                    })
                }
            </div>

        </section>
        
    )
}
 
export default Health;