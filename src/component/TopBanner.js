import { useState } from 'react';

const TopBanner = () => { 
    //const [변수,변수변경함수] = useState();
    const [TB,setTB] = useState('');
    return (   
    <div className={'TopBanner ' + TB}> 
        <div className="inner">
            <div className="call">
                <i className="xi-call"></i>
                <span>대표전화</span>
                <a href="tel:1544-8900">1544-8900</a>
                <div className="time">
                    <span className="day">평일 : 08:30 ~ 12:00 / 13:30 ~ 17:00</span>
                    <span className="weekend">토요일 : 08:30 ~ 17:00</span>
                </div>
            </div>
            <div className="notOpen">
                <div className='today'>
                    <input type="checkbox" id="open" />
                    <label htmlFor="open">오늘하루 열지않기</label>
                </div>                
                <i className="xi-close" onClick={() => setTB('on')}></i>
            </div>
        </div>      
    </div> 
    )
}

export default TopBanner;