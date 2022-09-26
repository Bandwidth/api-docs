import React from 'react';
import carouselStyles from '@site/src/components/css/Carousel.module.css';
import { useRef } from 'react';


function CarouselItem({Svg, product, link, linkText}) {
    return (
        <div className={carouselStyles.item}>
            <div className={carouselStyles.icon}><Svg/></div>
            <div className={carouselStyles.product}>{product}</div>
            <div className={carouselStyles.link}><a href={link}>{linkText}</a></div>
        </div>
    )
}

export default function Carousel({itemList}) {
    
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
        idx++;
        console.log(idx);
    };

    let idx = 0;

    return (
        <div className={carouselStyles.carouselContainer}>{idx}
            <div className={carouselStyles.header}>Recent Documentation Updates</div>
            <div className={carouselStyles.carousel}>
                <div className={carouselStyles.carouselItemsContainer} ref={ref}>
                    <div className={carouselStyles.carouselItems}>
                        {itemList.map((props, idx) => (
                            <CarouselItem key={idx} {...props} />
                        ))}
                    </div>
                </div>
                <div className={carouselStyles.navButtons}>
                    <button className={carouselStyles.leftButton} onClick={() => scroll(-500)}></button>
                    <button className={carouselStyles.rightButton} onClick={() => scroll(500)}></button>
                </div>
            </div>
        </div>
    )
}