import React, { useEffect, useState } from 'react';
import carouselStyles from '@site/src/components/css/Carousel.module.css';


function CarouselItem({Svg, product, link, linkText, index}) {
    return (
        <div className={`${carouselStyles.slide} ${index}`} index={index}>
            <div className={carouselStyles.item}>
                <div className={carouselStyles.icon}><Svg/></div>
                <div className={carouselStyles.product}>{product}</div>
                <div className={carouselStyles.link}><a href={link}>{linkText}</a></div>
            </div>
        </div>
    )
}

export default function Carousel({itemList, title}) {
        
    const Svg = require('@site/static/img/amoeba.svg').default;
    const [currentIndex, setCurrentIndex] = useState(itemList.length * 2);
    const [hasTransitionClass, setHasTransitionClass] = useState(true);
    const [navDisabled, setNavDisabled] = useState(false);

    var newItemList = itemList.concat(itemList, itemList, itemList);

    const scrollCarousel = (newIndex) => {
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        if (currentIndex > itemList.length * 2) {
            setNavDisabled(true);
            setTimeout(() => {
                setHasTransitionClass(false);
                setCurrentIndex(currentIndex - itemList.length);
            }, 250)
            
        }
        if (currentIndex == itemList.length) {
            setNavDisabled(true);
            setTimeout(() => {
                setHasTransitionClass(false);
                setCurrentIndex(currentIndex + itemList.length);
            }, 250)
        }
        if (hasTransitionClass === false) {
            setTimeout(() => {
                setHasTransitionClass(true);
                setNavDisabled(false);
            }, 25)
        }
    }, [currentIndex])

    return (
        <div className={carouselStyles.carouselContainer}>
            <div className={`${carouselStyles.decoration} ${carouselStyles.top}`}>
                <Svg/>
            </div>
            <div className={carouselStyles.content}>
                <div className={carouselStyles.header}>{title}</div>
                <div className={carouselStyles.carouselContent}>
                    <div className={carouselStyles.carousel}>
                        <div className={`${carouselStyles.carouselSlides} ${hasTransitionClass ? carouselStyles.transition :""}`} style={{ transform: `translateX(-${currentIndex * 430}px)` }}>
                            {newItemList.map((props, idx) => (
                                <CarouselItem key={idx} {...props} index={idx}/>
                            ))}
                        </div>
                        <div className={`${carouselStyles.navButtons} ${navDisabled ? carouselStyles.disabled :""}`}>
                            <button className={carouselStyles.leftButton} onClick={() => scrollCarousel(currentIndex - 1)}></button>
                            <button className={carouselStyles.rightButton} onClick={() => scrollCarousel(currentIndex + 1)}></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${carouselStyles.decoration} ${carouselStyles.bottom}`}>
                <Svg/>
            </div>
        </div>
    )
}