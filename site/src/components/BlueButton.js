import React from 'react';

export default function BlueButton({link, text}) {
    return (
        <div className={'blueButton'}>
            <a href={link} target="_blank" rel="noopener">{text}</a>
        </div>
    )
}
