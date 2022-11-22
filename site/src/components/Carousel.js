import React, { useEffect, useState } from 'react';

export default function Carousel({itemList, title}) {
    
    var itemWidthVar = 380;
    var slidePaddingVar = 25;
    var navButtonSizeVar = 50;
    const timeout = 250;
    const Svg = require('@site/static/img/amoeba.svg').default;
    const [currentIndex, setCurrentIndex] = useState(itemList.length * 2);
    const [hasTransitionClass, setHasTransitionClass] = useState(true);
    const [navDisabled, setNavDisabled] = useState(false);
    const [slidePadding, setSlidePadding] = useState(slidePaddingVar);
    const [itemWidth, setItemWidth] = useState(itemWidthVar);
    const [itemHeight, setItemHeight] = useState(itemWidth * (2 / 3));
    const [carouselWidth, setCarouselWidth] = useState(70);
    const [dragPixels, setDragPixels] = useState(0);
    const [distance, setDistance] = useState(0);
    // const [carouselTranslate, setCarouselTranslate] = useState();
    const [navButtonSize, setNavButtonSize] = useState(navButtonSizeVar);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    
    var newItemList = itemList.concat(itemList, itemList, itemList);

    var carouselContentStyle = {
        width: `${carouselWidth}vw`
    }
    var carouselSlidesStyle = {
        marginLeft: `-${slidePadding}px`,
        transform: `translateX(-${(currentIndex * (itemWidth + (slidePadding * 2))) - dragPixels}px)`
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

    const mouseDown = (e) => {
        setIsDown(true);
        setStartX(e.clientX);
        setDistance(dragPixels);
        // console.log(e.clientX)
    }

    const mouseUp = (e) => {
        setIsDown(false);
    }

    const mouseLeave = (e) => {
        setIsDown(false);
        // console.log(e.clientX)
    }

    const mouseMove = (e) => {
        if (isDown) {
            // console.log('down', (e.clientX - startX));
            setDistance(e.clientX - startX);
            setDragPixels(distance);
            if (distance > (itemWidth + (slidePadding * 2))) {
                console.log('moved 1 slide')
                setCurrentIndex(currentIndex - 1)
            }
            console.log('distance', distance)
            if (distance < ((itemWidth + (slidePadding * 2)) * -1)) {
                console.log('moved back 1 slide')
                setCurrentIndex(currentIndex + 1)
            }
            // console.log((itemWidth + (slidePadding * 2)));
            // console.log((e.clientX - startX) / (itemWidth + (slidePadding * 2)))
            // setCurrentIndex(currentIndex - ((e.clientX - startX) / (itemWidth + (slidePadding * 2))));
            console.log(dragPixels)
        } else return;

        e.preventDefault();
    }

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
            }, timeout)
            
        }
        if (currentIndex == itemList.length) {  // keep index near the middle of the list when moving right
            setNavDisabled(true);
            setTimeout(() => {
                setHasTransitionClass(false);
                setCurrentIndex(currentIndex + itemList.length);
            }, timeout)
        }
        if (hasTransitionClass === false) { // turn transition animation back on after 25ms
            setTimeout(() => {
                setHasTransitionClass(true);
                setNavDisabled(false);
            }, timeout/10)
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
            backgroundImage: `url(${imageUrl})`
        }

        var categoriesStyle = {
            width: `${itemContentWidth}px`,
        }

        var postStyle = {
            width: `${itemContentWidth}px`,
        }
        
        return (
            <div className="slide" style={slideStyle}>
                <div className="item" style={itemStyle} data-cy="item">
                    <div className="image" style={imageStyle} data-cy="image"></div>
                    <div className="categories" style={categoriesStyle} data-cy="categories">
                        {categories.map((category, idx) => (
                            <a href={categoryLinks[idx]} key={idx}>{category}</a>
                        ))}
                    </div>
                    <div className="post" style={postStyle} data-cy="post">
                        <a href={postLink}>{postTitle}</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="carousel-container">
            <div className="top-amoeba">
                <Svg/>
            </div>
            <div className="content">
                <div className="carousel-header" data-cy="carouselHeader">{title}</div>
                <div className="carousel-content" style={carouselContentStyle} onMouseDown={mouseDown} onMouseLeave={mouseLeave} onMouseMove={mouseMove} onMouseUp={mouseUp}>
                    <div className="carousel">
                        <div className={`carousel-slides ${hasTransitionClass ? "transition" :""}`} style={carouselSlidesStyle} data-cy="carouselSlides">
                            {newItemList.map((props, idx) => (
                                <CarouselItem key={idx} {...props} index={idx}/>
                            ))}
                        </div>
                        <div className={`nav-buttons ${navDisabled ? "disabled" :""}`} style={navButtonsStyle}>
                            <button className="left-button" onClick={() => scrollCarousel(currentIndex - 1)} style={buttonStyle} data-cy="leftButton"></button>
                            <button className="right-button" onClick={() => scrollCarousel(currentIndex + 1)} style={buttonStyle} data-cy="rightButton"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-amoeba">
                <Svg/>
            </div>
        </div>
    )
}
