import React from 'react';
import ItemGrid from '@site/src/components/ItemGrid.js';

export default function LandingPage({itemList, Svg, h1Text, h2Text}) {
    return (
        <div className="landing-page">
            <div className="left">
                <div className="title">
                    <h1>{h1Text}</h1>
                    <h2>{h2Text}</h2>
                </div>
                <ItemGrid itemList={itemList}/>
            </div>
            <div className="right">
                <Svg className="right-image" />
            </div>
        </div>
    );
}
