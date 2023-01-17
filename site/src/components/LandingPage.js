import React from 'react';
import ItemGrid from '@site/src/components/ItemGrid.js';

export default function LandingPage({itemList, Svg, h1Text, h2Text}) {
    return (
        <div className="landing-page">
            <div className="landing-page-left">
                <div className="landing-page-title">
                    <h1>{h1Text}</h1>
                    <h2>{h2Text}</h2>
                </div>
                <ItemGrid itemList={itemList}/>
            </div>
            <div className="landing-page-right">
                <Svg className="landing-page-right-image" />
            </div>
        </div>
    );
}
