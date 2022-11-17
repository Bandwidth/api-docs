import React from 'react';

function Item({Svg, title, link}) {
    return (
        <div className="item">
            <a href={link} className="item-image">
                <Svg className="item-svg" alt={title}/>
            </a>
            <div className="item-text">
                <a href={link} className="text-link" data-cy="textLink"><h3>{title}</h3></a>
            </div>
        </div>
    );
}

export default function ItemGrid({itemList}) {
    return (
        <div className="item-grid-items">
            {itemList.map((props, idx) => (
                <Item key={idx} {...props} />
            ))}
        </div>
    );
}
