import React from 'react';
import landingStyles from './css/LandingPage.module.css';
import ItemGrid from './ItemGrid.js';

export default function LandingPage({itemList, Svg, h1Text, h2Text}) {
    return (
        <div className={landingStyles.landing}>
            <div className={landingStyles.left}>
                <div className={landingStyles.title}>
                    <h1>{h1Text}</h1>
                    <h2>{h2Text}</h2>
                </div>
                <ItemGrid itemList={itemList}/>
            </div>
            <div className={landingStyles.right}>
                <Svg className={landingStyles.rightImage} />
            </div>
        </div>
    );
}
