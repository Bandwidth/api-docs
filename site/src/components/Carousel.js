import React, { useEffect, useState, useMemo } from 'react';
import carouselStyles from '@site/src/components/css/Carousel.module.css';

export default function Carousel({itemList, title}) {
    
    var itemWidthVar = 380;
    var slidePaddingVar = 25;
    var navButtonSizeVar = 50;
    const Svg = require('@site/static/img/amoeba.svg').default;
    const [currentIndex, setCurrentIndex] = useState(itemList.length * 2);
    const [hasTransitionClass, setHasTransitionClass] = useState(true);
    const [navDisabled, setNavDisabled] = useState(false);
    const [slidePadding, setSlidePadding] = useState(slidePaddingVar);
    const [itemWidth, setItemWidth] = useState(itemWidthVar);
    const [itemHeight, setItemHeight] = useState(itemWidth * (2 / 3));
    const [carouselWidth, setCarouselWidth] = useState(70);
    const [navButtonSize, setNavButtonSize] = useState(navButtonSizeVar);
    
    var newItemList = itemList.concat(itemList, itemList, itemList);

    var carouselContentStyle = {
        width: `${carouselWidth}vw`
    }
    var carouselSlidesStyle = {
        marginLeft: `-${slidePadding}px`,
        transform: `translateX(-${currentIndex * (itemWidth + (slidePadding * 2))}px)`
    }
    var navButtonsStyle = {
        transform: `translateX(-${(100 - carouselWidth) / 2}vw)`,
        top: `calc(50% - ${navButtonSize / 2}px)`
    }
    var buttonStyle = {
        width: `${navButtonSize}px`,
        height: `${navButtonSize}px`
    }
    
    const scrollCarousel = (newIndex) => {  // allow nav buttons to scroll carousel
        setCurrentIndex(newIndex);
    };

    useEffect(() => {   // carousel dynamic resizing based on screen width
        const resizeCarousel = () => {
            if (window.innerWidth > 996) {
                itemWidthVar = 380;
                slidePaddingVar = 25;
                navButtonSizeVar = 50;
            }
            if (window.innerWidth <= 996 && window.innerWidth > 480) {
                itemWidthVar = 300;
                slidePaddingVar = 25;
                navButtonSizeVar = 50;
            } 
            if (window.innerWidth <= 480) {
                itemWidthVar = carouselWidth * window.innerWidth / 100;
                slidePaddingVar = 15;
                navButtonSizeVar = 40;
            } 
            setItemWidth(itemWidthVar);
            setItemHeight(itemWidthVar * (2 / 3));
            setSlidePadding(slidePaddingVar);
            setNavButtonSize(navButtonSizeVar);
        }

        window.addEventListener('resize', resizeCarousel);

        return () => window.removeEventListener('resize', resizeCarousel);
    }, [])

    useEffect(() => {   // make carousel infinite
        if (currentIndex > itemList.length * 2) {   // keep index near the middle of the list when moving left
            setNavDisabled(true);   // disable nav buttons while silently moving to different card
            setTimeout(() => {  // disable transition animation after card slides, then snap to same card prior in the list
                setHasTransitionClass(false);
                setCurrentIndex(currentIndex - itemList.length);
            }, 250)
            
        }
        if (currentIndex == itemList.length) {  // keep index near the middle of the list when moving right
            setNavDisabled(true);
            setTimeout(() => {
                setHasTransitionClass(false);
                setCurrentIndex(currentIndex + itemList.length);
            }, 250)
        }
        if (hasTransitionClass === false) { // turn transition animation back on after 25ms
            setTimeout(() => {
                setHasTransitionClass(true);
                setNavDisabled(false);
            }, 25)
        }
    }, [currentIndex])  // update when currentIndex is changed (from button click)

    function CarouselItem({imageUrl, categories, categoryLinks, postLink, postTitle}) {   
        var itemContentWidth = itemWidth * .8;

        var slideStyle = {
            margin: `0 ${slidePadding}px`
        }
    
        var itemStyle = {
            width: `${itemWidth}px`,
            height: `${itemHeight}px`
        }

        var imageStyle = {
            width: `${itemContentWidth}px`,
            height: `${itemContentWidth * .51}px`,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: `cover`,
            borderRadius: `14px`,
            boxShadow: `0px 0px 10px #00000029`
        }

        var categoriesStyle = {
            width: `${itemContentWidth}px`,
        }

        var postStyle = {
            width: `${itemContentWidth}px`,
        }
        
        return (
            <div className={carouselStyles.slide} style={slideStyle}>
                <div className={carouselStyles.item} style={itemStyle}>
                    <div className={carouselStyles.image} style={imageStyle}></div>
                    <div className={carouselStyles.categories} style={categoriesStyle}>
                        {categories.map((category, idx) => (
                            <a href={categoryLinks[idx]} key={idx}>{category}</a>
                        ))}
                    </div>
                    <div className={carouselStyles.post} style={postStyle}>
                        <a href={postLink}>{postTitle}</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={carouselStyles.carouselContainer}>
            <div className={`${carouselStyles.decoration} ${carouselStyles.top}`}>
                <Svg/>
            </div>
            <div className={carouselStyles.content}>
                <div className={carouselStyles.header}>{title}</div>
                <div className={carouselStyles.carouselContent} style={carouselContentStyle}>
                    <div className={carouselStyles.carousel}>
                        <div className={`${carouselStyles.carouselSlides} ${hasTransitionClass ? carouselStyles.transition :""}`} style={carouselSlidesStyle}>
                            {newItemList.map((props, idx) => (
                                <CarouselItem key={idx} {...props} index={idx}/>
                            ))}
                        </div>
                        <div className={`${carouselStyles.navButtons} ${navDisabled ? carouselStyles.disabled :""}`} style={navButtonsStyle}>
                            <button className={carouselStyles.leftButton} onClick={() => scrollCarousel(currentIndex - 1)} style={buttonStyle}></button>
                            <button className={carouselStyles.rightButton} onClick={() => scrollCarousel(currentIndex + 1)} style={buttonStyle}></button>
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