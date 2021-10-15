import React from 'react'

import ReactIdSwiper from 'react-id-swiper'

import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import Magnifier from "react-magnifier"
import Icon from './Icon'
import { Button, Badge } from 'reactstrap'

const SwiperGallery = props => {
    const data = props.data
    const [lightBoxOpen, setLightBoxOpen] = React.useState(false)
    const [activeImage, setActiveImage] = React.useState(0)
    const [activeSlide, setActiveSlide] = React.useState(0)

    const ref = React.useRef(null)

    const onClick = (index) => {
        setActiveImage(index)
        setLightBoxOpen(!lightBoxOpen)
    }

    const slideTo = (index) => {
        setActiveSlide(index)
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideToLoop(index)
        }
    }

    const params = {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        on: {
            slideChange: () => setActiveSlide(ref.current.swiper.realIndex)
        }

    }
    const customStyles = {
        overlay: {
            zIndex: '1000',
        },
        bodyOpen: {
            position: 'fixed',
        }
    }
    return (
        <React.Fragment>
            <div className="detail-carousel">
                <Badge color="primary" className="product-badge">Fresh</Badge>
                <Badge color="dark" className="product-badge">Sale</Badge>
                <ReactIdSwiper {...params} ref={ref}>

                    {data.map((item, index) =>
                        <div key={index}>
                            <Magnifier mgShowOverflow={false} mgWidth={2000} mgHeight={2000} className="img-fluid" src={item.img} alt={item.alt} zoomFactor={.11} style={{ cursor: 'default' }} />

                            <Button color="photoswipe" onClick={() => onClick(index)}>
                                <Icon icon="expand-1" className="svg-icon-heavy" />
                            </Button>
                        </div>
                    )}
                </ReactIdSwiper>
            </div>
            {lightBoxOpen && (
                <Lightbox
                    mainSrc={data[activeImage].img}
                    nextSrc={data[(activeImage + 1) % data.length].img}
                    prevSrc={data[(activeImage + data.length - 1) % data.length].img}
                    onCloseRequest={() => setLightBoxOpen(false)}
                    imageCaption={data[activeImage].caption}
                    onMovePrevRequest={() =>
                        setActiveImage((activeImage + data.length - 1) % data.length)
                    }
                    onMoveNextRequest={() =>
                        setActiveImage((activeImage + 1) % data.length)
                    }
                    enableZoom={false}
                    reactModalStyle={customStyles}
                />
            )}
            <div className="swiper-thumbs">
                {data.map((item,index) => 
                    <button key={index} onClick={() => slideTo(index)} className={`swiper-thumb-item detail-thumb-item mb-3 ${activeSlide === index ? 'active' : ''}`}>
                        <img className="img-fluid" src={item.img} alt={item.alt}/>
                    </button>
                )}
            </div>
        </React.Fragment>
    )
};

export default SwiperGallery;