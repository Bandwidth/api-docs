import React from 'react';
import blueButtonStyles from '@site/src/components/css/BlueButton.module.css';

export default function BlueButton({link, text}) {
    return (
        <div className={blueButtonStyles.blueButton}>
            <a href={link} target="_blank" rel="noopener">{text}</a>
        </div>
    )
}
