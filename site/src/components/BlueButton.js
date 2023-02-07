import React from 'react';

export default function BlueButton({link, text}) {
    return (
        <div className="blue-button">
            <a href={link} target="_blank" rel="noopener">{text}</a>
        </div>
    )
}
