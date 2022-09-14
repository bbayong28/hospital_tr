import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: "01 광혜병원입니다.", desc: "새로 리뉴얼된 광혜병원이 여러분을 기다리고 있습니다.", link: "/a", title: "The world expands" },
    { id: 2, content: "02 광혜병원입니다.", desc: "새로 리뉴얼된 광혜병원이 여러분을 기다리고 있습니다.", link: "/a", title: "New path created" },
    { id: 3, content: "03 광혜병원입니다.", desc: "새로 리뉴얼된 광혜병원이 여러분을 기다리고 있습니다.", link: "/a", title: "World expands" },
    { id: 4, content: "04 광혜병원입니다.", desc: "새로 리뉴얼된 광혜병원이 여러분을 기다리고 있습니다.", link: "/a", title: "World expands" },
    { id: 5, content: "05 광혜병원입니다.", desc: "새로 리뉴얼된 광혜병원이 여러분을 기다리고 있습니다.", link: "/a", title: "World expands" },
]

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        //dots: true,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
        // fade: true,
    }

   return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                <div className="inner">
                                    <p className='tit'>{slide.content}</p>
                                    <div className='des'>{slide.desc}</div>
                                    <a href={slide.link} target="_blank" className='cbtn'>
                                        VIEW MORE
                                    </a>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
            <div className="slideNum">
                0{IDX + 1}<span> / 0{SLIDE.length}</span>
            </div>
            <ul className="slideTab">
                {
                    SLIDE.map((dots, idx) => {
                        return (
                            <li key={dots.id} className={idx === IDX ? ' on' : ''} onClick={() => mainSlide.current.slickGoTo(idx)}>{dots.title}</li>
                        )
                    })
                }
            </ul>
            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className='xi-arrow-right'></i></button>
            </div>
        </section>
    )
}

export default MainVisual;